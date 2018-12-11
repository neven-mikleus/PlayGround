
const Block = require("./Block.js");

    /**
 * Represents a Block chain
 * This is the main BlockChain class
 * @constructor
 */
class BlockChain {

    /**
 * Represents a Block chain
 * @constructor
 */
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];

    }

    addBlock(block) {
        this.chain.push(block);
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    createGenesisBlock() {
        return new Block([], "0");
    }

    minePendingTransactions() {
        let block = new Block(this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);
        this.addBlock(block);
        this.pendingTransactions = [];
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.createHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }

    whoOwnTheSong(song) {
        let owner;
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.song === song) {
                    owner = trans.to;
                }

            }
        }
        return owner;
    }

}

module.exports = BlockChain;