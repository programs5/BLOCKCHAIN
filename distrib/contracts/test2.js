const path = require('path');
const fs = require('fs');
const solc = require('/usr/local/lib/node_modules/solc');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Compile the source code
let input = fs.readFileSync('MyToken.sol', 'utf8');
let output = solc.compile(input, 1);

let abi = JSON.parse(output.contracts[':MyToken'].interface);
let bytecode = output.contracts[':MyToken'].bytecode;

let gasEstimate = web3.eth.estimateGas({data: bytecode}).then(console.log);

// Contract object
let MyContract = new web3.eth.Contract(abi);

////////////////

contractData = {data: myTokenByteCode, from: account, gas: 999999 }
deployedContrac = myTokenContract.deploy(contractData)

//deployedContract = MyTokenContract.new(contractData)
//console.log('deployedContract.address: ' + deployedContract.address)

console.log('deployedContract.address: ' + deployedContrac.address)
