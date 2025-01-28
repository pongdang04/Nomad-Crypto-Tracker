import { useParams } from "react-router-dom";

interface Params {
  coinId: string;
}

function Coins() {
  const { coinId } = useParams<Params>();

  return <h1>{coinId} Coin</h1>;
}

// Only one export default per file
export default Coins;
