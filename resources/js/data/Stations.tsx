// data/Stations.ts

export interface Branch {
    id: string;
    name: string;
    description: string;
    image: string;
    mapsLink: string;
}

export const evBranches: Branch[] = [
    {
        id: "dbayeh",
        name: "Dbayeh EV Charging Station",
        description:
            "Located in the heart of Dbayeh, this station offers fast EV charging and a comfortable rest area.",
        image: "/images/EvBranch/dbayeh.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Dbayeh+EV+Charging+Station",
    },
    {
        id: "jounieh",
        name: "Jounieh EV Charging Station",
        description: "Offers scenic views and rapid EV charging service.",
        image: "/images/EvBranch/jounieh.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Jounieh+EV+Charging+Station",
    },

    {
        id: "baakleen",
        name: "Baakleen EV Charging Station",
        description: "Eco-friendly and quiet – nestled in the mountains.",
        image: "/images/EvBranch/baakleen.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Baakleen+EV+Charging+Station",
    },
    {
        id: "sidon",
        name: "Sidon EV Charging Station",
        description:
            "Located in the southern coastal city of Sidon for long-range EV support.",
        image: "/images/EvBranch/sidon.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Sidon+EV+Charging+Station",
    },
    // {
    //     id: "sour",
    //     name: "Sour EV Charging Station",
    //     description: "Reliable charging near historic coastal Sour.",
    //     image: "/images/EvBranch/sour.png",
    //     mapsLink:
    //         "https://www.google.com/maps/dir/?api=1&destination=Sour+EV+Charging+Station",
    // },
];
