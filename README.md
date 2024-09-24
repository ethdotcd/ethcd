# eth.cd

**eth.cd** is an open-source data aggregator for .eth profiles. It is a fork of [web3.bio](https://web3.bio) [github](https://github.com/web3bio/web3bio) but with a unique focus on projecting ENS (Ethereum Name Service) profiles. eth.cd allows users to explore on-chain data linked to any .eth name, offering a comprehensive view of the identity and activities associated with these ENS domains.

## What Does eth.cd Do?

When you search for a .eth name (e.g., nick.eth) on eth.cd, it retrieves and displays all on-chain and publicly verifiable data linked to that .eth name. This includes:

* **ENS Records:** Displays all the information available in the ENS records of the .eth name.
* **POAPs Owned:** Shows the Proof of Attendance Protocol badges owned by the .eth address.
* **NFTs Owned:** Lists all the NFTs associated with the .eth name.
* **Guild Memberships:** Displays the guilds the .eth name is a part of.
* **Transaction History:** Shows the transaction activities of the .eth name.
* **Farcaster Activity:** Displays posts and activities from Farcaster linked to the .eth profile.
* **Mirror Posts:** Shows the blog posts or content published on Mirror by the .eth address.

Additionally, eth.cd allows users to directly tip any .eth name. The tips are sent directly to the Ethereum address attached to the ENS profile.

## Easy Access in the Browser

Accessing .eth names in eth.cd is simple. Just append .cd to the ENS name in your browser, and it will directly load the eth.cd profile. For example, if the ENS name is nick.eth, you can enter nick.eth.cd in your browser, and the eth.cd profile of that ENS name will be displayed.

## Future Plans

We are constantly working to enhance the eth.cd platform. Our upcoming features include:

* **XMTP Protocol Integration:** This will enable direct messaging between .eth profiles, allowing users to communicate securely on the platform.
* **Ethereum Follow Protocol (EFP):** This feature will enable users to follow each other, creating a social layer on top of ENS profiles.

These features will further enrich the user experience, turning eth.cd into a dynamic, interactive platform for the ENS community.

## Local Development

To run the development server locally, use the following commands:

```bash
npm i && npm run dev
# or
yarn && yarn dev
```

## Contributing

We welcome contributions! Feel free to submit a pull request with bug fixes, improvements, or new features. Your feedback is valuable, and you can report bugs or suggest new features on the project's GitHub page or via our social media channels.

## Data Privacy

Currently, data removal is not supported. eth.cd indexes data from publicly verifiable on-chain records and connections, making it a reliable source of decentralized identity information. Revalidation of data is on our roadmap.

## Mobile App

eth.cd can be accessed on both mobile and desktop browsers. However, a desktop browser provides the most optimized experience, especially when exploring detailed on-chain activity and identity data.

For more information, feel free to explore the source code, contribute to the project, or connect with us through our community channels.
