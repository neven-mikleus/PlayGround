/**
 * This code is for testing the block Chain
 * */
//Create a BlockChain
console.log("Creating the block chain");
var bc = new BlockChain();


//create some songs;
console.log("Creating some songs");
var s1 = new Song('Hello1', 'Eminem');
var s2 = new Song('Hello2', 'Eminem');
var s3 = new Song('Hello3', 'Eminem');

//create some transactions;
console.log("Creating some transactions for the songs");
var t1 = new Transaction(s1, "Neven", "Saša");
var t2 = new Transaction(s1, "Saša", "Ivan");
var t3 = new Transaction(s2, "Gordana", "Goca");

console.log("add transactions to BC");
bc.addTransaction(t1);
bc.addTransaction(t2);

console.log("Start mining transactions");
bc.minePendingTransactions();
console.log("Mine completed");

console.log("add one more transaction");
var t4 = new Transaction(s2, "Goca", "Zorica");
bc.addTransaction(t4);
console.log("Start mining transactions");
bc.minePendingTransactions();
console.log("Mine completed");


console.log("Is BC valid: " + bc.isChainValid());

console.log("Owner of song s1:" + bc.whoOwnTheSong(s1));
console.log("Owner of song s2:" + bc.whoOwnTheSong(s2));
console.log("Owner of song s3:" + bc.whoOwnTheSong(s3));

console.log("Print BC");
console.log(bc);