export type WorkItem = {
    id: string;
    title: string;
    category: string;
    image: string;
    year: string;
    description: string;
    slug: string;
    // Extended fields for case study page
    websiteLink?: string;
    services?: string[];
    industry?: string;
    fullDescription?: string;
    galleryItems?: string[]; // Array of image/video URLs for the gallery
};

export const WORKS: WorkItem[] = [
    {
        id: "crowne-estate",
        title: "Crowne Estate",
        category: "Real Estate | Promotional Website",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
        year: "2023",
        description: "A Luxury Community That Welcomes You Home",
        slug: "crowne-estate",
        websiteLink: "https://www.example.com/crowne-estate",
        services: ["Branding", "Art Direction", "Website Design & Development", "Motion & Interaction"],
        industry: "Real Estate | Promotional Website",
        fullDescription: "Crowne Estate is a luxury real estate community focused on modern living and mindful design. Our goal was to build a website that reflects its elegance, sustainability and sense of possibility. We approached Crowne Estate with a clean, architectural aesthetic, intuitive navigation and interactive elements that let prospects explore at their own pace.",
        galleryItems: [
            "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
            "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239827/u1792966772_heraldic_engraving_style_logo_a_running_alpaca_with_d489ba0a-bd19-4f35-886a-4b9123fa1693_tkfuf2.png",
            "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239829/u9938599753_make_me_a_realistic_crowd_image_--sref_httpss.mj.ru_c8f15258-4354-40d8-a7f7-8d834c2ace81_ijy1g1.png",
        ],
    },
    {
        id: "anowmly-studio",
        title: "Anowmly.studio",
        category: "AI | Creative Studio Website",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1767016674/anowmly_xvqax7.jpg",
        year: "2025",
        description: "Where Art Collides with AI – A bold digital presence for an AI creative studio.",
        slug: "anowmly-studio",
        websiteLink: "https://www.anowmly.com/",
        services: ["Website Design & Development", "Brand Identity", "Motion & Interaction", "Art Direction"],
        industry: "AI | Creative Technology",
        fullDescription: "Anowmly.studio is an AI-powered creative studio that fuses human craft with machine precision. We designed and developed a bold, immersive website featuring a rapid-fire image slideshow hero, grainy vintage textures, and elegant typography (Instrument Serif, DM Sans). The result: a digital presence that feels both timeless and cutting-edge, perfectly capturing the studio's ethos of redefining storytelling through AI.",
        galleryItems: [
            "https://res.cloudinary.com/dgplteq4r/image/upload/v1767016674/anowmly_xvqax7.jpg",
            "https://res.cloudinary.com/dgplteq4r/image/upload/w_800,q_auto,f_auto/v1766239828/u4239914939_Ultra_realistic_RAW_cinematic_photo_of_a_30-year-ol_bd8ab2e7-3e39-41bd-a636-bfb2bd8b02df_mlrmbx.png",
            "https://res.cloudinary.com/dgplteq4r/image/upload/w_800,q_auto,f_auto/v1766239827/bezmiar_A_realistic_cinematic_shot._A_man_and_a_woman_stand_tog_dbb1325b-fb89-4f4d-ae1f-153d3c46c19f_hr4khk.png",
            "https://res.cloudinary.com/dgplteq4r/image/upload/w_800,q_auto,f_auto/v1766239827/jaydesigner._vintage_illustration_of_the_alcntara_hill_in_lisbo_eb12807f-f17a-4ec8-b3f0-67bb41d79bda_fhsedj.png",
        ],
    },
    {
        id: "jobenetuk",
        title: "Jobenetuk",
        category: "Creative | Portfolio Website",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239829/u9938599753_make_me_a_realistic_crowd_image_--sref_httpss.mj.ru_c8f15258-4354-40d8-a7f7-8d834c2ace81_ijy1g1.png",
        year: "2024",
        description: "A Motion-Focused Portfolio That Brings Digital Work to Life",
        slug: "jobenetuk",
    },
    {
        id: "quant-labs",
        title: "Quant labs",
        category: "Crypto / AI | Token Analysis Platform",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Soar_In_Style_Designs_a_painting_of_a_woman_posing_with_a_vinta_26334b90-9dd4-4bb5-a82a-9fd140e11b9d_ldgzxs.png",
        year: "2025",
        description: "AI-Powered Solana Token Analysis with Data, Security, and Insights",
        slug: "quant-labs",
    },
    {
        id: "props",
        title: "Props",
        category: "E-Commerce | Home & Furniture",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Luisa_M_vintage_engraved_postage_stamp_illustration_intaglio_st_77d7024c-d242-4508-a0ca-e8c695c86b6e_b4m7li.png",
        year: "2023",
        description: "A crafted digital experience that brings a modern furniture brand to life.",
        slug: "props",
    },
    {
        id: "clb-architects",
        title: "CLB Architects",
        category: "Architecture | Company Website",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
        year: "2024",
        description: "A visual exploration of architecture through motion and design.",
        slug: "clb-architects",
    },
    {
        id: "adbc",
        title: "ADBC",
        category: "Creative | Design Portfolio",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239827/u1792966772_heraldic_engraving_style_logo_a_running_alpaca_with_d489ba0a-bd19-4f35-886a-4b9123fa1693_tkfuf2.png",
        year: "2024",
        description: "A Portfolio Where Design, Interaction, and Creativity Come Alive",
        slug: "adbc",
    },
    {
        id: "monieverse-inc",
        title: "Monieverse Inc.",
        category: "Fintech | Trade Settlement Platform",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239829/u9938599753_make_me_a_realistic_crowd_image_--sref_httpss.mj.ru_c8f15258-4354-40d8-a7f7-8d834c2ace81_ijy1g1.png",
        year: "2023",
        description: "Monieverse Inc. - Multi-currency wallet for cross-border money transfers",
        slug: "monieverse-inc",
    },
    {
        id: "pickt-inc",
        title: "Pickt Inc.",
        category: "Tech | Social Platform",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Soar_In_Style_Designs_a_painting_of_a_woman_posing_with_a_vinta_26334b90-9dd4-4bb5-a82a-9fd140e11b9d_ldgzxs.png",
        year: "2023",
        description: "A Platform That Turns Expertise into Earnings with Ease",
        slug: "pickt-inc",
    },
    {
        id: "diana",
        title: "Diana",
        category: "Creative | Writing Portfolio",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Luisa_M_vintage_engraved_postage_stamp_illustration_intaglio_st_77d7024c-d242-4508-a0ca-e8c695c86b6e_b4m7li.png",
        year: "2023",
        description: "A Minimal, Intentional Portfolio That Lets Words Shine",
        slug: "diana",
    },
    {
        id: "moniepoint-2022-yir",
        title: "Moniepoint 2022 YIR",
        category: "Fintech | Annual Report Microsite",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
        year: "2023",
        description: "Showcasing Moniepoint Inc.’s Growth and Innovation in 2022",
        slug: "moniepoint-2022-yir",
    },
    {
        id: "aliyah-adefolake",
        title: "Aliyah Adefolake",
        category: "Creative | Writing Portfolio",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239827/u1792966772_heraldic_engraving_style_logo_a_running_alpaca_with_d489ba0a-bd19-4f35-886a-4b9123fa1693_tkfuf2.png",
        year: "2025",
        description: "A Portfolio Showcasing Compelling Content and UX Writing",
        slug: "aliyah-adefolake",
    },
];
