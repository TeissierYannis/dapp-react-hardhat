//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

//import "penzeppelin-contracts/blob/v3.3.0/contracts/token/ERC20/ERC20.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/token/ERC20/ERC20Burnable.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract TestToken is ERC20, ERC20Burnable {
    address public minter;
    address private owner;

    event MinterChanged(address indexed from, address to);

    constructor() payable ERC20("TestToken", "TST") {
        owner = msg.sender;
    }

    function passMinterRole(address newMinter) public returns (bool) {
        require(msg.sender == minter, "Only minter can pass the minter role");
        minter = newMinter;

        emit MinterChanged(msg.sender, minter);
        return true;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function mint(address account, uint256 amount) public {
        require(minter == address(0) || msg.sender == minter, "You are not the minter");
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public {
        require(minter == address(0) || msg.sender == minter, "You are not the minter");
        _burn(account, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        if (msg.sender == minter) {
            _transfer(sender, recipient, amount);
            return true;
        }

        super.transferFrom(sender, recipient, amount);
        return true;
    }
}