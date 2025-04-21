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
import styles from "../Utils/styles";

const StationsList = () => {
    const [hoveredId, setHoveredId] = useState(null); // Use `null` for initialization in JS

    return (
        <Box sx={styles.boxSx}>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                {evBranches.map((branch) => (
                    <Grid item xs={12} sm={6} md={4} key={branch.id}>
                        <Box
                            id={branch.id}
                            sx={styles.branchSx}
                            onMouseEnter={() => setHoveredId(branch.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card sx={styles.cardSx}>
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
