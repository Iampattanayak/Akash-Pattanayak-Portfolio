import { useRef } from "react";
import { useInView } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait.png";
import aboutBack from "@/assets/web2.png";
import { SkillsCarousel } from "./SkillsCarousel";
import { Code2, Globe, Layout, Database } from "lucide-react";

interface Skill {
  name: string;
  logo: string | React.ReactNode;
  type: "image" | "icon";
}

const technicalSkills: Skill[] = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", type: "image" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", type: "image" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", type: "image" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", type: "image" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", type: "image" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", type: "image" },
];

const pmTools: Skill[] = [
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-3.svg", type: "image" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg", type: "image" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", type: "image" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", type: "image" },
  { name: "Miro", logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg", type: "image" },
];

const frameworks: Skill[] = [
  { name: "Agile", logo: <Code2 className="w-full h-full text-primary" />, type: "icon" },
  { name: "Scrum", logo: <Globe className="w-full h-full text-primary" />, type: "icon" },
  { name: "Rapid Prototyping", logo: <Layout className="w-full h-full text-primary" />, type: "icon" },
  { name: "User Research", logo: <Database className="w-full h-full text-primary" />, type: "icon" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="section-padding bg-muted/30" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`min-w-0 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="flip-card aspect-[4/5]" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="flip-card-inner rounded-xl">
                <div className="flip-card-front rounded-xl overflow-hidden">
                  <img
                    src={aboutPortrait}
                    alt="Akash working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flip-card-back rounded-xl overflow-hidden">
                  <img
                    src={aboutBack}
                    alt="Akash working"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`min-w-0 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
              About Me
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
              Building Products That Create Impact
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a B.Tech student at GKCIET with a passion for product development
                and technology. As a <strong className="text-foreground">Google Student Ambassador</strong>,
                I've led initiatives on Responsible AI reaching 100+ students.
              </p>
              <p>
                I enjoy working at the intersection of <strong className="text-foreground">product thinking, execution, and technology</strong>. Translating ideas into structured plans, breaking problems into actionable tasks, and delivering user-focused products. I bring both technical depth and delivery mindset to every project.
              </p>
            </div>

            {/* Skills Carousel */}
            <div className="space-y-6 overflow-hidden">
              <SkillsCarousel title="Technical Skills" skills={technicalSkills} />
              <SkillsCarousel title="Product Management Tools" skills={pmTools} reverse />
              <SkillsCarousel title="Frameworks & Methodologies" skills={frameworks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
