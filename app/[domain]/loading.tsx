import { Loading } from "@/components/shared/Loading";

export default function LoadingPage() {
  return (
    <div className="web3-profile container grid-xl global-loading">
      <Loading />
      <p className="mt-4">Loading data from eth.cd...</p>
    </div>
  );
}
