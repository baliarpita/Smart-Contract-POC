# 📝 Community Journal dApp

A lightweight Ethereum-powered journaling dApp that lets users post messages on-chain and react to them with ❤️ likes. Messages are displayed in a clean, emoji-enhanced card layout with a gradient background. Powered by React, Ethers.js, and MetaMask.

---

## Smart Contract

# 1. Access smart contract here for interacting using BaseScan: 0xDE4CEd1e50794559881c3Fd4d1C43814D9BbacE8
https://sepolia.basescan.org/address/0xDE4CEd1e50794559881c3Fd4d1C43814D9BbacE8#code

Smartcontracts are programmable, self-executing programs, stored and run on a blockchain network, that automatically carries out the terms of an agreement when predefined conditions are met. Think of it like a digital vending machine: you put in the correct payment (condition met), and it automatically dispenses the product (action executed).

# 2: Interact with the smart contract using a UI
Review **Installation & Running** section to start the UI on your locahost 

---


## 🚀 Features

- 🔐 Connect your Web3 wallet (MetaMask)
- ✍️ Post messages to a public on-chain journal
- 🧱 View past entries with timestamps and wallet IDs
- ❤️ React to posts with likes (frontend only for now)
- 💬 Emoji-enhanced message display
- 🎨 Clean, responsive design with plain CSS

---

## 🛠 Tech Stack

- **Frontend:** React, Vite
- **Blockchain Integration:** Ethers.js, Hardhat
- **Wallet:** MetaMask / `window.ethereum`
- **Styling:** Custom CSS (no Tailwind)

---


---

## 🔧 Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/your-username/community-journal.git
cd community-journal

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

#4. View the frontend in your localhost
Then visit http://localhost:5173 in your browser.

Requires Node.js v16+ and MetaMask extension installed.

---

## 🔐 Smart Contract Assumptions
The smart contract exposes:

getTotalEntries() → uint: returns total message count

getEntry(index) → [address, string, uint]: returns sender, message, timestamp

postEntry(string message) → posts a new entry

---

## Made with ❤️ using React,  Web3 tech & ChatGPT