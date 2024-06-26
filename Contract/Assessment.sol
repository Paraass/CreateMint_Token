// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    // The address of the contract owner
    address public owner;

    // Constructor function that sets the token name, symbol, and initial supply
    constructor() ERC20("ParaS", "PRS") {
        // Set the owner to the address that deploys the contract
        owner = msg.sender;

        // Mint 1,000,000 tokens to the owner's address
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // Function to mint new tokens
    function mint(address to, uint256 amount) external {
        // Ensure the function caller is the owner
        require(msg.sender == owner, "Only owner can mint");

        // Mint the specified amount of tokens to the provided address
        _mint(to, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) external {
        // Burn the specified amount of tokens from the caller's address
        _burn(msg.sender, amount);
    }

    // Function to transfer tokens
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        // Call the parent ERC20 contract's transfer function
        return super.transfer(recipient, amount);
    }
}


