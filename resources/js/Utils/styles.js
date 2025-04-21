// styles.js
const styles = {
    boxSx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: 4,
        marginBottom: "60px",
    },
    cardSx: {
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
    },
    titleSx: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "16px",
    },

    branchSx: {
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
    },
};

export default styles;
