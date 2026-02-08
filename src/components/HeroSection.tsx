import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import heroBack from "@/assets/hero.png";

const roles = [
    "Aspiring Product Manager",
    "Aspiring Project Manager",
    "Data Engineering Learner",
    "Startup | Innovation | Execution",
    "Problem → User → Value"
];

export const HeroSection = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 30 : 80);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="section-container w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <div className="h-6 mb-4">
                            <p className="text-primary font-medium text-sm tracking-wide uppercase">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </p>
                        </div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-balance animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            Hi, I'm Akash Pattanayak
                        </h1>

                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            Engineering student at GKCIET, Google Student Ambassador, and
                            Top 1% Global UI Design Finalist. I build products that matter.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <a href="#contact" className="btn-primary group">
                                Get in Touch
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a href="#experience" className="btn-secondary">
                                View Experience
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            <span className="text-sm text-muted-foreground">Connect:</span>
                            <a
                                href="https://www.linkedin.com/in/akashpattanayak2006/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/iampattanayak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="relative">
                            <div className="flip-card w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <div className="flip-card-inner rounded-2xl" style={{ boxShadow: "var(--shadow-lg)" }}>
                                    <div className="flip-card-front rounded-2xl overflow-hidden">
                                        <img
                                            src={heroPortrait}
                                            alt="Akash Pattanayak"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="flip-card-back rounded-2xl overflow-hidden">
                                        <img
                                            src={heroBack}
                                            alt="Akash Pattanayak"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-6 card-elevated p-4">
                                <p className="text-xs text-muted-foreground mb-1">Currently at</p>
                                <p className="font-semibold text-primary">Google</p>
                                <p className="text-xs text-muted-foreground">Student Ambassador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
