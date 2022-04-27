import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "../homepage/ActionAreaCard";
import { Container } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GridView(props) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {props.VoucherData.map((voucher) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={voucher.title}>
                <Card sx={{ maxWidth: 345 }} key={voucher.title}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="170"
                    //   sx={{ width: "100%", height: "100%" }}
                      image={voucher.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {voucher.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        a random pool
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
