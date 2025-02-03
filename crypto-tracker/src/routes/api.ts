export async function fetchCoins(){
  return fetch("https://api.coinpaprika.com/v1/coins").then((response)=>
  response.json());
}

interface ICoinId{
  coinId:string;
}

export async function fetchInfo({coinId}: ICoinId){
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((response)=>response.json());
}

export async function fetchPriceInfo({coinId}:ICoinId){
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((response)=>response.json());
}
