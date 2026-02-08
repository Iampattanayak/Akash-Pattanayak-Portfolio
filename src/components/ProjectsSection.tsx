import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Rocket, Lightbulb, Code, Shield, Moon, Search, ClipboardCheck, FileText } from "lucide-react";
import cskipLogo from "@/assets/cskip.png";
import varyLogo from "@/assets/vary.png";
import detLogo from "@/assets/det.png";
import sbmLogo from "@/assets/sbm.png";
import samLogo from "@/assets/sam.png";
import riLogo from "@/assets/ri.svg";

const projects = [
  {
    title: "Self Attendance Manager",
    description: "A comprehensive attendance management app designed to help users track and manage their attendance records efficiently.",
    icon: ClipboardCheck,
    tags: ["React Native", "Mobile App", "Productivity"],
    link: "https://github.com/Iampattanayak/Self-Attendance-Manager",
    image: samLogo,
  },
  {
    title: "Resume Intel",
    description: "A cutting-edge web application designed to help job seekers bypass Applicant Tracking Systems (ATS) and impress human recruiters.",
    icon: FileText,
    tags: ["Web App", "AI", "Career Tools"],
    link: "https://github.com/Iampattanayak/Resume-Intel",
    image: riLogo,
  },
  {
    title: "Chrono-Skip",
    description: "Open-source Chrome extension that neutralizes video ads via heuristic DOM manipulation. Currently serving 20+ active users with zero latency.",
    icon: Code,
    tags: ["JavaScript", "Chrome Extension", "Open Source"],
    link: "https://github.com/Iampattanayak/Chrono-Skip_The-Ad-Accelerator-Chrome-Extension",
    image: cskipLogo,
  },
  {
    title: "Dark Mode Everytime V1",
    description: "Transform your browsing experience with this extension that intelligently inverts bright colors to protect your eyes, reducing strain during late-night browsing while keeping images and videos natural.",
    icon: Moon,
    tags: ["JavaScript", "Chrome Extension", "Accessibility"],
    link: "https://github.com/Iampattanayak/Dark-Mode-Everytime-V1-Chrome-Extension",
    image: detLogo,
  },
  {
    title: "Search Bookmarks Fast",
    description: "A sleek Chrome extension that lets you instantly find bookmarks by name and folder with lightning-fast search.",
    icon: Search,
    tags: ["JavaScript", "Chrome Extension", "Productivity"],
    link: "https://github.com/Iampattanayak/Search-Bookmarks-Fast-Chrome-Extension",
    image: sbmLogo,
  },
  {
    title: "Verifiablelly",
    description: "AI-powered Chrome Extension designed to enhance media literacy. Helps users analyze news articles and web content for bias, logical fallacies, and AI-generated text probabilities using Google's Gemini API.",
    icon: Shield,
    tags: ["AI", "Chrome Extension", "Media Literacy"],
    link: "https://github.com/Iampattanayak/Verifiablelly-Chrome-Extension",
    image: varyLogo,
  },
  {
    title: "HaazirHu",
    description: "Led product ideation for rural development startup. Selected for YUKTI Innovation Challenge 2025 and AICTE Productization Fellowship.",
    icon: Lightbulb,
    tags: ["Product Strategy", "Rural Tech", "Startup"],
  },
  {
    title: "Agriforia",
    description: "AgriTech solution designed at IDE Bootcamp 2025. Led 6-member team—first GKCIET team ever selected for the bootcamp.",
    icon: Rocket,
    tags: ["AgriTech", "Team Lead", "Innovation"],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            Projects
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
            Things I've Built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-elevated p-6 group transition-all duration-500 hover:border-primary/20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                {project.image ? (
                  <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <project.icon size={22} />
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View project on GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
