import TOKEN_INFO from "paymentTokenABIs/ERC20.json";

export const NFT_ADDRESS = "0xe2bfe0136918fB69D03638d8B0144359ec87E8C2";
export const NFT_MARKET_ADDRESS = "0x72663d82A1afE9276eaCC4EA4148E138ac21f176";
export const CONTRACT_ADDRESS = "0x72663d82A1afE9276eaCC4EA4148E138ac21f176";
export const NFT_CONTRACT_ADDRESS =
  "0xe2bfe0136918fB69D03638d8B0144359ec87E8C2";

export const NFTStorageKey = process.env.REACT_APP_NFT_STORAGE;
export const Networks = {
  BSC: 56,
  BSCTestnet: 97,
};
export const PaymentList = [
  { name: "BNB", value: "BNB" },
  { name: "FLOKIN", value: "FLOKIN" },
];
export const DefaultNetwork = 97;
export const DefaultAvatar = "/assets/img/avatars/avatar.jpg";
export const DefaultCoverImage = "/assets/img/bg/bg.png";
export const DefaultNickName = "@user";
export const MAX_LIMIT_FOR_BNB = 200;
export const MAX_LIMIT_FOR_TOKEN = 1000000000;

export const PAYMENT_TOKEN = {
  FLOKIN: {
    tokenAddress: "0x97ea5efdcb5961a99ba5c96123042507c0210ec1",
    abi: TOKEN_INFO,
  },
  BNB: {
    tokenAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    abi: TOKEN_INFO,
  },
};
