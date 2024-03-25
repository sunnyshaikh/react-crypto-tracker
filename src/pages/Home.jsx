import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { StyledTypography } from "../components/styledComponents/typography";
import { useQuery } from "react-query";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import useCurrency from "../context/currency";

const handleFetch = async (currency) => {
  const trendingUrl = TrendingCoins(currency);
  const res = await axios.get(trendingUrl);
  return res.data;
};

const data = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 5594275,
    market_cap: 109836263504173,
    market_cap_rank: 1,
    fully_diluted_valuation: 117298658960317,
    total_volume: 2647563463302,
    high_24h: 5650717,
    low_24h: 5397566,
    price_change_24h: 138526,
    price_change_percentage_24h: 2.53907,
    market_cap_change_24h: 2210848153326,
    market_cap_change_percentage_24h: 2.05421,
    circulating_supply: 19664006,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 6110932,
    ath_change_percentage: -8.78042,
    ath_date: "2024-03-14T07:10:36.635Z",
    atl: 3993.42,
    atl_change_percentage: 139488.81676,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-25T12:12:56.652Z",
    price_change_percentage_24h_in_currency: 2.5390745936268053,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 287728,
    market_cap: 34469189004554,
    market_cap_rank: 2,
    fully_diluted_valuation: 34469189004554,
    total_volume: 1151168708371,
    high_24h: 292439,
    low_24h: 278800,
    price_change_24h: 5143.07,
    price_change_percentage_24h: 1.82001,
    market_cap_change_24h: 397869452871,
    market_cap_change_percentage_24h: 1.16775,
    circulating_supply: 120074261.209633,
    total_supply: 120074261.209633,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -20.87579,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 1019042.54126,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 67.79365955791732,
      currency: "btc",
      percentage: 6779.365955791732,
    },
    last_updated: "2024-03-25T12:12:57.201Z",
    price_change_percentage_24h_in_currency: 1.8200091576053254,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 52.53,
    market_cap: 2878620363459,
    market_cap_rank: 6,
    fully_diluted_valuation: 5244252246964,
    total_volume: 109937938982,
    high_24h: 53.17,
    low_24h: 52.11,
    price_change_24h: -0.0893836460632329,
    price_change_percentage_24h: -0.16987,
    market_cap_change_24h: -20785313061.86914,
    market_cap_change_percentage_24h: -0.71688,
    circulating_supply: 54884241878,
    total_supply: 99987762348,
    max_supply: 100000000000,
    ath: 215.1,
    ath_change_percentage: -75.67223,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.159343,
    atl_change_percentage: 32741.19556,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2024-03-25T12:13:06.075Z",
    price_change_percentage_24h_in_currency: -0.16986665487613037,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 15708.32,
    market_cap: 6969770814006,
    market_cap_rank: 5,
    fully_diluted_valuation: 8984619579203,
    total_volume: 324391080111,
    high_24h: 15963.61,
    low_24h: 14408.95,
    price_change_24h: 1091.34,
    price_change_percentage_24h: 7.46627,
    market_cap_change_24h: 449702594550,
    market_cap_change_percentage_24h: 6.89721,
    circulating_supply: 444187003.372111,
    total_supply: 572594329.687967,
    max_supply: null,
    ath: 19286.66,
    ath_change_percentage: -18.67297,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 38.03,
    atl_change_percentage: 41149.12148,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2024-03-25T12:12:58.577Z",
    price_change_percentage_24h_in_currency: 7.466265105971691,
  },
];

const Home = () => {
  const { currency } = useCurrency();
  // const { data, refetch } = useQuery("fetchTrending", () =>
  //   handleFetch(currency)
  // );
  // useEffect(() => {
  //   refetch();
  // }, [currency]);

  return (
    <section className="home">
      <Container>
        <Box mt={8} textAlign={"center"}>
          <Stack gap={3}>
            <StyledTypography variant="h2" component="h1">
              Crypto Currency Tracker
            </StyledTypography>
            <Typography variant="body1" color="#7e7e7e">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              voluptatum?
            </Typography>
          </Stack>
          <Box mt={12}>
            <Stack gap={5}>
              <Typography variant="h6" letterSpacing={4}>
                TRENDING
              </Typography>
              <Grid container spacing={2}>
                {data?.slice(0, 4)?.map((item) => {
                  const isProfit = Number(item.price_change_percentage_24h) > 0;
                  return (
                    <Grid key={item.id} item xs={6} sm={3}>
                      <Card sx={{ backgroundColor: "primary.main", pt: 3 }}>
                        <img src={item.image} alt="coin" width="70px" />
                        <CardContent>
                          <Typography variant="body1">
                            {item.name} ({item.symbol}){" "}
                            <span
                              style={{
                                color: isProfit ? "#00cb00" : "red",
                              }}
                            >
                              {isProfit && "+"}
                              {Number(item.price_change_percentage_24h).toFixed(
                                2
                              )}
                              %
                            </span>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
