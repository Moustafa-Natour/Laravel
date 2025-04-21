import React, { useEffect, useRef } from "react";
import { useTab } from "../context/TabContext"; // TabContext to manage tab state
import { Box } from "@mui/material";
import StationsList from "../components/StationsList";
import SolarList from "./SolarList";

const Home: React.FC = () => {
    const { activeTab } = useTab(); // Tab context state to track the active tab
    const solarRef = useRef<HTMLDivElement | null>(null); // Reference for solar section
    const stationsRef = useRef<HTMLDivElement | null>(null); // Reference for stations section

    // Effect hook to scroll the relevant section into view based on active tab
    useEffect(() => {
        if (activeTab === "stations" && stationsRef.current) {
            stationsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else if (activeTab === "solar" && solarRef.current) {
            solarRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [activeTab]); // Only run when activeTab changes

    return (
        <Box>
            {/* EV Stations Section */}
            <div ref={stationsRef}>
                {activeTab === "stations" && (
                    <div>
                        <h2>EV Charging Stations</h2>
                        <StationsList />
                    </div>
                )}
            </div>

            {/* Solar Stations Section */}
            <div ref={solarRef}>
                {activeTab === "solar" && (
                    <div>
                        <h2>Solar Power Stations</h2>
                        <SolarList />
                    </div>
                )}
            </div>
        </Box>
    );
};

export default Home;
