// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public owner;

    constructor() ERC721("Moto Player", "MP") {
        owner = msg.sender;
        createToken(
            "https://ipfs.moralis.io:2053/ipfs/QmPjNSFuGLHfMLfM6Z5BZ1LsUwqa8g4qrAiYSeMZe9iAn6/metadata/0.json"
        );
        createToken(
            "https://ipfs.moralis.io:2053/ipfs/QmPjNSFuGLHfMLfM6Z5BZ1LsUwqa8g4qrAiYSeMZe9iAn6/metadata/1.json"
        );
        createToken(
            "https://ipfs.moralis.io:2053/ipfs/QmPjNSFuGLHfMLfM6Z5BZ1LsUwqa8g4qrAiYSeMZe9iAn6/metadata/2.json"
        );
        createToken(
            "https://ipfs.moralis.io:2053/ipfs/QmPjNSFuGLHfMLfM6Z5BZ1LsUwqa8g4qrAiYSeMZe9iAn6/metadata/3.json"
        );
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        require(msg.sender == owner, "Only owner is allowed to createTokens");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}
