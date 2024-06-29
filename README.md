
## Create and Mint Tokens
This project implements the "PARAS" ERC20 token (symbol: PRS) on the Ethereum blockchain. The smart contract, defined in Assessment.sol, provides functionalities for minting, burning, and transferring tokens.

The smart contract is located in the `contract/` directory.

### Assessment.sol

This Solidity file defines an ERC20 token called "ParaS" (symbol: PRS). The contract includes:
- **Minting:** Allows the contract owner to mint new tokens.
- **Burning:** Allows token holders to burn (destroy) their own tokens.
- **Transfer:** Allows token holders to transfer tokens to another address.


### `contract/`

- **Assessment.sol**: It Contains the Solidity smart contract definition for the ERC20 token. It includes functions for minting tokens (`mint`), burning tokens (`burn`), and transferring tokens (`transfer`).

### `scripts/`

- **deploy.js**: Deployment script using Hardhat to deploy the ERC20 token contract. It connects to an Ethereum network via Hardhat, deploys the contract, and logs deployment details.

### `pages/`

- **index.js**: Entry point for the React application. It initializes the application and renders components for interacting with the ERC20 token contract.

## Functionality

### Smart Contract

- **Minting Tokens:** The contract owner can mint new tokens to any address.
- **Burning Tokens:** Any token holder can burn a specified amount of their own tokens.
- **Transferring Tokens:** Token holders can transfer tokens to any address.



### Author

  Paras Aggarwal
  <br>parasaggarwal7172@gmail.com</br>
