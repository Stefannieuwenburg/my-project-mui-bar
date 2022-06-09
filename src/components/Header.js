import * as React from "react";

import { Typography,  Card,  Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const Header = () => {
    return (
        <>
            <Box mt={4}>
                <Card>
                    <Typography
                        gutterBottom
                        variant="h8"
                        component="div"
                        style={{
                            color: "#FF5733 ",
                            fontSize: "50px",
                            fontFamily: "Helvetica",
                        }}
                    >
                        THE CAFE
                    </Typography>
                    <CardMedia
                        sx={{ borderRadius: 20 }}
                        component="img"
                        height="580"
                        src={
                            "https://www.ivyboarding.com/w3template/w3images/coffeeshop.jpg"
                        }
                        alt="home-pic"
                    />
                    <Typography gutterBottom variant="body2">
                        The Cafe lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        In addition to our full espresso and brew bar menu, we
                        serve fresh made-to-order breakfast and lunch
                        sandwiches, as well as a selection of sides and salads
                        and other good stuff.
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Fresh is the new sweet.
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        Chef, Coffeeist and Owner: Liam Brown
                    </Typography>
                </Card>
            </Box>
        </>
    );
};

export default Header;
