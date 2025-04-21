import React, { useState } from "react";
import { evBranches } from "../data/Stations";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    Fade,
} from "@mui/material";

const StationsList = () => {
    const [hoveredId, setHoveredId] = useState(null); // Use `null` for initialization in JS

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: 4,
                marginBottom: "20px",
            }}
        >
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                {evBranches.map((branch) => (
                    <Grid item xs={12} sm={6} md={4} key={branch.id}>
                        <Box
                            id={branch.id}
                            sx={{
                                scrollMarginTop: "80px",
                                backgroundColor: "#fff",
                                borderRadius: "16px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease, background 0.4s",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                                    background:
                                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
                                },
                            }}
                            onMouseEnter={() => setHoveredId(branch.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card
                                sx={{
                                    height: 550,
                                    width: {
                                        xs: 450,
                                        sm: 550,
                                        md: 800,
                                        lg: 1250,
                                        xl: 1250,
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    margin: "0 auto",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={branch.image}
                                    alt={branch.name}
                                    sx={{
                                        objectFit:
                                            branch.id === "hazmieh"
                                                ? "fill"
                                                : "cover",
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {branch.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {branch.description}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        paddingX: 2,
                                        paddingBottom: 2,
                                        height: 40,
                                    }}
                                >
                                    <Box sx={{ width: "100%" }}>
                                        <Fade
                                            in={hoveredId === branch.id}
                                            timeout={500}
                                            unmountOnExit
                                        >
                                            <Button
                                                fullWidth
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                                href={branch.mapsLink}
                                                target="_blank"
                                            >
                                                Get Directions
                                            </Button>
                                        </Fade>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StationsList;
