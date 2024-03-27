import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledTypography } from "../components/styledComponents/typography";
import CoinChart from "../components/CoinChart";

const Coin = () => {
  return (
    <section className="coin-page" style={{ padding: "4rem 0" }}>
      <Container sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Box sx={{ height: { xs: "150px", sm: "auto" } }}>
                <img
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                  alt="coin"
                  style={{ maxHeight: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Stack spacing={2}>
                <StyledTypography variant="h2">Bitcoin</StyledTypography>
                <Typography variant="body1">
                  Bitcoin is the first successful internet money based on
                  peer-to-peer technology; whereby no central bank or authority
                  is involved in the transaction and production of the Bitcoin
                  currency.
                </Typography>
                <Stack>
                  <Typography>
                    <strong>Rank: </strong>1
                  </Typography>
                  <Typography>
                    <strong>Current Price: </strong>₹ 5,744,807
                  </Typography>
                  <Typography>
                    <strong>Market Cap: </strong>₹ 112,789,080M
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        {/* chart */}
        <Box mt={8} pb={4} height="550px">
          <CoinChart />
          <Stack mt={5} alignItems="center">
            <ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="Day wise chart"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default Coin;
