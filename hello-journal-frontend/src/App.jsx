// src/App.jsx
import { BrowserProvider, Contract } from "ethers";
import { useEffect, useState } from "react";
import { contractAddress, contractABI } from "./contracts/contract";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [account, setAccount] = useState(null);
  const [likes, setLikes] = useState({});

  const emojis = ["💬", "📝", "✨", "📣", "📜"];

  const getProvider = () => {
    if (!window.ethereum) {
      throw new Error("MetaMask not available");
    }
    return new BrowserProvider(window.ethereum);
  };

  const getContract = (providerOrSigner) => {
    return new Contract(contractAddress, contractABI, providerOrSigner);
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
    fetchMessages();
  };

  const fetchMessages = async () => {
    if (!window.ethereum) return;
    try {
      const provider = await getProvider();
      const contract = getContract(provider);
      const total = await contract.getTotalEntries();
      const messages = [];

      for (let i = 0; i < total; i++) {
        const entry = await contract.getEntry(i);
        messages.push({ sender: entry[0], message: entry[1], timestamp: Number(entry[2]) });
      }

      setMessages(messages.reverse()); // Most recent first
    } catch (err) {
      console.error("Failed to fetch messages: ", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    const tx = await contract.postEntry(newMessage);
    await tx.wait();
    setNewMessage("");
    fetchMessages();
  };

  const handleLike = (index) => {
    setLikes((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          fetchMessages();
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <main>
      <h1>📝 Community Journal</h1>
      <div className="intro-box">
        <h3>📘 What’s a Smart Contract?</h3>
        <p><b>Smartcontracts</b> 📝 are self-executing programs, stored and run on a blockchain network, 
        that automatically carries out the terms of an agreement when predefined conditions are met.</p>
        <p>Think of it like a <i>digital vending machine</i>: you put in the correct payment 📜 (condition met), 
        and it automatically dispenses the product ✨ (action executed)!</p>
      </div>

      {/* Step 1: Connect */}
      <section>
        <h2>Step 1: Connect your Web3 Wallet</h2>
        <p>- See messaged posted by others on the blockchain network
        <br></br>- Add your new message to the wall <i>(requires web3 wallet & spendanble ETH)</i></p>
        {!account ? (
          <button onClick={connectWallet}>Connect MetaMask</button>
        ) : (
          <p>✅ <b>Your Web3 Wallet is Connected:</b> {account}</p>
        )}
      </section>

      {/* Step 2: Write Message */}
      <section>
        <h2>Step 2: Write a Message to the Community Wall</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="3"
            placeholder="Share your thoughts here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          />
          <button type="submit">Submit Message</button>
        </form>
      </section>

      {/* Community Wall */}
      <section>
        <h2>🧱 Community Wall</h2>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((entry, i) => {
            const emoji = emojis[i % emojis.length];
            const likeCount = likes[i] || 0;

            return (
              <div className="message-card" key={i}>
                <p>{emoji} {entry.message}</p>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {entry.sender.slice(0, 6)}...{entry.sender.slice(-4)} ·{" "}
                  {new Date(entry.timestamp * 1000).toLocaleString()}
                </div>
                <button
                  onClick={() => handleLike(i)}
                  style={{
                    marginTop: "0.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    color: likeCount > 0 ? "red" : "#888",
                    transition: "transform 0.1s ease",
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = "scale(1.3)"}
                  onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  ❤️ {likeCount}
                </button>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}
