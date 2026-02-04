import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  const renderProjectContent = (project: typeof projects[0], index: number) => (
    <div className="grid grid-cols-1 md:grid-cols-3 group/card">
      {/* Project Image/Visual */}
      <div className={`${project.color} aspect-video md:aspect-auto relative overflow-hidden border-b-3 md:border-b-0 md:border-r-3 border-brutal-black`}>
        {/* Preview Image - shows on hover */}
        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <img
            src={`/preview_${index + 1}.png`}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${project.color} opacity-60`}></div>
        </div>

        {/* Number - default state */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="brutal-heading-xl text-white/20 group-hover/card:text-white/40 transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute top-4 left-4 brutal-border bg-brutal-white px-3 py-1 z-10">
          <span className="brutal-text-sm text-xs">{project.category}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-8 md:col-span-2 flex flex-col justify-center">
        <div className="flex items-start justify-between mb-4">
          <h3 className="brutal-heading-md text-lg md:text-xl">{project.title}</h3>
          <span className="brutal-mono text-sm opacity-60">{project.year}</span>
        </div>
        <p className="brutal-text text-brutal-dark/70 mb-6 max-w-xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-brutal-black/10 px-3 py-1 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 brutal-text-sm text-brutal-accent group-hover:gap-4 transition-all">
          <span>View Case Study</span>
          <span>→</span>
        </div>
      </div>
    </div>
  )

  const projects = [
    {
      id: 1,
      title: "Adobe LLM Optimizer GTM Strategy",
      category: "Product Strategy",
      year: "2025",
      description: "Go-to-market proposal for Adobe's LLM Optimizer launch in Q3 2025. Developed market positioning, pricing strategy, and customer acquisition plan for enterprise clients.",
      tags: ["GTM Strategy", "LLM", "Enterprise", "Market Research"],
      link: "/projects/adobe",
      color: "bg-[#FF6B35]"
    },
    {
      id: 2,
      title: "Linguistic Synchrony & Well-being",
      category: "Research",
      year: "2024",
      description: "Investigated how language adaptation affects short-term psychological outcomes in online communication. Analyzed linguistic patterns and their correlation with mood and social connection.",
      tags: ["Psycholinguistics", "NLP", "Behavioral Research", "Data Analysis"],
      link: "/projects/linguistic",
      color: "bg-[#A435F0]"
    },
    {
      id: 3,
      title: "Zoom AI Writing Assistant",
      category: "Product Development",
      year: "2024",
      description: "Led the development of AI-powered writing features in Zoom Docs, enabling seamless content generation and collaboration for enterprise teams.",
      tags: ["AI/ML", "B2B SaaS", "Data Analysis"],
      link: "/projects/zoom",
      color: "bg-[#2D8CFF]"
    },
    {
      id: 5,
      title: "Advocating for Immigration Rights",
      category: "Data Visualization",
      year: "2023",
      description: "Analyzed demographic and geographic correlations for H1-B visa sponsorships. Presented at Virginia Immigration Right Conference for UVA School of Law & Oxford Faculty of Law.",
      tags: ["Tableau", "Social Impact", "Research"],
      link: "/projects/immigration",
      color: "bg-[#E97627]"
    }
  ]

  const skills = [
    "Jira", "Tableau", "Databricks", "Figma", "Miro", 
    "Confluence", "Lovable", "Vercel", "SQL", "Python"
  ]

  const experiences = [
    { company: "UCloud", role: "GTM Intern", color: "bg-[#A435F0]" },
    { company: "Zoom", role: "AI Product Manager Intern", color: "bg-[#2D8CFF]" },
    { company: "Geely", role: "Research Intern", color: "bg-brutal-black" },
    { company: "The Players Company", role: "Web Design", color: "bg-[#FF6B35]" }
  ]

  const highlights = [
    "Data Acumen",
    "Technical Background", 
    "200+ Hour User Interview",
    "3 Product Management Experiences",
    "Model Training Experience"
  ]

  return (
    <div className="min-h-screen bg-brutal-cream text-brutal-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-cream border-b-3 border-brutal-black">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="brutal-heading-md text-2xl font-black tracking-tight">
            MING.
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="brutal-text-sm hover:text-brutal-accent transition-colors">About</a>
            <a href="#work" className="brutal-text-sm hover:text-brutal-accent transition-colors">Work</a>
            <a href="#contact" className="brutal-text-sm hover:text-brutal-accent transition-colors">Contact</a>
          </div>
          <a href="https://calendar.app.google/qrGkexWFCbdPQGJG8" target="_blank" rel="noopener noreferrer" className="brutal-btn text-xs py-3 px-6">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        <div className="brutal-grid-bg absolute inset-0 opacity-20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 text-left">
              <div className="space-y-2 text-left">
                <p className="brutal-text-sm text-brutal-accent text-left">Product Engineer</p>
                <h1 className="brutal-heading-xl text-left">
                  MINGYE<br/>LI
                </h1>
              </div>

              <div className="space-y-4 text-left">
                <p className="brutal-text text-brutal-dark/80">
                  Hi, welcome to my product hub. I've been lucky to build alongside great teams through two <span className="bg-brutal-accent">AI PM internships</span>, a psycholinguistics research background, and hands-on <span className="bg-brutal-accent">model training</span> at the Chinese Academy of Sciences. I love turning messy AI potential into products people actually use and designing <span className="bg-brutal-accent">go-to-market</span> strategies that prioritize meaning and impact over vanity growth.
                </p>
                <p className="brutal-text text-brutal-dark/80">
                  Currently pursuing <span className="font-bold">Master in Software Management at Carnegie Mellon University</span>. Based in South Bay, San Francisco Area.
                </p>
                <p className="brutal-text text-brutal-dark/80">
                  Graduated from <span className="font-bold">University of Virginia</span> with Honor Degree in Bachelor of Psychology, double major in Computer Science.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                  <a href="#work" className="brutal-btn">
                    View Work
                  </a>
                  <a href="#contact" className="brutal-btn brutal-btn-outline">
                    Get In Touch
                  </a>
                </div>

                {/* Company Logos */}
                <div className="flex gap-3">
                  <img
                    src="/zoom_logo_new.png"
                    alt="Zoom"
                    className="w-12 h-12 object-contain rounded-sm"
                  />
                  <img
                    src="/Geely-Auto-Logo.jpg"
                    alt="Geely"
                    className="w-12 h-12 object-contain rounded-sm bg-white p-1"
                  />
                  <img
                    src="/CMU_logo.png"
                    alt="CMU"
                    className="w-12 h-12 object-contain rounded-sm"
                  />
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-4">
                {highlights.map((item) => (
                  <span 
                    key={item}
                    className="bg-brutal-black/10 px-3 py-1 text-xs font-semibold rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative group">
              <div className="brutal-border brutal-shadow-lg bg-brutal-white aspect-[3/4] max-w-md mx-auto lg:ml-auto relative overflow-hidden flex flex-col items-center justify-between p-6 transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-brutal-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-brutal-accent" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-brutal-accent transition-all duration-300 group-hover:rotate-45 group-hover:bg-brutal-black" />

                {/* Profile Image - centered in available space */}
                <div className="flex-1 flex items-center justify-center w-full">
                  <div
                    className="relative w-72 h-72 cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      src="/profile_pic.png"
                      alt="Profile photo of Ming Ye"
                      className={`w-72 h-72 object-cover rounded-full border-4 border-brutal-black transition-all duration-500 hover:scale-105 hover:border-brutal-accent hover:shadow-[0_0_0_4px_rgba(255,107,53,0.3)] absolute inset-0 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <img
                      src="/profile_pic_1.png"
                      alt="Profile photo of Ming Ye"
                      className={`w-72 h-72 object-cover rounded-full border-4 border-brutal-black transition-all duration-500 hover:scale-105 hover:border-brutal-accent hover:shadow-[0_0_0_4px_rgba(255,107,53,0.3)] absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* LinkedIn Bubble */}
                    <a
                      href="https://www.linkedin.com/in/shirley-mingye-li-3bb4461a3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute -bottom-4 -right-4 w-16 h-16 bg-brutal-black brutal-border flex items-center justify-center brutal-shadow-sm transition-all duration-500 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                    >
                      <svg
                        className="w-8 h-8 fill-brutal-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Shirley Description */}
                <div className="w-full text-left pb-8 transition-all duration-300 group-hover:translate-x-2 space-y-3">
                  <p className="brutal-mono text-xs leading-relaxed">
                    I go by Shirley, which sounds similar to my Chinese name 舍利 She-li, meaning strength, buoyancy, and incarnation after stumbles.
                  </p>
                  <p className="brutal-mono text-xs leading-relaxed hover:italic transition-all duration-300 cursor-default">
                    My ultimate weapons? Empathy, logic, and a knack for connecting people with ideas.
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 left-6 brutal-border bg-brutal-accent p-4 brutal-shadow-sm hidden lg:block transition-all duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="brutal-mono text-xs font-bold">Hover over<br/>my head!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative z-20 border-y-3 border-brutal-black bg-brutal-black text-brutal-white py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center">
                {["PRODUCT MANAGEMENT", "DATA ANALYSIS", "USER RESEARCH", "AI/ML PRODUCTS", "DESIGN THINKING"].map((text, j) => (
                  <span key={j} className="flex items-center">
                    <span className="brutal-text-sm px-8">{text}</span>
                    <span className="w-2 h-2 bg-brutal-accent" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-b-3 border-brutal-black">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="brutal-text-sm text-brutal-accent mb-4">About Me</p>
              <h2 className="brutal-heading-lg mb-8">
                DATA-DRIVEN<br/>PRODUCT<br/>THINKER
              </h2>
              
              {/* Experience */}
              <div className="space-y-3 mt-12">
                <p className="brutal-text-sm mb-4">Experience</p>
                {experiences.map((exp) => (
                  <div key={exp.company} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${exp.color}`} />
                    <span className="brutal-text font-semibold">{exp.company}</span>
                    <span className="brutal-text text-brutal-dark/60">— {exp.role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="brutal-text text-brutal-dark/80">
                Leading recent endeavors such as the development of a data analysis tool 
                for my last internship at ZOOM, I showcase my ability to spearhead projects 
                from inception to fruition.
              </p>
              <p className="brutal-text text-brutal-dark/80">
                By creating scalable systems, I ensure consistency and adaptability across 
                various platforms. My past experiences focus on <span className="font-bold text-brutal-accent">data-driven growth</span> in 
                software products.
              </p>
              
              {/* Skills */}
              <div className="pt-8">
                <p className="brutal-text-sm mb-4">Technologies & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="brutal-border bg-brutal-white px-4 py-2 brutal-text-sm brutal-shadow-sm hover:bg-brutal-black hover:text-brutal-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 bg-brutal-white">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="brutal-text-sm text-brutal-accent mb-4">Selected Work</p>
              <h2 className="brutal-heading-lg">CASE STUDIES</h2>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const isInternal = project.link.startsWith('/')
              const commonClasses = "group brutal-border bg-brutal-cream brutal-shadow hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all duration-150 cursor-pointer block"

              if (isInternal) {
                return (
                  <Link
                    key={project.id}
                    to={project.link}
                    className={commonClasses}
                  >
                    {renderProjectContent(project, index)}
                  </Link>
                )
              }

              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {renderProjectContent(project, index)}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Creative Design Section */}
      <section className="py-24 md:py-32 border-b-3 border-brutal-black bg-brutal-cream">
        <div className="px-6 md:px-12">
          <div className="mb-16">
            <p className="brutal-text-sm text-brutal-accent mb-4">Creative Work</p>
            <h2 className="brutal-heading-lg">CREATIVE DESIGN</h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2x2 Decision Tool */}
            <div className="brutal-border bg-brutal-white brutal-shadow">
              <div className="p-6 border-b-3 border-brutal-black">
                <h3 className="brutal-heading-md text-xl mb-2">2x2 Decision Helper</h3>
                <p className="brutal-text text-xs text-brutal-dark/70 leading-relaxed">
                  Smart AI tool for everyday decisions—workouts, movies, snacks
                </p>
              </div>
              <div className="aspect-video flex items-center justify-center bg-brutal-white relative">
                <img
                  src="/2x2_2.png"
                  alt="2x2 Decision Tool Interface"
                  className="w-full h-full object-cover"
                />
                {/* Google AI Studio Logo */}
                <div className="absolute bottom-4 right-4 bg-brutal-white px-2 py-1 brutal-border">
                  <img
                    src="/google_ai_studio_logo.png"
                    alt="Powered by Google AI Studio"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Beat Studio */}
            <a
              href="https://red-many-39158034.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-brutal-white brutal-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-150 cursor-pointer block"
            >
              <div className="p-6 border-b-3 border-brutal-black">
                <h3 className="brutal-heading-md text-xl mb-2">Beat Studio</h3>
                <p className="brutal-text text-xs text-brutal-dark/70 leading-relaxed">
                  Beginner-ready music production tool with intuitive interface
                </p>
              </div>
              <div className="aspect-video flex items-center justify-center bg-brutal-white relative">
                <img
                  src="/beats_1.png"
                  alt="Beat Studio Interface"
                  className="w-full h-full object-cover"
                />
                {/* Figma Logo */}
                <div className="absolute bottom-4 right-4 bg-brutal-white px-2 py-1 brutal-border">
                  <img
                    src="/figma_make_logo.png"
                    alt="Powered by Figma Make"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </a>

            {/* Brand Identity - Pith Logo Only */}
            <div className="brutal-border bg-brutal-white brutal-shadow">
              <div className="p-6 border-b-3 border-brutal-black">
                <h3 className="brutal-heading-md text-xl mb-2">Brand Identity</h3>
                <p className="brutal-text text-xs text-brutal-dark/70 leading-relaxed">
                  Minimalist logo exploring organic forms and geometric simplicity
                </p>
              </div>
              <div className="aspect-video flex items-center justify-center bg-brutal-white">
                <img
                  src="/logo-pith.png"
                  alt="Pith Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Great Power */}
            <div className="brutal-border bg-brutal-white brutal-shadow">
              <div className="p-6 border-b-3 border-brutal-black">
                <h3 className="brutal-heading-md text-xl mb-2">Great Power</h3>
                <p className="brutal-text text-xs text-brutal-dark/70 leading-relaxed">
                  Strategic simulation game with role play of different countries by LLMs
                </p>
              </div>
              <div className="aspect-video flex items-center justify-center bg-brutal-white relative">
                <img
                  src="/great_power.png"
                  alt="Great Power Game Interface"
                  className="w-full h-full object-cover"
                />
                {/* Qoder Logo */}
                <div className="absolute bottom-4 right-4 bg-brutal-white px-2 py-1 brutal-border">
                  <img
                    src="/qoder_logo.svg"
                    alt="Powered by Qoder"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-brutal-black text-brutal-white">
        <div className="px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="brutal-text-sm text-brutal-accent mb-4">Get In Touch</p>
            <h2 className="brutal-heading-xl mb-8">
              LET'S WORK<br/>TOGETHER
            </h2>
            <p className="brutal-text text-brutal-white/70 max-w-xl mx-auto mb-12">
              Interested in product management, data analysis, or building impactful 
              products together? I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="mailto:shirley3@andrew.cmu.edu"
                className="brutal-btn brutal-btn-accent w-full sm:w-auto"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/shirley-mingye-li-3bb4461a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-brutal-white text-brutal-black w-full sm:w-auto"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-brutal-white/20 bg-brutal-black text-brutal-white py-8">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="brutal-mono text-sm opacity-60">
              © 2024 Ming Ye. All rights reserved.
            </p>
            <p className="brutal-mono text-sm opacity-60">
              CMU · UVA · South Bay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
