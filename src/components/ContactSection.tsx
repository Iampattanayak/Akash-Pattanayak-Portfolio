import { useRef } from "react";
import { useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className={`text-primary font-medium text-sm tracking-wide uppercase mb-3 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Contact
          </p>
          <h2
            className={`font-serif text-3xl lg:text-4xl font-semibold mb-6 transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-muted-foreground text-lg mb-10 transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            I'm always open to discussing product management opportunities,
            tech innovations, or collaboration ideas.
          </p>

          {/* Contact Cards */}
          <div
            className={`grid sm:grid-cols-3 gap-4 mb-10 transition-all duration-500 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href="mailto:akashpattanayak89@gmail.com"
              className="card-elevated p-5 text-center hover:border-primary/20 transition-all group"
            >
              <Mail className="mx-auto mb-3 text-primary" size={24} />
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
              <p className="text-xs text-muted-foreground mt-1">Get in touch</p>
            </a>

            <a
              href="https://www.linkedin.com/in/akashpattanayak2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-5 text-center hover:border-primary/20 transition-all group"
            >
              <Linkedin className="mx-auto mb-3 text-primary" size={24} />
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
              <p className="text-xs text-muted-foreground mt-1">Let's connect</p>
            </a>

            <a
              href="https://github.com/iampattanayak"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-5 text-center hover:border-primary/20 transition-all group"
            >
              <Github className="mx-auto mb-3 text-primary" size={24} />
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">GitHub</p>
              <p className="text-xs text-muted-foreground mt-1">View my code</p>
            </a>
          </div>

          {/* Location */}
          <div
            className={`transition-all duration-500 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
              <MapPin size={16} />
              Based in Kolkata, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
