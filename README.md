# Simple Token Contract

## Deployment Info on Polygon Mumbai Testnet

-   Contract Address -- 0x7B13c89CCd5C58d2cA55bdc17476b57b8Ef21e2d
-   Polygonscan Mumbai Link -- [https://mumbai.polygonscan.com/address/0x7B13c89CCd5C58d2cA55bdc17476b57b8Ef21e2d#code](https://mumbai.polygonscan.com/address/0x7B13c89CCd5C58d2cA55bdc17476b57b8Ef21e2d#code)

## Features

-   Issue Tokens
-   Burn Tokens
-   Transfer Tokens (Caller + Delegate)
-   Account Delegation

## Interaction

-   Since the contract has been verified, you can directly connect wallet on Polygonscan Mumbai and thereby, call all the smart contract functions. Click [here](https://mumbai.polygonscan.com/address/0x7B13c89CCd5C58d2cA55bdc17476b57b8Ef21e2d#code) to go to deployed contract site.

## Installation

1.  Clone this repo.

    ```sh
    git clone https://github.com/githubotoro/simple-token-contract.git
    ```

2.  Install NPM packages.

    ```sh
    npm install
    ```

3.  Create .env file in root directory and enter the following lines.

    ```sh
    PRIVATE_KEY = <YOUR_PRIVATE_KEY>
    ALCHEMY_POLYGON_URL = <YOUR_ALCHEMY_POLYGON_MUMBAI_URL>
    POLYGONSCAN_API_KEY = <YOUR_POLYGONSCAN_API_KEY>
    ```

4.  To deploy the contract, execute this.

    ```sh
    npx hardhat run scripts/deploy.js --network mumbai
    ```

5.  To verify the contract, execute this.

    ```sh
    npx hardhat verify --constructor-args arguments.js <YOUR_DEPLOYED_CONTRACT_ADDRESS> --network mumbai
    ```
