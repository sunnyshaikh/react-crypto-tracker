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
import { Link } from "react-router-dom";

const handleFetch = async (currency) => {
  const trendingUrl = TrendingCoins(currency);
  const res = await axios.get(trendingUrl);
  return res.data;
};

const Home = () => {
  const { currency } = useCurrency();
  const { data, refetch } = useQuery("fetchTrending", () =>
    handleFetch(currency)
  );
  useEffect(() => {
    refetch();
  }, [currency]);

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
                      <Link to={`/coin/${item.id}`}>
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
                                {Number(
                                  item.price_change_percentage_24h
                                ).toFixed(2)}
                                %
                              </span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
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
