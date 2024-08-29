import SVG from "react-inlinesvg";
import Link from "next/link";
import WalletButton from "./WalletButton";

export const Header = () => {
  return (
    <div className="web3bio-header">
      <div className="container grid-sm">
        <div className="header-menu">
          <Link
            href={{
              pathname: "/",
              query: {},
            }}
            className="web3bio-logo"
            title="eth.cd"
          >
            <h1 className="text-conic-pride">
              eth.cd
              <br />
              A profile for .eth domains
            </h1>
            <h2 className="text-assistive">
            Web3 social networking platform that leverages Ethereum Name Service (ENS) to create dynamic, decentralized profiles based on users ENS records. Our platform gamifies user engagement through leaderboards and integrates social networking functionalities, such as decentralized messaging and community building, using blockchain technology.
            </h2>
          </Link>
          {/* <div className="header-btn">
            <a href="#search" className="btn">
              Search
            </a>
            <a href="#profile" className="btn">Profile</a>
            <a href="#profile-api" className="btn">API</a>
          </div>
          <div className="header-account">
            <a href="#" className="btn btn-primary">Connect</a>
            <WalletButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};
