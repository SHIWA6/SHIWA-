import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Shiwa Pandey</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="p-4 md:p-10">
        <motion.section 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/115323885?v=4"
            alt="Shiwa Pandey"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Shiwa Pandey</h1>
          <p className="text-xl text-gray-700">Full Stack Developer | React | Node.js | MongoDB</p>
        </motion.section>

        <motion.section id="about" className="mb-10"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate full stack developer currently pursuing B.Tech in Computer Science. Skilled in frontend and backend technologies with a focus on building modern and scalable web applications.
          </p>
        </motion.section>

        <motion.section id="projects" className="mb-10"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Project Cards */}
            {["Portfolio Website", "Chat App", "Blog Platform"].map((title, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">
                    {title === "Portfolio Website" && "A personal website built with React and TailwindCSS to showcase my work and skills."}
                    {title === "Chat App" && "Real-time chat app using Socket.io, Node.js, and React."}
                    {title === "Blog Platform" && "A full stack blog platform using MERN stack with CRUD functionalities."}
                  </p>
                  <Button variant="link" className="p-0 mt-2" asChild>
                    <a href="#" target="_blank">View Project</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="mb-10"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Express.js', 'HTML/CSS', 'Git & GitHub'].map((skill, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">{skill}</div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.4 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:shiwa@example.com" className="text-gray-600 hover:text-black">
              <Mail />
            </a>
            <a href="https://github.com/SHIWA6" target="_blank" className="text-gray-600 hover:text-black">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/shiva-pandey-41978a308/" target="_blank" className="text-gray-600 hover:text-black">
              <Linkedin />
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-10 border-t">
        <p className="text-sm text-gray-500">© 2025 Shiwa Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
}
