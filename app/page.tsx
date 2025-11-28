import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Cloud,
  Cpu,
  Film,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const heroFocus = [
  {
    title: "Product engineering",
    icon: Cpu,
    description: "Next.js + Node.js apps with clean architecture and fast UI.",
  },
  {
    title: "DevOps & cloud",
    icon: Cloud,
    description: "Dockerized services, CI/CD, Linux ops, and AWS rollouts.",
  },
  {
    title: "Media systems",
    icon: Film,
    description: "FFmpeg pipelines, distributed workers, queues, and storage.",
  },
];

const services = [
  {
    title: "Ship production-ready products",
    subtitle: "Full-stack ownership",
    description:
      "Plan, build, and deploy end-to-end features with resilient APIs, auth, and data models.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "tRPC / REST", "TypeScript"],
  },
  {
    title: "Harden infra & operations",
    subtitle: "DevOps automation",
    description:
      "CI/CD, release playbooks, Linux/Ubuntu management, observability, and blue/green style deploys.",
    tags: ["Docker", "CI/CD", "Redis queues", "Cloudflare", "AWS"],
  },
  {
    title: "Handle complex media",
    subtitle: "FFmpeg specialist",
    description:
      "Build FFmpeg-based engines for multi-variant video generation with concurrency control.",
    tags: ["FFmpeg", "Python workers", "Redis", "S3 storage", "Background jobs"],
  },
];

const experience = [
  {
    company: "Scalez Media",
    role: "Full Stack Developer",
    period: "Jan 2024 – Present",
    location: "Remote / India",
    bullets: [
      "Sole engineer leading planning → delivery for internal and client products.",
      "Built and maintained Next.js + Node.js stacks with Prisma and PostgreSQL.",
      "Managed Linux/Ubuntu servers, CI/CD, production support, and automated rollouts.",
      "Created Redis-backed background queues to keep features stable at scale.",
      "Partnered directly with founders to ship quickly while preserving reliability.",
    ],
  },
];

const projects = [
  {
    name: "Deviant Dashboard",
    stack: "Next.js · Prisma · PostgreSQL · Node.js · Docker",
    blurb:
      "Modular analytics dashboard with authentication, pipelines, and admin tooling built for scale.",
  },
  {
    name: "Video Microservice",
    stack: "Python · FFmpeg · Redis · Node.js · AWS S3",
    blurb:
      "Distributed FFmpeg engine producing 100–300+ variants with S3 storage and automated post-processing.",
  },
  {
    name: "The Abani Store",
    stack: "Next.js · TypeScript · Stripe · MongoDB",
    blurb:
      "End-to-end e-commerce platform with catalog, checkout, order flow, and admin controls.",
  },
  {
    name: "MeetAI",
    stack: "TypeScript · Next.js",
    blurb:
      "AI-driven web experience that blends prompts, queries, and modern UI elements for fast iteration.",
  },
  {
    name: "Transcoin",
    stack: "TypeScript · React · Web3 APIs",
    blurb: "Lightweight crypto utility with secure wallet logic and modern UI.",
  },
  {
    name: "Workflow Automation Service",
    stack: "Node.js · Cron · Automation Scripts",
    blurb:
      "Operational automation suite orchestrating cron workflows and backend scripts for tooling.",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Sparkles,
    items: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "Design systems",
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    items: ["Node.js", "Prisma", "PostgreSQL", "MongoDB", "tRPC / REST"],
  },
  {
    title: "DevOps & Cloud",
    icon: ShieldCheck,
    items: ["Docker", "AWS & Cloudflare", "CI/CD", "Linux ops", "Redis queues"],
  },
  {
    title: "Media & Automation",
    icon: Film,
    items: [
      "FFmpeg pipelines",
      "Python workers",
      "Cron jobs",
      "Video variants",
      "Observability hooks",
    ],
  },
];

const certifications = [
  "Full Stack Development Certification",
  "Cloud & DevOps Hands-on Experience",
  "Open Source Contribution & Code Review Practice",
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Ownership Mindset",
  "Continuous Learning",
];

const languages = ["English (Professional)", "Hindi (Fluent)"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <DecorativeBackground />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 md:px-10 lg:px-0">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.12),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                  Full Stack · DevOps · Cloud-Native
                </span>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  Gandhinagar, India
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Manish Kumar Sharma
                </h1>
                <p className="max-w-3xl text-lg text-white/80">
                  Full Stack Developer with a cybersecurity backbone. I build
                  scalable web products, FFmpeg-powered media systems, and
                  DevOps automation that keep releases smooth and reliable.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="mailto:manishks2901@gmail.com"
                  className="group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="gap-2 rounded-full bg-white text-black hover:bg-white/90">
                    <Mail className="h-4 w-4" />
                    Email
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link
                  href="https://github.com/manishks2901"
                  className="group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="secondary"
                    className="gap-2 rounded-full bg-black text-white hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/manish-kumar-sharma-ba601630b"
                  className="group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="tel:+918167337218">
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    +91 8167337218
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {heroFocus.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3 text-white/80">
                      <item.icon className="h-5 w-5 text-amber-200" />
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl">
              <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span>Delivering reliable releases with secure foundations</span>
              </div>
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  <p>Cybersecurity-aware approach across app and infra layers.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-sky-300" />
                  <p>Scale-ready backends with queues, caching, and observability.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="h-5 w-5 text-amber-200" />
                  <p>End-to-end ownership: code, deploy, monitor, iterate.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Current focus
                </p>
                <p className="mt-2">
                  Scalez Media — building dashboards, automation services, and FFmpeg
                  engines with a lean, founder-facing workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/40"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                {service.subtitle}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm text-white/75">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Professional Experience
              </p>
              <h2 className="text-2xl font-semibold">Building and shipping</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/70">
              Security-aware · Production-ready
            </span>
          </div>

          <div className="grid gap-6">
            {experience.map((role) => (
              <div
                key={role.company}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/60">
                      {role.period}
                    </p>
                    <h3 className="text-xl font-semibold">
                      {role.role} · {role.company}
                    </h3>
                  </div>
                  <span className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4" />
                    {role.location}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 text-white/80">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Projects
              </p>
              <h2 className="text-2xl font-semibold">Recent builds & systems</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/70">
              Product-ready · Scalable · Tested
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg transition hover:-translate-y-1 hover:border-amber-200/40"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-white/60">
                    <ArrowUpRight className="h-4 w-4 text-amber-200" />
                    <span>{project.stack}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-white/80">{project.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <skill.icon className="h-5 w-5 text-amber-200" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Stack focus
                  </p>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
            <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
              <BookOpen className="h-5 w-5 text-cyan-200" />
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Education
              </p>
            </div>
            <h2 className="text-xl font-semibold">
              B.Tech – M.Tech (Integrated) in Computer Science & Engineering
            </h2>
            <p className="mt-2 text-white/80">
              Cybersecurity focus · National Forensic Sciences University,
              Gandhinagar — Pursuing
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
                Security-first mindset
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
                Applied engineering
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
            <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Certifications & Practice
              </p>
            </div>
            <ul className="grid gap-2 text-white/80">
              {certifications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Soft Skills
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Languages
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/20 via-white/10 to-cyan-400/15 p-8 shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Let&apos;s build
              </p>
              <h3 className="text-2xl font-semibold">
                Need a full-stack dev who ships and owns the pipeline?
              </h3>
              <p className="text-white/80">
                I can lead delivery end-to-end: architecture, build, deploy, and
                keep it stable in production.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:manishks2901@gmail.com"
                className="group"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="gap-2 rounded-full bg-white text-black hover:bg-white/90">
                  <Mail className="h-4 w-4" />
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link
                href="https://github.com/manishks2901"
                className="group"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="secondary"
                  className="gap-2 rounded-full border-white/30 bg-black/60 text-white hover:bg-black/70"
                >
                  <Github className="h-4 w-4" />
                  View my work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-amber-400/14 blur-[120px]" />
      <div className="absolute bottom-10 left-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:140px_140px]" />
    </div>
  );
}
