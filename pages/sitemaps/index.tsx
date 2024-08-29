import Link from "next/link";
import Head from "next/head";
import "../../styles/web3bio.scss";
import { baseURL } from "@/components/utils/api";

export async function getStaticProps({}) {
  const res = await fetch(process.env.NEXT_PUBLIC_SITEMAP_INDEX || "https://sitemaps.eth.cd/sitemap-staging.json");
  const data = await res.json();
  return { props: { data } };
}

export default function Sitemap({ data }) {
  return (
    <div className="web3bio-container">
      <Head>
        <title>eth.cd Sitemaps</title>
        <meta
          name="description"
          content="eth.cd is a platform for Web3 and Web 2.0 Identity Graph search and link in bio profiles. It provides a list of relevant identities when searching for a Twitter handle, Ethereum address, ENS domain, Lens profile, Farcaster account and other Web3 identities."
        ></meta>
        <link rel="canonical" href={`${baseURL}/sitemaps`}></link>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <div className="web3bio-cover ui2"></div>
      <div className={"web3bio-search focused"}>
        <div className="container grid-sm">
          <div className="search-form">
            <Link
              href={{
                pathname: "/",
                query: {},
              }}
              className="web3bio-logo"
              title="eth.cd"
            >
              <h1 className="text-pride">
                eth.cd
                <br />
                ENS domains
              </h1>
              <h2 className="text-assistive">
                eth.cd is a platform for Web3 and Web 2.0 Identity Graph
                search and link in bio profiles. It provides a list of relevant
                identities when searching for a Twitter handle, Ethereum
                address, ENS domain, Lens profile, Farcaster account,
                 and other Web3 identities.
              </h2>
            </Link>
            <div className="form-label">
              Web3 Identity Search
              <br />
              <small>
                Explore Web3 identities and domains in a whole new way
              </small>
            </div>
          </div>
          <div className="sitemap-result">
            <div className="sitemap-result-header">
              <h1 className="sitemap-result-text text-gray">Sitemaps</h1>
            </div>
            <div className="sitemap-result-body">
              {data?.data.map((page) => (
                <Link
                  href={`/sitemaps/${page.sitemap}`}
                  className={"btn btn-sm"}
                  target="_blank"
                  title={`Sitemaps Page ${page.sitemap}`}
                  key={page.sitemap}
                >
                  Sitemaps Page {page.sitemap}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const runtime = "nodejs";
