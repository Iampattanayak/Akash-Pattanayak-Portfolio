import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, Lightbulb, Users, Wrench, X } from "lucide-react";
import { SkillsCarousel } from "./SkillsCarousel";
import gkcietLogo from "@/assets/logo.png";
import moeLogo from "@/assets/moe1.png";
import moeInnovationLogo from "@/assets/MoE-Innovation-Cell.png";
import debugLogo from "@/assets/Debug.png";
import ide1 from "@/assets/ide1.jpeg";
import ide2 from "@/assets/ide2.jpeg";
import ide3 from "@/assets/ide3.jpeg";
import ide4 from "@/assets/ide4.jpeg";
import ide5 from "@/assets/ide5.jpeg";
import apf1 from "@/assets/apf1.jpeg";
import apf2 from "@/assets/apf2.jpeg";
import apf3 from "@/assets/apf3.jpeg";
import acadLogo from "@/assets/acad.png";

interface Skill {
    name: string;
    logo: string | React.ReactNode;
    type: "image" | "icon";
}

const engineeringSkills: Skill[] = [
    { name: "AutoCAD", logo: acadLogo, type: "image" },
    { name: "Fusion 360", logo: "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg", type: "image" },
    { name: "ROS", logo: <Wrench className="w-full h-full text-primary" />, type: "icon" },
    { name: "Electronics", logo: <Lightbulb className="w-full h-full text-primary" />, type: "icon" },
    { name: "Thermodynamics", logo: <Wrench className="w-full h-full text-primary" />, type: "icon" },
    { name: "Manufacturing", logo: <Wrench className="w-full h-full text-primary" />, type: "icon" },
];

const highlights = [
    {
        icon: null,
        image: moeLogo,
        title: "IDE Bootcamp 2025",
        description: "Led the first-ever student team from GKCIET to be selected for Innovation Design & Entrepreneurship (IDE) Bootcamp 2025 during my 1st year.",
        gallery: [ide1, ide2, ide3, ide4, ide5],
    },
    {
        icon: null,
        image: moeInnovationLogo,
        title: "YUKTI & AICTE Fellowship",
        description: "Team Lead of a cross-functional student team selected for YUKTI Innovation Challenge 2025 and the AICTE Productization Fellowship 2025.",
        gallery: [apf1, apf2, apf3],
    },
    {
        icon: null,
        image: debugLogo,
        title: "Founder of DEBUG",
        description: "Founded DEBUG (Developer's Ecosystem for Building, Uniting & Growing), the official coding club of GKCIET, currently serving as Student Representative.",
    },
];

export const EducationSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="education" className="section-padding" ref={ref}>
            <div className="section-container">
                <div className="text-center mb-14">
                    <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                        Education
                    </p>
                    <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
                        Academic Journey
                    </h2>
                </div>

                {/* Main Education Card */}
                <div
                    className={`card-elevated p-5 sm:p-6 lg:p-8 max-w-4xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5 md:gap-6">
                        {/* Logo */}
                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white p-1.5 flex items-center justify-center" style={{ boxShadow: "var(--shadow-md)" }}>
                            <img
                                src={gkcietLogo}
                                alt="GKCIET Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 w-full">
                            <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
                                Ghani Khan Choudhury Institute of Engineering and Technology
                            </h3>
                            <p className="text-primary font-medium text-xs sm:text-sm mt-1">
                                A CFTI under MoE, Govt. of India
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mt-4 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <GraduationCap size={14} className="text-primary flex-shrink-0" />
                                    <span>B.Tech, Mechanical Engineering</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-primary flex-shrink-0" />
                                    <span>Sep 2024 - July 2028</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={14} className="text-primary flex-shrink-0" />
                                    <span>Malda, West Bengal</span>
                                </div>
                            </div>

                            {/* Skills Carousel */}
                            <div className="mt-4 sm:mt-6 overflow-hidden">
                                <SkillsCarousel title="Engineering Skills" skills={engineeringSkills} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className={`card-elevated p-5 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {highlight.image ? (
                                <img src={highlight.image} alt={highlight.title} className="w-10 h-10 object-contain mb-3" />
                            ) : highlight.icon ? (
                                <highlight.icon className="text-primary mb-3" size={24} />
                            ) : null}
                            <h4 className="font-semibold text-sm text-foreground mb-2">{highlight.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {highlight.description}
                            </p>
                            {/* Image Gallery */}
                            {highlight.gallery && (
                                <div className="mt-3 grid grid-cols-5 gap-1.5">
                                    {highlight.gallery.map((img, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className="aspect-square rounded overflow-hidden bg-muted cursor-pointer"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img src={img} alt={`${highlight.title} photo ${imgIndex + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
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
