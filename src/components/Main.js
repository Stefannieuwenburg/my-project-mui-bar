import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import styled from "./StyleTheme";

import {
    CardActionArea,
    CardMedia,
    Typography,
    Card,
    CardContent,Box,Stack,Container
} from "@mui/material";

const Main = () => {
    return (
        <>
            <ThemeProvider theme={styled}>
                <Box mt={4}>
                    <Card mt={4}>
                        <Typography
                            gutterBottom
                            variant="h8"
                            component="div"
                            style={{ color: "green", fontSize: "50px" }}
                        >
                            ABOUT THE CAFE
                        </Typography>
                        <CardContent>
                            <Typography variant="body2">
                                The Cafe was founded in blabla by Mr. Smith in
                                lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. In addition to our full espresso and
                                brew bar menu, we serve fresh made-to-order
                                breakfast and lunch sandwiches, as well as a
                                selection of sides and salads and other good
                                stuff.
                            </Typography>
                        </CardContent>
                        <CardMedia
                            sx={{ borderRadius: 20 }}
                            component="img"
                            height="540"
                            src={
                                "https://www.ivyboarding.com/w3template/w3images/coffeehouse2.jpg"
                            }
                            alt="home-pic"
                        />
                    </Card>
                    <Container>
                        <Box mt={4}>
                            <Card
                                sx={{
                                    borderRadius: 50,
                                    bgcolor: "secondary.main",
                                }}
                            >
                                <CardActionArea>
                                    <Stack
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={4}
                                    >
                                        <h1>THE MENU</h1>

                                        <h1>Eat</h1>
                                        <br />
                                        <h5>Bread Basket</h5>
                                        <p>
                                            Assortment of fresh baked fruit
                                            breads and muffins 5.50
                                        </p>

                                        <h5>
                                            Honey Almond Granola with Fruits
                                        </h5>
                                        <p>
                                            Natural cereal of honey toasted
                                            oats, raisins, almonds and dates
                                            7.00
                                        </p>

                                        <h5>Belgian Waffle</h5>
                                        <p>
                                            Vanilla flavored batter with malted
                                            flour 7.50
                                        </p>

                                        <h5>Scrambled eggs</h5>
                                        <p>
                                            Scrambled eggs, roasted red pepper
                                            and garlic, with green onions 7.50
                                        </p>

                                        <h5>Blueberry Pancakes</h5>
                                        <p>
                                            With syrup, butter and lots of
                                            berries 8.50
                                        </p>

                                        <Typography>
                                            <h1>Drinks</h1>
                                            <br />
                                            <h5>Coffee</h5>
                                            <p>Regular coffee 2.50</p>
                                            <p>cappuccino 3.50</p>
                                            <br />
                                            <h5>Chocolato</h5>
                                            <p>
                                                Chocolate espresso with milk
                                                4.50
                                            </p>
                                            <h5>Corretto</h5>
                                            <p>Whiskey and coffee 5.00</p>
                                            <h5>Iced tea</h5>
                                            <p>Hot tea, except not hot 3.00</p>
                                            <h5>Soda</h5>
                                            <p>Coke, 2.50</p>
                                            <Typography>Sprite,2.50</Typography>
                                            <Typography>Fanta,2.50</Typography>
                                            <Typography>choco,2.50</Typography>
                                            <Typography>lemon,2.50</Typography>
                                        </Typography>
                                    </Stack>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Container>
                    <Container>
                        <Box mt={4}>
                            <Card>
                                <Typography variant="h3" mb={3}>
                                    MAP
                                </Typography>
                                <Typography mb={4}>
                                    You Can find us at this address ant this
                                    location.
                                </Typography>

                                <Card>
                                    <CardMedia
                                        component="img"
                                        src={
                                            "https://www.w3schools.com/w3images/map.jpg"
                                        }
                                        alt="map-pic"
                                    />
                                </Card>

                                <Typography mt={4}>
                                    <span>FYI!</span> We offer full-service
                                    catering for any event, large or small. We
                                    understand your needs and we will cater the
                                    food to satisfy the biggerst criteria of
                                    them all, both look and taste.
                                </Typography>

                                <Typography mt={4}>
                                    <strong>Opening hours:</strong> everyday
                                    from 6am to 5pm.
                                </Typography>
                                <Typography>
                                    <strong>Address:</strong> 15 Adr street,
                                    5015, NY
                                </Typography>
                            </Card>
                        </Box>
                    </Container>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Main;
