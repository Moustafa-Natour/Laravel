import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Ensure the correct import of Navbar
import StationsList from "./StationsList"; // Import StationsList component
import SolarList from "./SolarList"; // Import SolarList component

const Layout = () => {
    const [activeTab, setActiveTab] = useState<"stations" | "solar">(
        "stations"
    );

    // Define the scrollToSection function
    const scrollToSection = (id: string, tab: "stations" | "solar") => {
        console.log(`Scrolling to ${id} in ${tab}`);
        const element = document.getElementById(id);
        console.log(element); // Check if the element is found
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            console.log(`Element with ID ${id} not found.`);
        }
    };

    // Handle component rendering based on activeTab
    const renderActiveComponent = () => {
        if (activeTab === "stations") {
            return <StationsList />;
        } else if (activeTab === "solar") {
            return <SolarList />;
        }
    };

    // Effect to scroll to section when solar tab is selected
    useEffect(() => {
        if (activeTab === "solar") {
            // Here you can scroll to the desired solar section when the tab is active
            // Make sure the sections are rendered and the scroll logic can be applied.
            scrollToSection("solar-dbayeh", "solar"); // Example scroll to Dbayeh solar section
        }
    }, [activeTab]); // This will run whenever the activeTab changes

    return (
        <>
            {/* Pass scrollToSection and setActiveTab to Navbar as props */}
            <Navbar
                scrollToSection={scrollToSection}
                setActiveTab={setActiveTab}
            />
            <main>
                {/* Render the active component */}
                {renderActiveComponent()}
            </main>
        </>
    );
};

export default Layout;
