import SearchPage from "@/components/search/SearchPage";
import { Footer } from "@/components/shared/Footer";
import { SocialPlatformMapping } from "@/components/utils/platform";
import { handleSearchPlatform } from "@/components/utils/utils";
import { HomeFeatures } from "@/components/shared/HomeFeatures";
import { Header } from "@/components/shared/Header";

export async function generateMetadata({ searchParams }) {
  const { s: searchTerm, platform, domain } = searchParams;
  const params = new URLSearchParams(searchParams);
  const path = searchTerm ? `/?${params.toString()}` : `/`;

  const defaultTitle =
    "eth.cd - ENS domains Web3 Identity Graph Search and Link in Bio Profile";
  const defaultDescription =
    "eth.cd is a platform for ENS domain based Web3 and Web 2.0 Identity Graph search and link in bio profiles. It provides a list of relevant identities when searching for a Twitter handle, Ethereum address, ENS domain, Lens profile, Farcaster account.";

  let title, description;

  if (searchTerm) {
    const platformLabel = platform
      ? SocialPlatformMapping(platform.toLowerCase()).label
      : SocialPlatformMapping(handleSearchPlatform(searchTerm)).label;
    title = `${searchTerm} on ${platformLabel} - eth.cd Identity Search`;
    description = `Search ${searchTerm} on ${platformLabel} to discover the Web3 decentralized profiles and identities associated with ${searchTerm}. Check out and explore the ${searchTerm} Web3 profile.`;
  } else if (domain) {
    title = `Check availability of ${domain} - eth.cd Identity Search`;
    description = `Check availability of ${domain} across multiple Web3 domains and social platforms like ENS, Farcaster, Lens, and other Web3 domain services.`;
  } else {
    title = defaultTitle;
    description = defaultDescription;
  }

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "eth.cd",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@ethdotcd",
      creator: "@ethdotcd",
    },
  };
}

export default function HomePage() {
  return (
    <div className="web3bio-container home-container">
      <div className="web3bio-cover ui2"></div>
      <Header />
      <SearchPage />
      <HomeFeatures />
      <Footer />
    </div>
  );
}
