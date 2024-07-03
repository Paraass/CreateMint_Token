
## Create and Mint Tokens
<h2>Overview</h2>
    <p>This Solidity smart contract implements a custom ERC20 token named "Paras" with the symbol "PRS". The token has several features, including minting new tokens, burning existing tokens, and transferring tokens between addresses. The contract utilizes the OpenZeppelin ERC20 implementation to ensure compliance with the ERC20 standard and to provide secure, well-tested functionalities.</p>
    <h2>Features</h2>
    <ul>
        <li><strong>Minting Tokens:</strong> The contract owner can mint new tokens and assign them to any address.</li>
        <li><strong>Burning Tokens:</strong> Any token holder can burn (destroy) their tokens, reducing the total supply.</li>
        <li><strong>Transferring Tokens:</strong> Tokens can be transferred between addresses, with a check to prevent transfers to the zero address.</li>
        <li><strong>Initial Supply:</strong> The contract owner receives an initial supply of 5,000 tokens upon deployment.</li>
    </ul>
    <h2>Contract Details</h2>
    <h3>Imports</h3>
    <ul>
        <li><strong>ERC20:</strong> Standard ERC20 token functionality from OpenZeppelin.</li>
    </ul>
    <h3>State Variables</h3>
    <ul>
        <li><strong>contractOwner:</strong> The address of the contract owner who has special privileges such as minting new tokens.</li>
    </ul>
    <h3>Constructor</h3>
    <ul>
        <li>Name: "Paras"</li>
        <li>Symbol: "PRS"</li>
        <li>Initial Supply: 5,000 tokens (adjusted for decimals) minted to the deployer's address.</li>
        <li>Ownership: The deployer of the contract is set as the owner.</li>
    </ul>
    <h3>Functions</h3>
    <ul>
        <li><strong>mint(address recipient, uint256 amount):</strong> Allows the contract owner to mint new tokens to a specified address. Ensures that only the owner can call this function.</li>
        <li><strong>burn(uint256 amount):</strong> Allows any token holder to burn a specified amount of their tokens, reducing the total supply.</li>
        <li><strong>transfer(address recipient, uint256 amount):</strong> Overrides the standard ERC20 transfer function to include an additional check. Ensures that tokens cannot be transferred to the zero address.</li>

### Author

  Paras Aggarwal
  <br>parasaggarwal7172@gmail.com</br>
