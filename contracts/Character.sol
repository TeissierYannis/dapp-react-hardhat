//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Character is ERC721, Ownable {

    address public minter;
    uint public totalSupply;
    mapping(address => uint) public balances;

    constructor() public ERC721("Test Character", "TC") {
        minter = msg.sender;
        totalSupply = 0;
    }

    function passMinterRole(address newMinter) public returns (bool) {
        require(msg.sender == minter, "You are not the minter");
        minter = newMinter;

        return true;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
    {
        return "https://sunflower-farmers.com/play/nfts/farm-gnome/metadata";
    }

    function mint(address account, uint amount) public {
        require(amount == 1, "Only one token can be minted at a time");
        require(balanceOf(account) == 0, "Account already has a token");
        require(msg.sender == minter, "You are not the minter");
        uint256 tokenId = totalSupply + amount;
        _mint(account, tokenId);
        totalSupply += amount;
    }
}