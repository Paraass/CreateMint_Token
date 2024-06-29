import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const contractABI = [
  "function balanceOf(address) view returns (uint256)",
  "function mint(address to, uint256 amount) external",
  "function burn(uint256 amount) external",
  "function transfer(address to, uint256 amount) returns (bool)",
];

const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; 

function MyTokenApp() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  useEffect(() => {
    const initializeEthers = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setContract(contract);
      setAccount(accounts[0]);
    };
    initializeEthers();
  }, []);

  const getBalance = async () => {
    if (contract && account) {
      const bal = await contract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(bal, 18));
    }
  };

  const handleMint = async () => {
    if (contract) {
      const tx = await contract.mint(account, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      getBalance();
    }
  };

  const handleTransfer = async () => {
    if (contract) {
      const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      getBalance();
    }
  };

  const handleBurn = async () => {
    if (contract) {
      const tx = await contract.burn(ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      getBalance();
    }
  };

  return (
    <div>
      <h1>MyToken App</h1>
      <p>Account: {account}</p>
      <p>Balance: {balance} MTK</p>
      <button onClick={getBalance}>Get Balance</button>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={handleMint}>Mint</button>
        <button onClick={handleBurn}>Burn</button>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient"
        />
        <button onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
}

export default MyTokenApp;

