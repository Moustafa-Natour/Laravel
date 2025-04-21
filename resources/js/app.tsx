import React from "react";
import ReactDOM from "react-dom/client";
import { TabProvider } from "./context/TabContext"; // Import TabProvider
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
    <React.StrictMode>
        <Router>
            <TabProvider>
                <Layout />
            </TabProvider>
        </Router>
    </React.StrictMode>
);
