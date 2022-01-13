import CharacterContract from "../artifacts/contracts/Character.sol/Character.json";
import GreeterContract from "../artifacts/contracts/Greeter.sol/Greeter.json"
import TestTokenContract from "../artifacts/contracts/TestToken.sol/TestToken.json"
import TokenContract from "../artifacts/contracts/Token.sol/Token.json"

const CharacterAddress = "0x09635F643e140090A9A8Dcd712eD6285858ceBef"
const GreeterAddress = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f"
const TestTokenAddress = "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F"
const TokenAddress = "0x4A679253410272dd5232B3Ff7cF5dbB88f295319"

const Character = {
    contract: CharacterContract,
    address: CharacterAddress
}

const Greeter = {
    contract: GreeterContract,
    address: GreeterAddress
}

const TestToken = {
    contract: TestTokenContract,
    address: TestTokenAddress
}

const Token = {
    contract: TokenContract,
    address: TokenAddress
}

export {Character, Greeter, TestToken, Token};