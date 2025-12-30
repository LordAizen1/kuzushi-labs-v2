import { Brain, Database, Mic, Eye, Code, Layers } from "lucide-react";
import {
    SiSupabase, SiPostgresql,
    SiOpencv, SiPython, SiFastapi, SiNodedotjs,
    SiTypescript, SiReact, SiNextdotjs, SiFlutter,
    SiDocker, SiKubernetes, SiTerraform, SiApachekafka, SiGrafana
} from "react-icons/si";
import { FaDatabase, FaMicrophone, FaEye, FaVideo, FaWaveSquare, FaFileImage } from "react-icons/fa6";
import {
    OpenAI, Anthropic, Gemini, Meta, Mistral, LangChain, LlamaIndex,
    ElevenLabs, N8n, Aws, Azure, GoogleCloud
} from "@lobehub/icons";
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
        icon: Brain,
        description: "Models and frameworks selected for accuracy, latency, and governance.",
        logos: [
            { name: "OpenAI", icon: OpenAI },
            { name: "Anthropic", icon: Anthropic },
            { name: "Google Gemini", icon: Gemini },
            { name: "Meta Llama", icon: Meta },
            { name: "Mistral", icon: Mistral },
            { name: "LangChain", icon: LangChain },
            { name: "LlamaIndex", icon: LlamaIndex }
        ]
    },
    {
        id: "retrieval",
        label: "Retrieval",
        icon: Database,
        description: "Scalable search and knowledge systems using hybrid retrieval and vector indexes.",
        logos: [
            { name: "Qdrant", icon: FaDatabase },
            { name: "Pinecone", icon: Database },
            { name: "Supabase", icon: SiSupabase },
            { name: "pgvector", icon: SiPostgresql },
            { name: "OpenAI Embeddings", icon: OpenAI },
            { name: "SPLADE", icon: FaDatabase }
        ]
    },
    {
        id: "voice",
        label: "Voice",
        icon: Mic,
        description: "Low-latency speech pipelines for voice agents, streaming conversations, and multilingual flows.",
        logos: [
            { name: "Whisper", icon: OpenAI },
            { name: "Deepgram", icon: FaWaveSquare },
            { name: "ElevenLabs", icon: ElevenLabs },
            { name: "Pipecat", icon: PipecatIcon },
            { name: "Bolna", icon: FaDatabase },
            { name: "Voice Cloning", icon: FaMicrophone }
        ]
    },
    {
        id: "vision",
        label: "Vision",
        icon: Eye,
        description: "Visual intelligence for extraction, verification, and automation across images, documents, and video.",
        logos: [
            { name: "OpenCV", icon: SiOpencv },
            { name: "YOLO", icon: FaEye },
            { name: "Detectron2", icon: FaEye },
            { name: "Tesseract", icon: FaFileImage },
            { name: "PyVision", icon: SiPython },
            { name: "Frame Analysis", icon: FaVideo }
        ]
    },
    {
        id: "product",
        label: "Product",
        icon: Code,
        description: "Full-stack development for AI products with clean APIs, reliable workflows, and modern UX.",
        logos: [
            { name: "Python", icon: SiPython },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Flutter", icon: SiFlutter },
            { name: "n8n", icon: N8n }
        ]
    },
    {
        id: "infra",
        label: "Infra",
        icon: Layers,
        description: "Secure deployments, observability, and integration with enterprise systems and business workflows.",
        logos: [
            { name: "AWS", icon: Aws },
            { name: "Azure", icon: Azure },
            { name: "Google Cloud", icon: GoogleCloud },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform },
            { name: "Kafka", icon: SiApachekafka },
            { name: "Grafana", icon: SiGrafana }
        ]
    }
];
