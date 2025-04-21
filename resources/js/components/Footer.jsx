import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: "auto", bottom: 0 }}
            >
                <Toolbar sx={{ justifyContent: "center" }}>
                    <Typography variant="body2" color="inherit">
                        © {new Date().getFullYear()}{" "}
                        <MuiLink
                            component={RouterLink}
                            to="http://www.solaris.green"
                            underline="none"
                            color="inherit"
                            sx={{ "&:hover": { color: "inherit" } }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Solaris
                        </MuiLink>
                        . All rights reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
