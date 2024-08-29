type SocialPlatform = {
  color?: string;
  icon?: string;
  label: string;
  urlPrefix?: string;
  ensText?: string[];
  dotbitText?: string[];
  registerlink?: string;
  system: PlatformSystem;
};

export enum PlatformSystem {
  web2 = 0,
  web3 = 1,
}

const DEFAULT_PLATFORM: Readonly<SocialPlatform> = {
  color: "#000000",
  icon: "",
  label: "",
  urlPrefix: "",
  ensText: [],
  dotbitText: [],
  registerlink: "",
  system: PlatformSystem.web3,
};

export enum PlatformType {
  ens = "ens",
  dotbit = "dotbit",
  lens = "lens",
  ethereum = "ethereum",
  twitter = "twitter",
  nextid = "nextid",
  bitcoin = "bitcoin",
  keybase = "keybase",
  reddit = "reddit",
  github = "github",
  ckb = "ckb",
  farcaster = "farcaster",
  space_id = "space_id",
  telegram = "telegram",
  instagram = "instagram",
  rss3 = "rss3",
  cyberconnect = "cyberconnect",
  opensea = "opensea",
  discord = "discord",
  calendly = "calendly",
  url = "url",
  website = "website",
  linkedin = "linkedin",
  dns = "dns",
  tron = "tron",
  hey = "hey",
  facebook = "facebook",
  threads = "threads",
  weibo = "weibo",
  youtube = "youtube",
  tiktok = "tiktok",
  bilibili = "bilibili",
  medium = "medium",
  mirror = "mirror",
  jike = "jike",
  nostr = "nostr",
  poap = "poap",
  uniswap = "uniswap",
  degenscore = "degenscore",
  firefly = "firefly",
  solana = "solana",
  sns = "sns",
  mstdnjp = "mstdnjp",
  lobsters = "lobsters",
  hackernews = "hackernews",
  crossbell = "crossbell",
  minds = "minds",
  paragraph = "paragraph",
  genome = "genome",
  gnosis = "gnosis",
  webacy = "webacy",
  clusters = "clusters",
  guild = "guild",
  ton = "ton",
  snapshot = "snapshot",
  coingecko = "coingecko",
  gitcoin = "gitcoin",
  talent = 'talent',
  doge = "doge",
  bsc = "bsc",
  aptos = "aptos",
  near = "near",
  stacks = "stacks",
  cosmos = "cosmos",
  zeta = "zeta",
  mode = "mode",
  arbitrum = "arbitrum",
  scroll = "scroll",
  taiko = "taiko",
  mint = "mint",
  zkfair = "zkfair",
  manta = "manta",
  lightlink = "lightlink",
  merlin = "merlin",
  alienx = "alienx",
  edgeless = "edgeless",
  tomo = "tomo",
  ailayer = "ailayer",
}

export const PLATFORM_DATA: ReadonlyMap<PlatformType, Readonly<SocialPlatform>> = new Map([
  [PlatformType.twitter, {
    color: "#000000",
    icon: "icons/icon-x.svg",
    label: "Twitter",
    urlPrefix: "https://x.com/",
    ensText: ["com.twitter", "vnd.twitter", "twitter"],
    dotbitText: ["profile.twitter"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.ens, {
    color: "#0080bc",
    icon: "icons/icon-ens.svg",
    label: "ENS",
    urlPrefix: "https://app.ens.domains/",
    registerlink: "https://app.ens.domains/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.ethereum, {
    color: "#3741ba",
    icon: "icons/icon-ethereum.svg",
    label: "Ethereum",
    urlPrefix: "https://etherscan.io/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.farcaster, {
    color: "#8a63d2",
    icon: "icons/icon-farcaster.svg",
    label: "Farcaster",
    urlPrefix: "https://warpcast.com/",
    ensText: ["farcaster"],
    registerlink: "https://warpcast.com/~/invite-page/1000?id=8ebad588&name=",
    system: PlatformSystem.web2,
  }],
  [PlatformType.github, {
    color: "#000000",
    icon: "icons/icon-github.svg",
    label: "GitHub",
    urlPrefix: "https://github.com/",
    ensText: ["com.github", "vnd.github"],
    dotbitText: ["profile.github"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.keybase, {
    color: "#4162E2",
    icon: "icons/icon-keybase.svg",
    label: "Keybase",
    urlPrefix: "https://keybase.io/",
    ensText: ["io.keybase"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.lens, {
    color: "#6bc674",
    icon: "icons/icon-lens.svg",
    label: "Lens",
    urlPrefix: "https://www.lensfrens.xyz/",
    registerlink: "https://www.lens.xyz/mint?name=",
    system: PlatformSystem.web2,
  }],
  [PlatformType.nextid, {
    color: "#000000",
    icon: "icons/icon-nextid.svg",
    label: "Next.ID",
    urlPrefix: "https://eth.cd/",
    dotbitText: ["profile.nextid"],
    system: PlatformSystem.web3,
  }],
  [PlatformType.bitcoin, {
    color: "#F7931A",
    icon: "icons/icon-bitcoin.svg",
    label: "Bitcoin",
    urlPrefix: "https://explorer.btc.com/btc/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.reddit, {
    color: "#ff4500",
    icon: "icons/icon-reddit.svg",
    label: "Reddit",
    urlPrefix: "https://www.reddit.com/user/",
    ensText: ["com.reddit"],
    dotbitText: ["profile.reddit"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.space_id, {
    color: "#71EBAA",
    icon: "icons/icon-spaceid.svg",
    label: "SPACE ID",
    registerlink: "https://space.id/search?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.ckb, {
    color: "#000000",
    icon: "icons/icon-ckb.svg",
    label: "Nervos",
    urlPrefix: "https://explorer.nervos.org/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.telegram, {
    color: "#0088cc",
    icon: "icons/icon-telegram.svg",
    label: "Telegram",
    ensText: ["org.telegram", "vnd.telegram"],
    dotbitText: ["profile.telegram"],
    urlPrefix: "https://t.me/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.instagram, {
    color: "#EA3377",
    icon: "icons/icon-instagram.svg",
    label: "Instagram",
    ensText: ["com.instagram"],
    dotbitText: ["profile.instagram"],
    urlPrefix: "https://www.instagram.com/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.weibo, {
    color: "#df2029",
    label: "Weibo",
    dotbitText: ["profile.weibo"],
    urlPrefix: "https://weibo.com/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.dotbit, {
    color: "#0e7dff",
    icon: "icons/icon-dotbit.svg",
    label: ".bit",
    urlPrefix: "https://d.id/",
    registerlink: "https://d.id/bit/account/create/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.rss3, {
    color: "#3070F6",
    label: "RSS3",
    urlPrefix: "https://rss3.io/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.cyberconnect, {
    color: "#000000",
    icon: "icons/icon-cyberconnect.svg",
    label: "CyberConnect",
    urlPrefix: "https://link3.to/",
    registerlink: "",
    system: PlatformSystem.web3,
  }],
  [PlatformType.opensea, {
    color: "#407FDB",
    icon: "icons/icon-opensea.svg",
    label: "OpenSea",
    urlPrefix: "https://opensea.io/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.discord, {
    color: "#5865f2",
    icon: "icons/icon-discord.svg",
    label: "Discord",
    urlPrefix: "",
    ensText: ["discord", "com.discord"],
    dotbitText: ["profile.discord"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.calendly, {
    color: "#2F69F6",
    icon: "icons/icon-calendly.svg",
    label: "Calendly",
    urlPrefix: "https://calendly.com/",
    ensText: ["calendly", "com.calendly"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.url, {
    color: "#121212",
    icon: "icons/icon-web.svg",
    label: "Website",
    urlPrefix: "",
    system: PlatformSystem.web2,
  }],
  [PlatformType.website, {
    color: "#121212",
    icon: "icons/icon-web.svg",
    label: "Website",
    urlPrefix: "",
    ensText: ["url"],
    dotbitText: ["profile.website"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.linkedin, {
    color: "#195DB4",
    icon: "icons/icon-linkedin.svg",
    label: "LinkedIn",
    ensText: ["linkedin", "com.linkedin"],
    urlPrefix: "https://www.linkedin.com/in/",
    dotbitText: ["profile.linkedin"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.dns, {
    color: "#000000",
    icon: "icons/icon-web.svg",
    label: "DNS",
    urlPrefix: "https://",
    system: PlatformSystem.web2,
  }],
  [PlatformType.tron, {
    color: "#EB0029",
    icon: "icons/icon-tron.svg",
    label: "Tron",
    urlPrefix: "https://tronscan.org/#/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.hey, {
    color: "#E84F64",
    icon: "icons/icon-hey.svg",
    label: "Hey",
    urlPrefix: "https://hey.xyz/u/",
    ensText: ["lens"],
    system: PlatformSystem.web3,
  }],
  [PlatformType.facebook, {
    color: "#385898",
    icon: "icons/icon-facebook.svg",
    label: "Facebook",
    urlPrefix: "https://www.facebook.com/",
    dotbitText: ["profile.facebook"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.threads, {
    color: "#000000",
    icon: "icons/icon-threads.svg",
    label: "Threads",
    urlPrefix: "https://www.threads.net/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.youtube, {
    color: "#FF0000",
    icon: "icons/icon-youtube.svg",
    label: "Youtube",
    urlPrefix: "https://www.youtube.com/",
    dotbitText: ["profile.youtube"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.tiktok, {
    color: "#000000",
    icon: "icons/icon-tiktok.svg",
    label: "TikTok",
    urlPrefix: "https://www.tiktok.com/@",
    dotbitText: ["profile.tiktok"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.bilibili, {
    color: "#00aeec",
    icon: "icons/icon-bilibili.svg",
    label: "Bilibili",
    urlPrefix: "https://www.bilibili.com/",
    dotbitText: ["profile.bilibili"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.medium, {
    color: "#000000",
    icon: "icons/icon-medium.svg",
    label: "Medium",
    urlPrefix: "https://medium.com/",
    dotbitText: ["profile.medium"],
    system: PlatformSystem.web3,
  }],
  [PlatformType.mirror, {
    color: "#007aff",
    icon: "icons/icon-mirror.svg",
    label: "Mirror",
    urlPrefix: "https://mirror.xyz/",
    dotbitText: ["profile.mirror"],
    system: PlatformSystem.web3,
  }],
  [PlatformType.jike, {
    color: "#ffe411",
    label: "Jike",
    urlPrefix: "https://web.okjike.com/",
    dotbitText: ["profile.jike"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.nostr, {
    color: "#0ea5e9",
    icon: "icons/icon-nostr.svg",
    label: "Nostr",
    urlPrefix: "https://app.coracle.social/",
    dotbitText: ["profile.nostr"],
    system: PlatformSystem.web2,
  }],
  [PlatformType.poap, {
    color: "#5E58A5",
    icon: "icons/icon-poap.svg",
    label: "POAP",
    urlPrefix: "https://app.poap.xyz/scan/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.uniswap, {
    color: "#ff007a",
    label: "Uniswap",
    urlPrefix: "https://uniswap.org/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.degenscore, {
    color: "#a855f7",
    icon: "icons/icon-degenscore.svg",
    label: "DegenScore",
    urlPrefix: "https://degenscore.com/beacon/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.webacy, {
    color: "#000000",
    icon: "",
    label: "Webacy",
    urlPrefix: "https://dapp.webacy.com/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.firefly, {
    color: "#D543ED",
    icon: "icons/icon-firefly.svg",
    label: "Firefly",
    urlPrefix: "https://firefly.land/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.solana, {
    color: "#9945FF",
    icon: "icons/icon-solana.svg",
    label: "Solana",
    urlPrefix: "https://solscan.io/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.sns, {
    color: "#030119",
    icon: "icons/icon-sns.svg",
    label: "SNS",
    urlPrefix: "https://www.sns.id/search?search=",
    registerlink: "https://www.sns.id/search?search=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.mstdnjp, {
    color: "#595aff",
    icon: "icons/icon-mastodon.svg",
    label: "mstdn.jp",
    urlPrefix: "https://mstdn.jp/@",
    system: PlatformSystem.web3,
  }],
  [PlatformType.lobsters, {
    color: "#ac130d",
    icon: "icons/icon-lobsters.svg",
    label: "Lobsters",
    urlPrefix: "https://lobste.rs/~",
    system: PlatformSystem.web2,
  }],
  [PlatformType.hackernews, {
    color: "#ff6600",
    icon: "icons/icon-hackernews.svg",
    label: "Hacker News",
    urlPrefix: "https://news.ycombinator.com/user?id=",
    system: PlatformSystem.web2,
  }],
  [PlatformType.crossbell, {
    color: "#FFCF55",
    icon: "icons/icon-crossbell.svg",
    label: "Crossbell",
    urlPrefix: "https://crossbell.io/@",
    registerlink: "https://crossbell.io",
    system: PlatformSystem.web3,
  }],
  [PlatformType.minds, {
    color: "#f7d354",
    icon: "icons/icon-minds.svg",
    label: "Minds",
    urlPrefix: "https://www.minds.com/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.paragraph, {
    color: "#2563eb",
    icon: "icons/icon-paragraph.svg",
    label: "Paragraph",
    urlPrefix: "https://paragraph.xyz/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.genome, {
    color: "#6DD85D",
    icon: "icons/icon-gnosis.svg",
    label: "Genome",
    urlPrefix: "https://genomedomains.com/name/",
    registerlink: "https://space.id/tld/14/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.gnosis, {
    color: "#1c352a",
    icon: "icons/icon-gnosis.svg",
    label: "Gnosis",
    urlPrefix: "https://gnosisscan.io/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.clusters, {
    color: "#f0555d",
    icon: "icons/icon-clusters.svg",
    label: "Clusters",
    urlPrefix: "https://clusters.xyz/",
    registerlink: "https://clusters.xyz/register/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.guild, {
    color: "#6062eb",
    icon: "icons/icon-guild.svg",
    label: "Guild",
    urlPrefix: "https://guild.xyz/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.ton, {
    color: "#0098EA",
    icon: "icons/icon-ton.svg",
    label: "TON",
    urlPrefix: "https://tonscan.org/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.snapshot, {
    color: "#ffb503",
    icon: "icons/icon-snapshot.svg",
    label: "Snapshot",
    urlPrefix: "https://snapshot.org/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.coingecko, {
    color: "#4BCC00",
    icon: "icons/icon-coingecko.svg",
    label: "CoinGecko",
    urlPrefix: "https://www.coingecko.com/en/coins/",
    system: PlatformSystem.web2,
  }],
  [PlatformType.gitcoin, {
    color: "#4A47D3",
    icon: "icons/icon-gitcoinpassport.svg",
    label: "Gitcoin Passport",
    urlPrefix: "https://passport.gitcoin.co/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.talent, {
    color: "#715AE4",
    icon: "icons/icon-talent.svg",
    label: "Talent",
    urlPrefix: "https://passport.talentprotocol.com/profile/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.doge, {
    color: "#dfc66d",
    icon: "icons/icon-doge.svg",
    label: "Dogecoin",
    urlPrefix: "https://dogechain.info/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.bsc, {
    color: "#f0b90b",
    icon: "icons/icon-bsc.svg",
    label: "Binance Smart Chain",
    urlPrefix: "https://bscscan.com/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.aptos, {
    color: "#6fe0b2",
    icon: "icons/icon-aptos.svg",
    label: "Aptos",
    urlPrefix: "https://explorer.aptoslabs.com/account/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.near, {
    color: "#000000",
    icon: "icons/icon-near.svg",
    label: "NEAR Protocol",
    urlPrefix: "https://nearblocks.io/address/",
    registerlink: "https://app.mynearwallet.com/create/?name=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.stacks, {
    color: "#725DF6",
    icon: "icons/icon-stacks.svg",
    label: "Stacks",
    urlPrefix: "https://explorer.hiro.so/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.cosmos, {
    color: "#000000",
    icon: "icons/icon-cosmos.svg",
    label: "Cosmos",
    urlPrefix: "https://www.mintscan.io/cosmos/account/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.zeta, {
    color: "#005741",
    icon: "icons/icon-zeta.svg",
    label: "Zeta Name Service",
    urlPrefix: "https://explorer.zetachain.com/address/",
    registerlink: "https://space.id/tld/11/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.mode, {
    color: "#E5FD52",
    icon: "icons/icon-mode.svg",
    label: "Mode Name Service",
    urlPrefix: "https://explorer.mode.network/address/",
    registerlink: "https://space.id/tld/6/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.arbitrum, {
    color: "#2949d4",
    icon: "icons/icon-arbitrum.svg",
    label: ".arb Name Service",
    urlPrefix: "https://arbiscan.io/address/",
    registerlink: "https://space.id/tld/2/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.scroll, {
    color: "#b78544",
    icon: "icons/icon-scroll.svg",
    label: "Scroll",
    urlPrefix: "https://scrollscan.com/address/",
    system: PlatformSystem.web3,
  }],
  [PlatformType.taiko, {
    color: "#E81899",
    icon: "icons/icon-taiko.svg",
    label: "DotTaiko Name Service",
    urlPrefix: "https://taikoscan.io/address/",
    registerlink: "https://space.id/tld/16/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.mint, {
    color: "#00A57C",
    icon: "icons/icon-mint.svg",
    label: "Mint Name Service",
    urlPrefix: "https://explorer.mintchain.io/address/",
    registerlink: "https://space.id/tld/18/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.zkfair, {
    color: "#D43F36",
    icon: "icons/icon-zkfair.svg",
    label: "zkFair",
    urlPrefix: "https://scan.zkfair.io/address/",
    registerlink: "https://space.id/tld/8/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.manta, {
    color: "#0091ff",
    icon: "icons/icon-manta.svg",
    label: "Manta Name Service",
    urlPrefix: "https://pacific-explorer.manta.network/address/",
    registerlink: "https://space.id/tld/3/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.lightlink, {
    color: "#00BFFF",
    icon: "icons/icon-lightlink.svg",
    label: "LightLink Name Service",
    urlPrefix: "https://phoenix.lightlink.io/address/",
    registerlink: "https://space.id/tld/9/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.merlin, {
    color: "#5A32A3",
    icon: "icons/icon-merlin.svg",
    label: "Merlin Name Service",
    urlPrefix: "https://scan.merlinchain.io/address/",
    registerlink: "https://space.id/tld/12/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.alienx, {
    color: "#D5F462",
    icon: "icons/icon-alienx.svg",
    label: "AlienX Name Service",
    urlPrefix: "https://explorer.alienxchain.io/address/",
    registerlink: "https://space.id/tld/17/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.edgeless, {
    color: "#a0eb67",
    icon: "icons/icon-edgeless.svg",
    label: "Edgeless",
    urlPrefix: "https://explorer.edgeless.network/address/",
    registerlink: "",
    system: PlatformSystem.web3,
  }],
  [PlatformType.tomo, {
    color: "#DE3A7E",
    icon: "icons/icon-tomo.svg",
    label: "Tomo Name Service",
    registerlink: "https://space.id/tld/10/domains?query=",
    system: PlatformSystem.web3,
  }],
  [PlatformType.ailayer, {
    color: "#A283FF",
    icon: "icons/icon-ailayer.svg",
    label: "AILayer Name Service",
    urlPrefix: "https://mainnet-explorer.ailayer.xyz/address/",
    registerlink: "https://space.id/tld/19/domains?query=",
    system: PlatformSystem.web3,
  }],
]);

export const SocialPlatformMapping = (platform: PlatformType): Readonly<SocialPlatform> => {
  return PLATFORM_DATA.get(platform) || { ...DEFAULT_PLATFORM, label: platform };
};
