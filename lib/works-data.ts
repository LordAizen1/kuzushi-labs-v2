import { Brain, Video, Phone, MessageSquare, HeartPulse, Stethoscope, LucideIcon } from "lucide-react";

export interface WorkProject {
    id: string;
    title: string;
    description: string;
    image: string;
    year: string;
    website?: string;
    icon: LucideIcon;
    detail: {
        whoFor: string;
        useCases: string[];
        keyFeatures: string[];
        integrations: string;
        outcomes: string;
    };
}

export const worksData: WorkProject[] = [
    {
        id: "ai-content-studio",
        title: "AI Content Generation Studio",
        description: "Brand-consistent marketing videos and creatives produced faster. Ideal for hospitality, travel, and consumer brands.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1767016674/anowmly_xvqax7.jpg",
        year: "2025",
        website: "https://www.anowmly.com/",
        icon: Video,
        detail: {
            whoFor: "Hospitality and travel brands, real estate, e-commerce, automotive, and teams producing ongoing marketing content.",
            useCases: [
                "Paid ad creatives and short-form performance content",
                "In-room hotel TV loop videos with monthly refreshes",
                "Destination and offer explainers for travel agencies",
                "Product demos and branded storytelling assets"
            ],
            keyFeatures: [
                "Campaign concepts - scripts - AI-first production - final assets",
                "Brand-consistent tone, visual style, and messaging",
                "Rapid iterations for performance creatives",
                "Production pipeline - plus creative team support"
            ],
            integrations: "Asset libraries (Drive or S3), brand guidelines, content calendars, distribution formats for web, social, and in-property screens.",
            outcomes: "Higher content velocity, reduced turnaround time, and scalable production without scaling headcount."
        }
    },
    {
        id: "sales-agent",
        title: "Sales Agent - Interviewer and Evaluator",
        description: "Automated sales interviews and AI scorecards to hire, benchmark, and upskill teams consistently at scale.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
        year: "2024",
        icon: Brain,
        detail: {
            whoFor: "Sales leaders, HR and recruiting teams, and training managers running high-volume hiring or ongoing performance programs.",
            useCases: [
                "Candidate screening and role-fit interviews",
                "Partner and channel sales benchmarking",
                "Ongoing capability assessment (monthly or quarterly)",
                "Training needs identification through skill-gap mapping"
            ],
            keyFeatures: [
                "Multi-channel interviews (phone and web)",
                "Role-specific scripts and scenario-based objection handling",
                "AI evaluation for communication, product understanding, empathy, and objection handling",
                "Structured summaries and recommendations (hire, train, reject)",
                "Cohort insights by region, campaign, or partner"
            ],
            integrations: "ATS and HRMS, CRM, email and WhatsApp for scheduling and reminders, internal dashboards, custom APIs.",
            outcomes: "More consistent hiring decisions, faster screening cycles, and clearer coaching signals to improve team performance."
        }
    },
    {
        id: "zoice-ai",
        title: "Zoice AI - Voice Telephony Platform",
        description: "Production-ready AI voice agents for inbound and outbound calls, integrated with your CRM and internal APIs.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239829/u9938599753_make_me_a_realistic_crowd_image_--sref_httpss.mj.ru_c8f15258-4354-40d8-a7f7-8d834c2ace81_ijy1g1.png",
        year: "2024",
        icon: Phone,
        detail: {
            whoFor: "Sales, support, and operations teams that run high-volume calling or appointment workflows.",
            useCases: [
                "Lead qualification and callback automation",
                "Appointment booking, confirmations, and reminders",
                "Support triage and FAQ resolution",
                "Collections, renewals, and operational follow-ups"
            ],
            keyFeatures: [
                "Inbound and outbound calling at scale",
                "Human-like, low-latency conversations",
                "Multi-turn dialogue flows - with escalation to humans",
                "Integration-ready event and webhook architecture",
                "Analytics for call outcomes, drop-offs, and QA"
            ],
            integrations: "SIP and Twilio (as applicable), CRM (HubSpot, Salesforce, or custom), ticketing tools, calendars, internal APIs, WhatsApp, SMS, and email notifications.",
            outcomes: "Lower handling time, faster speed-to-lead, consistent customer experience, and improved conversion without added headcount."
        }
    },
    {
        id: "whatsapp-assistant",
        title: "WhatsApp Brand Assistant - RAG Chatbot",
        description: "A dedicated WhatsApp assistant grounded in your website, documents, and FAQs that answers accurately and drives actions.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Soar_In_Style_Designs_a_painting_of_a_woman_posing_with_a_vinta_26334b90-9dd4-4bb5-a82a-9fd140e11b9d_ldgzxs.png",
        year: "2024",
        icon: MessageSquare,
        detail: {
            whoFor: "Consumer brands and service businesses that want a WhatsApp-first customer assistant for discovery, support, and lead conversion.",
            useCases: [
                "Product discovery and recommendations",
                "FAQs, policies, pricing, and availability queries",
                "Order support - tracking, returns, and issue intake",
                "Lead capture and qualification"
            ],
            keyFeatures: [
                "Ingests website, FAQs, and documents into a grounded knowledge system",
                "Brand-voice responses - with controlled accuracy",
                "Optional structured data support - SKU, price, stock",
                "Dedicated WhatsApp number - brand-owned deployment",
                "Admin dashboard - content updates and monitoring"
            ],
            integrations: "Catalog and inventory systems, Shopify, Magento, custom databases, CRM, ticketing tools, payment or booking flows where applicable.",
            outcomes: "Faster customer responses, higher lead capture, reduced support load, and improved conversion from WhatsApp conversations."
        }
    },
    {
        id: "prm-healthcare",
        title: "Healthcare - Patient Relationship Manager (PRM)",
        description: "Voice and WhatsApp automation for appointments, reminders, follow-ups, and patient support.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Luisa_M_vintage_engraved_postage_stamp_illustration_intaglio_st_77d7024c-d242-4508-a0ca-e8c695c86b6e_b4m7li.png",
        year: "2023",
        icon: HeartPulse,
        detail: {
            whoFor: "Clinics and hospitals seeking to reduce no-shows and admin overhead while improving patient engagement.",
            useCases: [
                "Appointment booking and rescheduling",
                "Reminders for visits, medication, and follow-ups",
                "Basic inbound support - timings, location, preparation instructions",
                "Post-visit check-ins and careplan nudges"
            ],
            keyFeatures: [
                "Voice and WhatsApp as primary patient channels",
                "Structured intake and history collection",
                "Integration with clinic scheduling and patient systems",
                "Automated reminders and follow-up workflows",
                "Escalation paths to staff when needed"
            ],
            integrations: "Clinic systems where available, calendars, WhatsApp, SMS, email, internal operations dashboards.",
            outcomes: "Lower no-show rates, faster scheduling, reduced staff workload, and more consistent patient communication."
        }
    },
    {
        id: "clinical-tools",
        title: "Clinical Tools - Cardiology and Beyond",
        description: "Clinical workflow tools for structured capture, scoring support, and AI-assisted documentation, built to extend across specialties.",
        image: "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239827/u1792966772_heraldic_engraving_style_logo_a_running_alpaca_with_d489ba0a-bd19-4f35-886a-4b9123fa1693_tkfuf2.png",
        year: "2025",
        icon: Stethoscope,
        detail: {
            whoFor: "Clinical teams that need lightweight decision-support and workflow tools to reduce documentation burden.",
            useCases: [
                "Structured clinical data capture during consults",
                "Scoring aids and guideline-based prompts",
                "AI-assisted documentation and follow-up summaries",
                "Extensible modules for additional specialties"
            ],
            keyFeatures: [
                "Modular tool design - specialty-by-specialty expansion",
                "Structured prompts and scoring workflows",
                "Assistive documentation support",
                "Governance-friendly implementation - access controls and auditability as needed"
            ],
            integrations: "Clinical systems where feasible, internal clinical dashboards, secure storage and access-control layers.",
            outcomes: "Reduced admin load, improved consistency in clinical workflows, and faster, more structured documentation."
        }
    },
];
