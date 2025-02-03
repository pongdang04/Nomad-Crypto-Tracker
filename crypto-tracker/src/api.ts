const BASE_URL=`https://api.coinpaprika.com/v1`

export async function fetchCoins(){
  return fetch(`${BASE_URL}/coins`).then((response)=>
  response.json());
}

export async function fetchInfo(coinId:string){
  return fetch(`${BASE_URL}/${coinId}`).then((response)=>response.json());
}

export async function fetchPriceInfo(coinId:string){
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response)=>response.json());
}
