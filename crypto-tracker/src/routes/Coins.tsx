import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";

const Container=styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Header=styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title=styled.h1`
  color: ${(props)=>props.theme.accentColor};
  font-size:48px;
`
const CoinList=styled.ul`
  
`

const Coin=styled.li`
  background-color: white;
  color:${(props)=>props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
  }
  &:hover{
    a{
      color: ${(props)=>props.theme.accentColor};
    }
  }
`
interface ICoins{
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}
const Loader=styled.span`
  text-align: center;
`
const Img=styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>(["allCoins"], fetchCoins);

    return <Container>
      <Header>
        <Title> 코인 </Title>
      </Header>
      {isLoading?(
        <Loader>"Loading..."</Loader>):
        (<CoinList>
        {data?.map(coin=>
        <Coin key={coin.id}>
          <Link to={{
            pathname:`/${coin.id}`,
            state:{name:coin.name}
          }}>
          <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}/>
          {coin.name}</Link>
        </Coin>)} 
      </CoinList>)}
    </Container>
}

export default Coins;
