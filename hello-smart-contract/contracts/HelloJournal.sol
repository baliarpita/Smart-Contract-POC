// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloJournal {
    struct Entry {
        address sender;
        string message;
        uint256 timestamp;
    }

    Entry[] public entries;

    function postEntry(string memory _message) public {
        entries.push(Entry({
            sender: msg.sender,
            message: _message,
            timestamp: block.timestamp
        }));
    }

    function getEntry(uint index) public view returns (address, string memory, uint256) {
        Entry storage e = entries[index];
        return (e.sender, e.message, e.timestamp);
    }

    function getTotalEntries() public view returns (uint) {
        return entries.length;
    }
}
