// src/contracts/contract.js

export const contractAddress = "0xDE4CEd1e50794559881c3Fd4d1C43814D9BbacE8";

export const contractABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "entries",
    "outputs": [
      { "internalType": "address", "name": "sender", "type": "address" },
      { "internalType": "string", "name": "message", "type": "string" },
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "index", "type": "uint256" }
    ],
    "name": "getEntry",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "string", "name": "", "type": "string" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalEntries",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_message", "type": "string" }
    ],
    "name": "postEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
