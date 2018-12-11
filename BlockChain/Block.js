'use strict';
var CryptoJS = require("crypto-js");

/**
    * Represents a Block in a block chain
    * Block consist of transaction a has a lint to a previous block with a previsousHast atribute
    * 
*/
class Block {

    static get maxNumberOfSongs() {
        return 3;
    }

    /**
    * Represents a Block 
    * @constructor
    * @param {string} transactions - a transaction object with song a previous owner and next owner
    * @param {string} previousHash - The previous block hash
    */
    constructor(transactions, previousHash) {
        this.timestamp = new Date();
        this.previousHash = previousHash;
        this.transactions = transactions;
        this.nonce = 0;
        this.hash = this.createHash();
    }

    createHash() {
        return CryptoJS.SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.createHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }

}