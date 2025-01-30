import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";

const Container=styled.div`
  
`
const Header=styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CoinList=styled.ul`
  
`
const Title=styled.h1`
  color: ${(props)=>props.theme.accentColor};
  font-size:48px;
`

const Coin=styled.li`
  background-color: white;
  color:${(props)=>props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  &:hover{
    a{
      color: ${(props)=>props.theme.accentColor};
      display: block;
    }
  }
`

const coins=[
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
    },
    {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
    },
    {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
    },
]
function Coins() {
    return <Container>
      <Header>
        <Title> 코인 </Title>
      </Header>
      <CoinList>
        {coins.map(coin=>
        <Coin key={coin.id}>
          <Link to={`/${coin.id}`}>{coin.name}</Link>
        </Coin>)}
      </CoinList>
    </Container>
}

export default Coins;
