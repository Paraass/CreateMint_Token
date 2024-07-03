// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address public contractOwner;

    constructor() ERC20("Paras", "PRS") {
        contractOwner = msg.sender;
        _mint(msg.sender, 5000 * 10 ** uint(decimals()));
    }

    function mint(address recipient, uint256 amount) external {
        require(msg.sender == contractOwner, "Only the contract owner can mint");
        _mint(recipient, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(recipient != address(0), "Cannot transfer to the zero address");
        return super.transfer(recipient, amount); 
    }
}
