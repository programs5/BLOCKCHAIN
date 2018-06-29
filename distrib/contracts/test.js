Web3 = require('../lib_js_web3/web3')
HttpProvider = require('../lib_js_web3/web3/httpprovider');

provider = new Web3.providers.HttpProvider("http://localhost:8545")

web3 = new Web3(provider)

var fs = require('fs');

// load files

myTokenABIFile = fs.readFileSync('MyToken_sol_MyToken.abi')
myTokenABI  = JSON.parse(myTokenABIFile.toString())
myTokenBINFile = fs.readFileSync('MyToken_sol_MyToken.bin')
myTokenByteCode = myTokenBINFile.toString()

//deploy

account = web3.eth.accounts[0]
MyTokenContract = web3.eth.contract(myTokenABI)
contractData = { data: myTokenByteCode, from: account, gas: 999999 }
deployedContract = MyTokenContract.new(contractData)

console.log('deployedContract.address: ' + deployedContract.address)
