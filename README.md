
## Create and Mint Tokens

The smart contract is located in the `contract/` directory.

### Assessment.sol

This Solidity file defines an ERC20 token called "ParaS" (symbol: PRS). The contract includes:
- **Minting:** Allows the contract owner to mint new tokens.
- **Burning:** Allows token holders to burn (destroy) their own tokens.
- **Transfer:** Allows token holders to transfer tokens to another address.

## React Application

The React application is located in the `src/` directory and provides a user interface to interact with the ERC20 token smart contract.

### Components

- **MyTokenApp.js:** This is the main React component that handles the interaction with the ERC20 token. It includes forms to read token information, get the balance of the connected wallet, and transfer tokens to another address.
- **ERC20abi.json:** This JSON file contains the ABI (Application Binary Interface) for the ERC20 contract, which is used to interact with the contract from the React application.
- **ErrorMessage.js:** This component displays error messages to the user when there are issues with transactions or contract interactions.
- **TxList.js:** This component displays a list of recent transactions involving the ERC20 token, including the sender, recipient, and amount of tokens transferred.
- **index.js:** This is the entry point for the React application. It initializes the app and renders the `MyTokenApp` component.

## Functionality

### Smart Contract

- **Minting Tokens:** The contract owner can mint new tokens to any address.
- **Burning Tokens:** Any token holder can burn a specified amount of their own tokens.
- **Transferring Tokens:** Token holders can transfer tokens to any address.

### React Application

- **Get Token Information:** Users can input the ERC20 contract address to retrieve and display the token name, symbol, and total supply.
- **Get Wallet Balance:** Users can connect their Ethereum wallet to see their balance of the ERC20 token.
- **Transfer Tokens:** Users can transfer a specified amount of tokens to another address.
- **Recent Transactions:** The application listens for `Transfer` events from the contract and displays recent transactions.

### Author

  Paras Aggarwal
  <br>parasaggarwal7172@gmail.com</br>
