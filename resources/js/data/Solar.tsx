// data/Solar.tsx

export interface Branch {
    id: string;
    name: string;
    description: string;
    image: string;
    mapsLink: string;
}

export const solarBranches: Branch[] = [
    {
        id: "solar-dbayeh",
        name: "Dbayeh Solar Power Energy",
        description:
            "Harnessing the sun's power in the heart of Dbayeh, this solar station provides clean, renewable energy for sustainable living.",
        image: "/images/EvBranch/dbayeh.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Dbayeh+EV+Charging+Station",
    },
    {
        id: "solar-hazmieh",
        name: "Hazmieh Solar Power Energy",
        description:
            "A smart solar energy hub in Hazmieh, offering reliable, eco-friendly power solutions to fuel the future.",
        image: "/images/EvBranch/hazmieh.png",
        mapsLink:
            "https://www.google.com/maps/place/SOLARIS+Hazmieh/@33.8494941,35.5449588,17z/data=!3m1!4b1!4m24!1m17!1m13!4m12!1m4!2m2!1d35.5991552!2d33.9276626!4e1!1m6!1m2!1s0x151f1625daf66533:0x250df2cc4be82e21!2zRXYtQm94IENoYXJnaW5nIFN0YXRpb24sIFZITTUrRldN2Iwg2KjZiNi02LHZitip2IwgUnVlIDg22Iwg2aPZpdmr2abZo9mo2aHZqdmg2aAgMjYxMQ!2m2!1d35.559809!2d33.8837009!2m2!3m1!5e2!3m5!1s0x151f1762a8ba72ad:0x96af891c4fb18492!8m2!3d33.8494897!4d35.5475337!16s%2Fg%2F11ld__5qlr?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    },
    {
        id: "solar-jounieh",
        name: "Jounieh Solar Power Energy",
        description:
            "Combining coastal beauty with innovation, Jounieh’s solar station delivers green energy with stunning views.",
        image: "/images/EvBranch/jounieh.png",
        mapsLink:
            "https://www.google.com/maps/dir/?api=1&destination=Jounieh+EV+Charging+Station",
    },
];
