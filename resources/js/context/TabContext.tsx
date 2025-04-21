import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context state
interface TabContextType {
    activeTab: "stations" | "solar"; // or other possible tab values
    setActiveTab: (tab: "stations" | "solar") => void;
    scrollToSection: (id: string, tab: "stations" | "solar") => void;
}

// Create the context with an initial value
const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
    children: ReactNode;
}

// TabProvider component to wrap around components that need access to the tab state
export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<"stations" | "solar">(
        "stations"
    );

    // Define the scrollToSection function here
    const scrollToSection = (id: string, tab: "stations" | "solar") => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`Scrolling to ${id} in ${tab}`);
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            console.log(`Element with ID ${id} not found.`);
        }
    };

    return (
        <TabContext.Provider
            value={{ activeTab, setActiveTab, scrollToSection }}
        >
            {children}
        </TabContext.Provider>
    );
};

// Custom hook to use the TabContext
export const useTab = (): TabContextType => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("useTab must be used within a TabProvider");
    }
    return context;
};
