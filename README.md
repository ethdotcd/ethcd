# eth.cd

![](./public/logo-ethdotcd.png)

eth.cd is a platform for ENS domain based Web3 and Web 2.0 Identity Graph search and link in bio profiles. It provides a list of relevant identities when searching for a Twitter handle, Ethereum address, ENS domain, Lens profile, Farcaster account.

We're gradually making updates to eth.cd. You may expect new features and data sources.

## What are the data sources?

eth.cd is powered by [Next.ID](https://next.id) Relation Service. The Relation Service is an aggregator and query service of Web2 and Web3 identities. Next.ID is indexing all identity data from public verifiable connections and on-chain records.

The supported identity platforms:
- Ethereum Name Service (ENS)
- Ethereum
- Farcaster
- Lens
- Twitter
- Keybase
- Reddit
- GitHub

The queries can be found here `utils/queries.js`. You can read [the Next.ID docs](https://docs.next.id/?utm_source=web3bio) to learn more.

## Can I remove my data?

Not yet. Next.ID is indexing identity data from public verifiable connections and on-chain records. Revalidating data support is on the roadmap.

## Mobile App?

You can access eth.cd on a mobile browser. However, a desktop browser currently provides the most optimized user experience, especially for visualizing Identity Graph.

## Local Dev

Run the development server:

```bash
npm i && npm run dev
```
```bash
yarn && yarn dev
```

## Contributing

Feel free to submit a pull request to propose bug fixes and improvements. Help is always appreciated. You may give feature feedbacks or bug report to [eth.cd Twitter](https://twitter.com/ethdotcd) as well. 
