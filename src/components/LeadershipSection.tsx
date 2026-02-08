import { useRef } from "react";
import { useInView } from "framer-motion";
import moeInnovationLogo from "@/assets/MoE-Innovation-Cell.png";
import moeLogo from "@/assets/moe1.png";

const achievements = [
    {
        image: moeInnovationLogo,
        title: "YUKTI Innovation Challenge 2025",
        description: "Led and strategized a cross-functional team of Four to develop HaazirHu, a startup solution aimed at Rural development.",
    },
    {
        image: moeLogo,
        title: "AICTE Productization Fellowship (APF) 2025",
        description: "Spearheaded product ideation and development of 'HaazirHu', with a focus on product-market fit.",
    },
];

export const LeadershipSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="leadership" className="section-padding bg-muted/30" ref={ref}>
            <div className="section-container">
                <div className="text-center mb-14">
                    <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
                        Leadership
                    </p>
                    <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
                        Leadership Achievements
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`card-elevated p-6 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex-shrink-0 flex items-center justify-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                                    <img src={achievement.image} alt={achievement.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
