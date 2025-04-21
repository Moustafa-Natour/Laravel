import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Menu,
    MenuItem,
    Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { evBranches } from "../data/Stations";

interface NavbarProps {
    scrollToSection: (id: string, tab: "stations" | "solar") => void;
    setActiveTab: (tab: "stations" | "solar") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, setActiveTab }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => setAnchorEl(null);

    const handleMenuOpen1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleMenuClose1 = () => setAnchorEl1(null);

    const handleEVBranchClick = (id: string) => {
        scrollToSection(id, "stations"); // Scroll to the EV branch
        setActiveTab("stations"); // Set active tab to stations
        handleMenuClose();

        // Delay the scroll by 500ms to allow screen switch to complete
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 500); // 500ms delay before scrolling
    };

    const handleSolarBranchClick = (id: string) => {
        scrollToSection(id, "solar"); // Scroll to the solar branch
        setActiveTab("solar"); // Set active tab to solar
        handleMenuClose1();

        // Delay the scroll by 500ms to allow screen switch to complete
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 500); // 500ms delay before scrolling
    };

    const handleTabClick = (tab: "stations" | "solar") => {
        setActiveTab(tab); // Change the active tab state
        scrollToSection(`${tab}-jounieh`, tab); // Example of scrolling to a specific branch when tab is clicked
    };

    return (
        <AppBar position="sticky">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link
                        component={RouterLink}
                        to="https://www.solaris.green"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        color="inherit"
                        sx={{ "&:hover": { color: "inherit" } }}
                    >
                        Solaris EV Charging Stations
                    </Link>
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                        color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        onClick={handleMenuOpen}
                    >
                        EV Charging Stations
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {evBranches.map((branch) => (
                            <MenuItem
                                key={branch.id}
                                onClick={() => handleEVBranchClick(branch.id)}
                            >
                                {branch.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box>
                    <Button
                        color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        onClick={handleMenuOpen1}
                    >
                        Solar Power
                    </Button>
                    <Menu
                        anchorEl={anchorEl1}
                        open={Boolean(anchorEl1)}
                        onClose={handleMenuClose1}
                    >
                        <MenuItem
                            onClick={() =>
                                handleSolarBranchClick("solar-dbayeh")
                            }
                        >
                            Dbayeh Branch
                        </MenuItem>
                        <MenuItem
                            onClick={() =>
                                handleSolarBranchClick("solar-hazmieh")
                            }
                        >
                            Hazmieh Branch
                        </MenuItem>
                        <MenuItem
                            onClick={() =>
                                handleSolarBranchClick("solar-jounieh")
                            }
                        >
                            Jounieh Branch
                        </MenuItem>
                    </Menu>
                </Box>

                <Button
                    color="inherit"
                    onClick={() => scrollToSection("contact", "stations")}
                >
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
