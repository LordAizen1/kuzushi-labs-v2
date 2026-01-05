import { 
    Brain, Video, Phone, MessageSquare, HeartPulse, Stethoscope, LucideIcon, 
    Plane, Activity, Mic, Car, User, TrendingUp, Shield, MessageCircle, GraduationCap, 
    Hammer, Target, Smartphone, Database, UserCheck
} from "lucide-react";

export interface WorkProject {
    id: string;
    title: string;
    description: string;
    image: string;
    year: string;
    website?: string;
    icon: LucideIcon;
    detail: {
        whoFor?: string; // Optional/Legacy
        problem: string[];
        solution: string[]; // Maps to Key Features
        impact: string[]; // Maps to Outcomes
        technical: string; // New
        
        // Legacy fields for backward compatibility or synthesis
        useCases?: string[]; 
        integrations?: string;
    };
}

const IMAGES = [
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1767016674/anowmly_xvqax7.jpg",
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235195/youcef0823_real_retro_UGC_happy_couple_in_snow_--v_7_e5b3b797-e41b-44d9-941b-f756ac88ec9f_bvm90l.png",
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239829/u9938599753_make_me_a_realistic_crowd_image_--sref_httpss.mj.ru_c8f15258-4354-40d8-a7f7-8d834c2ace81_ijy1g1.png",
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Soar_In_Style_Designs_a_painting_of_a_woman_posing_with_a_vinta_26334b90-9dd4-4bb5-a82a-9fd140e11b9d_ldgzxs.png",
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1766235193/Luisa_M_vintage_engraved_postage_stamp_illustration_intaglio_st_77d7024c-d242-4508-a0ca-e8c695c86b6e_b4m7li.png",
    "https://res.cloudinary.com/dgplteq4r/image/upload/v1766239827/u1792966772_heraldic_engraving_style_logo_a_running_alpaca_with_d489ba0a-bd19-4f35-886a-4b9123fa1693_tkfuf2.png"
];

const getImage = (index: number) => IMAGES[index % IMAGES.length];

export const worksData: WorkProject[] = [
    {
        id: "prm-healthcare",
        title: "Healthcare - Agentic Patient Relationship Management (PRM)",
        description: "AI receptionist and workflow agents that cut scheduling time and reduce no-shows for clinics.",
        image: getImage(0),
        year: "2025",
        icon: HeartPulse,
        detail: {
            problem: [
                "20 to 30 percent capacity lost due to busy lines and no-shows",
                "High admin overhead for scheduling and intake",
                "Siloed data and manual workflows across check-in, billing, follow-up"
            ],
            solution: [
                "Receptionist Agent for inbound calls and structured intake",
                "Slot-Finder Agent integrated with CRM and availability validation",
                "Summary Agent that generates structured pre-consult briefs",
                "Reminder and Follow-up Agents via WhatsApp and SMS"
            ],
            impact: [
                "Scheduling time reduced by about 70 percent",
                "No-shows reduced by about 25 percent",
                "Doctors receive consistent pre-consult summaries"
            ],
            technical: "FastAPI microservices, n8n + LangGraph orchestration, Redis streams, schema-constrained GPT-4o summaries, observability with logs, metrics, and tracing."
        }
    },
    {
        id: "travel-itinerary",
        title: "Travel - Multi-Object Itinerary Builder",
        description: "One-chat itinerary planning across flights, hotels, and packages that improves conversion.",
        image: getImage(1),
        year: "2025",
        icon: Plane,
        detail: {
            problem: [
                "Fragmented booking journeys across multiple systems",
                "Users cannot optimize across cost, time, and experience in siloed tools"
            ],
            solution: [
                "Flight Agent for availability, fare rules, baggage",
                "Hotel Agent for stay options aligned to flight timings",
                "Package Agent for bundling and optimization",
                "UX Agent that presents ranked itineraries (cheapest, fastest, balanced)"
            ],
            impact: [
                "Seamless one-chat booking experience",
                "Conversion increase of about 40 percent versus traditional OTA-style flows"
            ],
            technical: "n8n DAG orchestration, custom Python agents for heavy logic, rate-limited API connectors, GPT-4o reranking, multi-currency normalization, chat UI with structured cards."
        }
    },
    {
        id: "sports-analytics",
        title: "Sports Analytics - Real-Time Insights Engine",
        description: "Agents convert live telemetry feeds into dashboards and commentary-ready insights.",
        image: getImage(2),
        year: "2025",
        icon: Activity,
        detail: {
            problem: [
                "Broadcast teams spend hours cleaning feeds and building dashboards",
                "Live commentary lacks structured, real-time insights"
            ],
            solution: [
                "Agents for ingestion, normalization, enrichment, and insight generation",
                "Automated publishing to dashboards and commentator briefs"
            ],
            impact: [
                "80 percent less preparation time",
                "Better live commentary with real-time, structured insights"
            ],
            technical: "WebSocket ingestion, streaming transformations, agent-based insight layer, dashboard output pipeline, reliability controls for real-time workloads."
        }
    },
    {
        id: "zoice-ai",
        title: "Zoice - Voice AI Platform",
        description: "Production voice agents for inbound and outbound calling with real-time orchestration and analytics.",
        image: getImage(3),
        year: "2024",
        icon: Phone,
        detail: {
            problem: [
                "Businesses need scalable phone support without human headcount growth",
                "Legacy IVR is rigid and not conversational"
            ],
            solution: [
                "Voice-to-voice and voice-to-text capabilities",
                "Domain-specific agents for routing and knowledge retrieval",
                "Telephony integration with SIP trunking and fallback options"
            ],
            impact: [
                "Average handling time reduced by about 40 percent",
                "Enables 24 by 7 voice engagement at scale"
            ],
            technical: "Low-latency ASR and TTS, GPT-4o intent layer, agent orchestration, sub-800ms latency budget targets, monitoring of WER and drop-off metrics."
        }
    },
    {
        id: "field-audio",
        title: "Field Audio - Personal Discussion Bot",
        description: "Multilingual transcription, diarization, and structured summaries from field conversations.",
        image: getImage(4),
        year: "2025",
        icon: Mic,
        detail: {
            problem: [
                "Field teams record conversations but need structured outputs",
                "Manual note-taking and compliance documentation is expensive"
            ],
            solution: [
                "Transcribe multilingual audio",
                "Translate to English where needed",
                "Diarize speakers (agent vs customer)",
                "Generate schema-based summaries and searchable archives"
            ],
            impact: [
                "90 percent reduction in manual note-taking",
                "Searchable dashboards for audit and compliance workflows"
            ],
            technical: "Mobile upload to S3, WhisperX + Gemini for ASR and translation, PyAnnote diarization, GPT-4o constrained summarization, React + FastAPI dashboard, Qdrant embeddings."
        }
    },
    {
        id: "auto-dealership",
        title: "Auto Dealership - Test Drive Scheduling AI (Demo)",
        description: "Telephony AI that books test drives, sends reminders, and escalates to humans when needed.",
        image: getImage(5),
        year: "2025",
        icon: Car,
        detail: {
            problem: [
                "Slow callbacks reduce lead conversion",
                "Sales teams waste time on repetitive scheduling",
                "Fragmented channels lack consistent SLA and traceability"
            ],
            solution: [
                "Instant outbound dialing and inbound handling",
                "Booking engine for showroom or home test drives",
                "Reminder, reschedule, no-show recovery, and post-drive feedback flows",
                "Human escalation for complex negotiation"
            ],
            impact: [
                "Improved speed-to-lead and booking rates",
                "Fewer no-shows via timed reminders",
                "Higher advisor productivity"
            ],
            technical: "Zoice voice pipeline, FastAPI orchestration endpoints, CRM integration connectors, signed webhooks, PII encryption, analytics dashboards, WhatsApp and SMS confirmations."
        }
    },
    {
        id: "xgen",
        title: "XGen - Video Generation Platform",
        description: "Scalable text-to-video and image-to-video pipeline optimized for realism and reproducibility.",
        image: getImage(0),
        year: "2025",
        icon: Video,
        detail: {
            problem: [
                "Existing pipelines struggle with realism and temporal consistency",
                "Scaling content production requires reproducible workflows"
            ],
            solution: [
                "ComfyUI-based DAG workflows running on GPU providers",
                "Open-source models with LoRAs, VAEs, ControlNet conditioning",
                "Storage and delivery optimized for scale"
            ],
            impact: [
                "Demonstrated commercial viability of AI video generation at scale"
            ],
            technical: "Wan 2.1 models, ComfyUI DAG export for reproducibility, GPU providers (Modal, Runpod), Backblaze B2 storage, Bunny CDN delivery, observability for inference time and errors."
        }
    },
    {
        id: "interactive-avatars-sg",
        title: "Interactive Avatars - Telecom Engagement (Singapore)",
        description: "Personalized anime-style avatars that increase engagement and in-app purchases.",
        image: getImage(1),
        year: "2025",
        icon: User,
        detail: {
            problem: [
                "Telecom app needs higher engagement in anime-heavy markets",
                "Static UI experiences do not retain attention"
            ],
            solution: [
                "Gesture-aware anime avatars with personalized context",
                "Low-latency streaming responses",
                "Personality controls (calm, enthusiastic, empathetic)"
            ],
            impact: [
                "Engagement increased by about 30 percent",
                "In-app purchases increased by about 15 percent"
            ],
            technical: "OpenAI SSE streaming, React + Node.js, react-three-fiber rendering with GLB assets, microservice deployment with Kubernetes autoscaling and conversation persistence."
        }
    },
    {
        id: "interactive-avatars-learning",
        title: "Interactive Avatars - Learning Experience",
        description: "Lip-synced, gesture-aware tutor avatars that improve learner engagement.",
        image: getImage(2),
        year: "2025",
        icon: User,
        detail: {
            problem: [
                "Passive video content reduces engagement",
                "Educators need interactive learning experiences"
            ],
            solution: [
                "Text or audio input to talking avatar output",
                "Lip sync and gesture conditioning",
                "Emotional control for tone and delivery"
            ],
            impact: [
                "Student engagement increased by about 25 percent",
                "Reduced reliance on recorded faculty sessions"
            ],
            technical: "Gemini TTS with phoneme alignment, Montreal Forced Aligner, SadTalker + Wav2Lip, OpenPose + ControlNet, async GPU queue with Redis state and retries, Kubernetes autoscaling, MP4/WEBM delivery."
        }
    },
    {
        id: "equity-research",
        title: "Equity Research - RAG Chatbot (US)",
        description: "Enterprise search over 1M+ filings to reduce analyst research time from hours to minutes.",
        image: getImage(3),
        year: "2025",
        icon: TrendingUp,
        detail: {
            problem: [
                "Manual reading and summarization slows research",
                "Analysts need faster synthesis and source-grounding"
            ],
            solution: [
                "Ingestion and chunking pipeline for filings",
                "Vector search plus reranking for precision",
                "LLM synthesis for final answers"
            ],
            impact: [
                "Research time reduced from hours to minutes",
                "Faster report generation and client response cycles"
            ],
            technical: "LlamaParse ingestion, OpenAI embeddings, Qdrant vector DB, hybrid retrieval, cross-encoder reranker, GPT-4o synthesis with structured prompts, Next.js + FastAPI dashboard."
        }
    },
    {
        id: "governed-knowledge",
        title: "Governed Knowledge Assistant - Azure Teams (Dubai)",
        description: "Hybrid RAG + Text-to-SQL assistant with permissions for 1,500+ enterprise users.",
        image: getImage(4),
        year: "2025",
        icon: Shield,
        detail: {
            problem: [
                "Seven departments working in silos",
                "Data spread across ERP, CRM, SharePoint, and ad-hoc exports",
                "Need secure answers with enforced access control"
            ],
            solution: [
                "Teams bot interface",
                "Hybrid RAG over unstructured content and Text-to-SQL over curated data",
                "Row-level security and metadata-based filtering at query time"
            ],
            impact: [
                "Reporting turnaround reduced from days to seconds",
                "Single governed entry point for about 1,500 users",
                "Increased compliance through permission enforcement"
            ],
            technical: "Azure Data Factory and Synapse pipelines, ADLS Gen2 zones, Azure AI Search hybrid index, embeddings via Azure OpenAI, GPT-4o SQL generation, Azure Functions orchestration, adaptive card responses with citations and redaction."
        }
    },
    {
        id: "whatsapp-training",
        title: "WhatsApp Training Bot - NBFC/Home Finance",
        description: "Multilingual, multimodal training assistant on WhatsApp with feedback loops and analytics.",
        image: getImage(5),
        year: "2025",
        icon: MessageCircle,
        detail: {
            problem: [
                "Training materials are static and hard to access in the field",
                "No real-time support or feedback loop"
            ],
            solution: [
                "WhatsApp bot backed by RAG ingestion of PDFs, PPTs, DOCX, and YouTube",
                "Multilingual support and voice interactions",
                "Admin portal for content upload, monitoring, and feedback"
            ],
            impact: [
                "Real-time knowledge access across languages",
                "Reduced training costs and onboarding time",
                "Analytics on knowledge gaps and staff questions"
            ],
            technical: "Ingestion service, vector store, RAG API, STT and TTS pipeline, WhatsApp interactive feedback buttons, session state management, web dashboard for monitoring."
        }
    },
    {
        id: "ai-tutor",
        title: "AI Tutor - K-12 and Higher Ed (PoC)",
        description: "Real-time tutoring with citations and adaptive pedagogy, delivered via WebRTC.",
        image: getImage(0),
        year: "2025",
        icon: GraduationCap,
        detail: {
            problem: [
                "Limited 1:1 attention and after-hours support",
                "Content not adaptive to learner pace and gaps",
                "Curriculum alignment and citations are required"
            ],
            solution: [
                "WebRTC live room for tutoring sessions",
                "Streaming pipeline with ASR, policy engine, RAG, and TTS",
                "Socratic scaffolding and adaptive difficulty model"
            ],
            impact: [
                "Students get 24 by 7 personalized tutoring",
                "Teachers receive transcripts with citations and analytics",
                "Institutions scale support at lower cost"
            ],
            technical: "Daily.co rooms, Pipecat streaming, book ingestion to vector store, cited answers with page references, FastAPI endpoints for sessions and assessments, signed webhooks, JWT auth, observability dashboards."
        }
    },
    {
        id: "construction-site",
        title: "Construction Site Detection - Satellite + Vision LLMs",
        description: "Satellite-driven construction detection with POI mapping for faster rural verification.",
        image: getImage(1),
        year: "2025",
        icon: Hammer,
        detail: {
            problem: [
                "Manual satellite analysis is too slow for scale",
                "Need detection at Gram Panchayat to district levels"
            ],
            solution: [
                "Integrated Bhoonidhi API for imagery retrieval",
                "GeoTIFF tiling pipeline for processing",
                "Vision LLM analysis and POI mapping for nearby infrastructure"
            ],
            impact: [
                "Faster detection of new construction activity",
                "Coordinates and visibility into supporting infra like material shops"
            ],
            technical: "Bhoonidhi API integration, raster tile processing, vision LLM inference, POI mapping using OpenStreetMap and Google Places APIs."
        }
    },
    {
        id: "bullseye",
        title: "Bullseye - Token-Based Prediction Marketplace",
        description: "Regulatory-safe prediction product that increased DAU and session duration in a telecom super app.",
        image: getImage(2),
        year: "2024",
        icon: Target,
        detail: {
            problem: [
                "Need higher retention and engagement",
                "Must be regulatory-safe with no fiat gambling mechanics",
                "Requires integration with token economy and push notifications"
            ],
            solution: [
                "Yes/No prediction events with token staking",
                "Leaderboards and streak loops",
                "Admin dashboard for moderation and analytics",
                "Push triggers integrated to native infra"
            ],
            impact: [
                "DAU increased by about 20 percent in 2 weeks",
                "Session duration increased by about 25 percent",
                "Token velocity doubled and social sharing drove new users"
            ],
            technical: "Next.js webview, Node.js + FastAPI backend, Postgres with caching, Kubernetes deployment, FCM and APNs integration, event-driven token transaction processing, load-tested for scale."
        }
    },
    {
        id: "onest-mobile",
        title: "ONEST Mobile Apps - Candidate and Employer",
        description: "Two mobile apps operationalizing ONEST flows for verified hiring at scale.",
        image: getImage(3),
        year: "2025",
        icon: Smartphone,
        detail: {
            problem: [
                "Candidates in tier-2/3 towns face language and literacy barriers",
                "MSMEs need verified profiles and structured hiring flows",
                "Discovery to apply to interview to hire breaks across systems"
            ],
            solution: [
                "Candidate app for profile, verification, search, and apply",
                "Employer app for job posting, shortlisting, interview scheduling",
                "Telephony helpline for phone-based onboarding and updates",
                "Protocol-aligned event flows throughout"
            ],
            impact: [
                "1,000+ candidate installs and 50+ employers onboarded",
                "Lower friction onboarding and real-time status across lifecycle",
                "Structured data improves matching and reduces screening time"
            ],
            technical: "Flutter apps, FastAPI backend, Postgres reporting, GCP deployment, event-driven protocol handlers with idempotency, webhook ingestion for helpline transcriptions, schema validation."
        }
    },
    {
        id: "genai-chatbot",
        title: "GenAI Omnichannel Chatbot - Telecom",
        description: "Multilingual chatbot with handoff, guardrails, and journey analytics for 100+ intents.",
        image: getImage(4),
        year: "2025",
        icon: MessageSquare,
        detail: {
            problem: [
                "Need scalable support across text and voice",
                "Complex intent routing for 100+ journeys",
                "Requires strict PII controls and hallucination monitoring"
            ],
            solution: [
                "Text and voice support",
                "Live-agent handover with transcript and auto-summary",
                "Sentiment and subscriber-type routing"
            ],
            impact: [
                "Unified support stack with centralized knowledge",
                "Secure, observable AI interactions"
            ],
            technical: "CRM and omnichannel integrations, NBO flows with payment handling, centralized knowledge management, guardrails and observability."
        }
    },
    {
        id: "genai-migration",
        title: "GenAI Migration Toolkit - DataStage/Teradata to DBT",
        description: "Automation toolkit converting legacy ETL to DBT templates with audit and validation.",
        image: getImage(5),
        year: "2025",
        icon: Database,
        detail: {
            problem: [
                "Legacy ETL is hard to maintain and slow to migrate",
                "Manual conversion is costly and error-prone"
            ],
            solution: [
                "Automated DataStage pre-processor for XML parsing and dependency mapping",
                "Prompt-managed conversion modules for BTEQ and ETL to DBT templates",
                "Validation workflows with human review"
            ],
            impact: [
                "About 70 percent automation with iterative improvements",
                "Standardized DBT templates with audit trails"
            ],
            technical: "Audit logs, coding guidelines enforcement, validation harnesses, and maturity scoring for migration readiness."
        }
    },
    {
        id: "personal-ai",
        title: "Personal AI - Students and Professionals",
        description: "Privacy-first assistant using Gmail, Calendar, and Canvas to deliver proactive nudges and actions.",
        image: getImage(0),
        year: "2025",
        icon: UserCheck,
        detail: {
            problem: [
                "Missed deadlines and follow-ups due to scattered context",
                "Noise in inbox and LMS makes prioritization difficult",
                "Personalization is often brittle and not privacy-forward"
            ],
            solution: [
                "Event-driven ingest for Gmail and Calendar, optional Canvas live events",
                "Memory-RAG persona with citations and evidence ledger",
                "Proactive nudges with deep links and one-tap actions"
            ],
            impact: [
                "Proactive schedule management",
                "Reduced cognitive load and fatigue"
            ],
            technical: "Flutter app, FastAPI backend, Postgres + Redis, AWS infra, strict consent ledger, encryption, “erase my data”, observability across events and nudge performance."
        }
    }
];
