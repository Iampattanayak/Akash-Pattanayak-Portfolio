import { Linkedin, Github, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg font-semibold text-foreground">
            Akash Pattanayak
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/akashpattanayak2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/iampattanayak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Akash Pattanayak
          </p>
        </div>
      </div>
    </footer>
  );
};
