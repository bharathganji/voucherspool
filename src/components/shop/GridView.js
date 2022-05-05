import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Badge, Container, CardActionArea } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DiscountOutlined } from "@mui/icons-material";
import Sparkles from "./Sparkles";

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
                <Card
                  sx={{ maxWidth: "auto", height: "100%" }}
                  key={voucher.title}
                >
                  <CardActionArea component={Link} to={`shop/${voucher.title}`}>
                    <CardMedia
                      component="img"
                      loading="lazy"
                      object-fit="fill"
                      height="170px"
                      image={voucher.img}
                      alt="green iguana"
                    />
                    <CardContent sx={{ position: "sticky" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        // sx={{ display: "flex" }}
                      >
                        <Sparkles> {voucher.title}</Sparkles><br/>
                        <Badge>
                          <span
                            style={{
                              color: "#1976d2",
                              alignSelf: "flex-end",
                            }}
                          >
                            {voucher.discount != 0 ? <DiscountOutlined /> : ""}
                            {voucher.discount != 0
                              ?voucher.discount + "% off"
                              : ""}
                          </span>
                        </Badge>
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        a random pool
                      </Typography> */}
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
