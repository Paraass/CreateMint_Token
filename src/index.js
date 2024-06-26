import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

// The ABI of the ERC20 contract
const contractABI = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",

  // Functions to mint and burn tokens
  "function mint(address to, uint256 amount) external",
  "function burn(uint256 amount) external",

  // Transfer tokens
  "function transfer(address to, uint256 amount) returns (bool)",

  // Event
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
];

const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address

function MyTokenApp() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [mintAmount, setMintAmount] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [burnAmount, setBurnAmount] = useState("");

  useEffect(() => {
    const initializeEthers = async () => {
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(prov);
      const sign = prov.getSigner();
      setSigner(sign);
      const cont = new ethers.Contract(contractAddress, contractABI, sign);
      setContract(cont);

      // Get the connected account
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    };
    initializeEethers();
  }, []);

  const getBalance = async () => {
    if (contract && account) {
      const bal = await contract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(bal, 18));
    }
  };

  const mintTokens = async () => {
    if (contract) {
      const tx = await contract.mint(
        account,
        ethers.utils.parseUnits(mintAmount, 18)
      );
      await tx.wait();
      getBalance();
    }
  };

  const transferTokens = async () => {
    if (contract) {
      const tx = await contract.transfer(
        transferTo,
        ethers.utils.parseUnits(transferAmount, 18)
      );
      await tx.wait();
      getBalance();
    }
  };

  const burnTokens = async () => {
    if (contract) {
      const tx = await contract.burn(ethers.utils.parseUnits(burnAmount, 18));
      await tx.wait();
      getBalance();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyToken App</h1>
        <p>Account: {account}</p>
        <p>Balance: {balance} MTK</p>
        <button onClick={getBalance}>Get Balance</button>
        <hr />
        <h2>Mint Tokens</h2>
        <input
          type="text"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
          placeholder="Amount to mint"
        />
        <button onClick={mintTokens}>Mint</button>
        <hr />
        <h2>Transfer Tokens</h2>
        <input
          type="text"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
          placeholder="Recipient address"
        />
        <input
          type="text"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          placeholder="Amount to transfer"
        />
        <button onClick={transferTokens}>Transfer</button>
        <hr />
        <h2>Burn Tokens</h2>
        <input
          type="text"
          value={burnAmount}
          onChange={(e) => setBurnAmount(e.target.value)}
          placeholder="Amount to burn"
        />
        <button onClick={burnTokens}>Burn</button>
      </header>
    </div>
  );
}

export default MyTokenApp;
