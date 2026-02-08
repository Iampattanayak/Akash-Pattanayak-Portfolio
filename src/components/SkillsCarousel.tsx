import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Skill {
    name: string;
    logo: string | React.ReactNode;
    type: "image" | "icon";
}

interface SkillsCarouselProps {
    title: string;
    skills: Skill[];
    className?: string;
    reverse?: boolean;
}

export const SkillsCarousel = ({ title, skills, className = "", reverse = false }: SkillsCarouselProps) => {
    const controls = useAnimationControls();

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                transition: {
                    duration: 20, // Adjust speed here
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        };
        startAnimation();
    }, [controls, reverse]);

    return (
        <div className={`w-full overflow-hidden py-4 ${className}`}>
            <h4 className="text-sm font-medium text-foreground mb-4 px-1">{title}</h4>
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-4 w-max"
                    animate={controls}
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() =>
                        controls.start({
                            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                            transition: {
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                            },
                        })
                    }
                >
                    {/* Duplicate functionality for infinite loop */}
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="flex items-center gap-3 px-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-w-[140px] group select-none"
                        >
                            <div className="w-8 h-8 flex items-center justify-center bg-background/80 rounded-lg p-1.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {skill.type === "image" ? (
                                    <img
                                        src={skill.logo as string}
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="text-primary">{skill.logo}</div>
                                )}
                            </div>
                            <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
