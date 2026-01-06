import { PiBrainDuotone, PiDatabaseDuotone, PiMicrophoneDuotone, PiEyeDuotone, PiCodeDuotone, PiStackDuotone, PiFileImageDuotone } from "react-icons/pi";
import { PipecatIcon } from "@/components/icons/PipecatIcon";

export const deliverySteps = [
    {
        title: "Discovery & Outcome Definition",
        description: "We start with an introductory call to understand your business context, define the objective, align on success metrics, and identify constraints (data, systems, compliance, timelines).",
        number: "01"
    },
    {
        title: "Architecture Ownership & Project Plan",
        description: "A senior architect is assigned to your engagement end-to-end; responsible for solution design, technical decisions, delivery quality, and long-term maintainability through launch and beyond.",
        number: "02"
    },
    {
        title: "Proposal & Scope Finalization",
        description: "We share a clear business proposal and technical proposal outlining scope, milestones, integrations, assumptions, risks, and the delivery plan. We lock timelines and responsibilities before execution.",
        number: "03"
    },
    {
        title: "Build & Integrate",
        description: "Development begins with rapid, iterative implementation - covering core workflows, system integrations, and production-grade foundations (security, reliability, observability) from day one.",
        number: "04"
    },
    {
        title: "QA, Testing & Launch Readiness",
        description: "We run structured QA and scenario testing, validate edge cases, and ensure the system is stable, monitored, and deployment-ready. Launch plans include rollback and operational playbooks.",
        number: "05"
    },
    {
        title: "Release, Support & Outcome Measurement",
        description: "Post-release, we provide production support and continuous improvement. We track agreed business KPIs, monitor performance, and iterate to maximize measurable impact over time.",
        number: "06"
    }
];

export const techStackTabs = [
    {
        id: "ai-core",
        label: "AI Core",
        icon: PiBrainDuotone,
        description: "LLMs, RAG, and Agents — Models and frameworks selected for accuracy, latency, and governance.",
        logos: [
            { name: "OpenAI", imageSrc: "/openai-2.svg" },
            { name: "Anthropic", imageSrc: "/anthropic-1.svg" },
            { name: "Google Gemini", imageSrc: "/gemini-icon-logo.svg" },
            { name: "Meta Llama", imageSrc: "/meta-color.svg" },
            { name: "Mistral", imageSrc: "/mistral-ai-icon.svg" },
            { name: "LangChain", imageSrc: "/Langchain--Streamline-Simple-Icons.svg" },
            { name: "LlamaIndex", imageSrc: "/llamaindex-color.svg" }
        ]
    },
    {
        id: "retrieval",
        label: "Retrieval",
        icon: PiDatabaseDuotone,
        description: "Retrieval and Vector Stack — Scalable search and knowledge systems using hybrid retrieval and vector indexes.",
        logos: [
            { name: "Qdrant", imageSrc: "/qdrant-new.svg" },
            { name: "Pinecone", imageSrc: "/pinecone.svg" },
            { name: "Supabase", imageSrc: "/supabase-icon.svg" },
            { name: "pgvector", imageSrc: "/postgresql.svg" },
            { name: "OpenAI Embeddings", imageSrc: "/openai-2.svg" },
            { name: "SPLADE", imageSrc: "/splade.svg" }
        ]
    },
    {
        id: "voice",
        label: "Voice",
        icon: PiMicrophoneDuotone,
        description: "Speech, Voice, and Real-Time — Low-latency speech pipelines for voice agents, streaming conversations, and multilingual flows.",
        logos: [
            { name: "Whisper", imageSrc: "/openai-2.svg" },
            { name: "Deepgram", imageSrc: "/Deepgram.svg" },
            { name: "ElevenLabs", imageSrc: "/elevenlabs-ai-icon.svg" },
            { name: "Pipecat", icon: PipecatIcon }
        ]
    },
    {
        id: "vision",
        label: "Vision",
        icon: PiEyeDuotone,
        description: "Vision, OCR, and Multimodal — Visual intelligence for extraction, verification, and automation across images, documents, and video.",
        logos: [
            { name: "OpenCV", imageSrc: "/opencv-svgrepo-com.svg" },
            { name: "YOLO", imageSrc: "/Ultralytics Icon.svg" },
            { name: "Detectron2", imageSrc: "/Detectron2-Logo-Horz.svg" },
            { name: "Tesseract", icon: PiFileImageDuotone }
        ]
    },
    {
        id: "product",
        label: "Product",
        icon: PiCodeDuotone,
        description: "Product Engineering (Web, Mobile, Backend) — Full-stack development for AI products with clean APIs, reliable workflows, and modern UX.",
        logos: [
            { name: "Python", imageSrc: "/python-5.svg" },
            { name: "FastAPI", imageSrc: "/fastapi-1.svg" },
            { name: "Flask", imageSrc: "/Flask--Streamline-Simple-Icons.svg" },
            { name: "Node.js", imageSrc: "/Nodejs-Icon--Streamline-Svg-Logos.svg" },
            { name: "TypeScript", imageSrc: "/typescript.svg" },
            { name: "n8n", imageSrc: "/n8n-icon.svg" },
            { name: "Celery", imageSrc: "/celery_512.svg" },
            { name: "React", imageSrc: "/react-js-icon.svg" },
            { name: "Next.js", imageSrc: "/nextjs-icon.svg" },
            { name: "Angular", imageSrc: "/angular-icon-1.svg" },
            { name: "Vue", imageSrc: "/vue-9.svg" },
            { name: "Flutter", imageSrc: "/flutter.svg" }
        ]
    },
    {
        id: "infra",
        label: "Infra",
        icon: PiStackDuotone,
        description: "Cloud, DevOps, and Enterprise Integrations — Secure deployments, observability, and integration with enterprise systems and business workflows.",
        logos: [
            { name: "AWS", imageSrc: "/aws-2.svg" },
            { name: "Azure", imageSrc: "/azure-2.svg" },
            { name: "Google Cloud", imageSrc: "/google-cloud-1.svg" },
            { name: "Docker", imageSrc: "/docker-4.svg" },
            { name: "Kubernetes", imageSrc: "/kubernets.svg" },
            { name: "Terraform", imageSrc: "/terraform-software-icon.svg" },
            { name: "GitHub Actions", imageSrc: "/GitHub Actions.svg" },
            { name: "Jenkins", imageSrc: "/jenkins-1.svg" },
            { name: "Azure DevOps", imageSrc: "/azure-devops-icon.svg" },
            { name: "Kafka", imageSrc: "/kafka.svg" },
            { name: "Prometheus", imageSrc: "/prometheus.svg" },
            { name: "Grafana", imageSrc: "/grafana.svg" },
            { name: "Postman", imageSrc: "/postman.svg" },
            { name: "SAP", imageSrc: "/sap-3.svg" },
            { name: "MuleSoft", imageSrc: "/mulesoft-new.svg" },
            { name: "Dell Boomi", imageSrc: "/boomi-1.svg" },
            { name: "HubSpot", imageSrc: "/hubspot-1.svg" },
            { name: "Shopify", imageSrc: "/shopify.svg" },
            { name: "Magento", imageSrc: "/magento-icon.svg" }
        ]
    }
];
