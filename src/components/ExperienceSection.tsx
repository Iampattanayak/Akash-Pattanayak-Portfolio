import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, ExternalLink, X } from "lucide-react";
import ambassadorLogo from "@/assets/Ambassador.png";
import dubLogo from "@/assets/dub.png";
import outlierLogo from "@/assets/outlier.png";
import mlLogo from "@/assets/m&l.png";
import cgsa from "@/assets/cgsa.jpeg";
import cgsa1 from "@/assets/cgsa1.jpeg";
import cgsa2 from "@/assets/cgsa2.jpeg";
import cgsa3 from "@/assets/cgsa3.jpeg";
import cgsa4 from "@/assets/cgsa4.jpeg";
import cgsa5 from "@/assets/cgsa5.jpeg";

const experiences = [
  {
    type: "work",
    title: "Freelancer",
    company: "Self-employed",
    period: "Oct 2024 - Present",
    description: "Designed and developed responsive, high-performance websites for clients across multiple domains. Built scalable, responsive web solutions aligned with brand identity and business objectives. Handled end-to-end development—from planning and UI to deployment.",
    skills: ["Web Development", "UI/UX", "Full-Stack"],
  },
  {
    type: "work",
    title: "Google Student Ambassador",
    company: "Google (PING Network)",
    period: "Aug 2025 - Present",
    description: "Led 'Future of Tech' seminars on Responsible AI for 100+ students. Established feedback channels between students and Google program managers.",
    skills: ["Program Management", "Event Planning", "Community Leadership"],
    image: ambassadorLogo,
    gallery: [cgsa, cgsa1, cgsa2, cgsa3, cgsa4, cgsa5],
  },
  {
    type: "work",
    title: "AI Code Evaluator & Trainer",
    company: "Outlier.AI",
    period: "Mar 2025 - Apr 2025",
    description: "Trained advanced LLMs to produce cleaner, more efficient code through expert-level feedback and debugging.",
    skills: ["LLM Training", "Code Review", "AI/ML"],
    image: outlierLogo,
  },
  {
    type: "work",
    title: "Marketing Coordinator",
    company: "Dub.co × Perplexity",
    period: "Oct - Dec 2025",
    description: "Drove campus adoption of Perplexity's Comet Browser through targeted outreach and peer engagement strategies.",
    skills: ["Marketing", "Growth", "Community Outreach"],
    image: dubLogo,
  },
];

const achievements = [
  { title: "Top 1% Global Finalist", subtitle: "Outlier UI Hackathon", icon: Award, image: outlierLogo },
  { title: "PM Certified", subtitle: "Microsoft & LinkedIn", icon: Award, image: mlLogo, link: "https://www.linkedin.com/learning/certificates/fd85636a1b1e9edc4ebd346a4bb2b1a448e59c33c873720564021b63e2ccb1ca" },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            Experience
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
            Where I've Made an Impact
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`card-elevated p-6 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {exp.image ? (
                  <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex-shrink-0 flex items-center justify-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    {exp.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              {exp.gallery && (
                <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {exp.gallery.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`${exp.title} photo ${imgIndex + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="font-serif text-xl font-semibold text-center mb-8">
            Honors & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`card-elevated p-6 text-center transition-all duration-500 hover:scale-105 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {achievement.image ? (
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white p-2 flex items-center justify-center" style={{ boxShadow: "var(--shadow-md)" }}>
                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <achievement.icon className="mx-auto mb-4 text-primary" size={32} />
                )}
                <p className="font-semibold text-foreground">{achievement.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{achievement.subtitle}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
