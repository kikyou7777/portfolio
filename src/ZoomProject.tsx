import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ZoomProject() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const images = [
    { src: '/zoom.JPG', alt: 'At Zoom Headquarters' },
    { src: '/zoom_1.png', alt: 'Zoom AI Feature Screenshot 1' },
    { src: '/zoom_2.png', alt: 'Zoom AI Feature Screenshot 2' }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <div className="min-h-screen bg-brutal-cream text-brutal-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-cream border-b-3 border-brutal-black">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <Link to="/" className="brutal-heading-md text-2xl font-black tracking-tight">
            MING.
          </Link>
          <Link to="/" className="brutal-btn text-xs py-3 px-6">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Project Content */}
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#2D8CFF]" />
              <span className="brutal-text-sm text-brutal-accent">Product Management</span>
              <span className="brutal-mono text-sm opacity-60">2024</span>
            </div>
            <h1 className="brutal-heading-lg mb-6">
              ZOOM AI<br/>WRITING<br/>ASSISTANT
            </h1>
            <p className="brutal-text text-brutal-dark/80 max-w-3xl mb-6">
              Led the development of AI-powered writing features in Zoom Docs, enabling seamless content
              generation and collaboration for enterprise teams. Enhanced productivity and content quality
              through intelligent writing assistance integrated into Zoom's collaborative platform.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "B2B SaaS", "Data Analysis", "Product Strategy"].map((tag) => (
                <span key={tag} className="bg-brutal-black/10 px-3 py-2 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="brutal-border bg-brutal-black p-4 brutal-shadow-lg mb-16">
            <div className="relative brutal-border bg-brutal-white">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto max-h-[600px] object-contain"
              />

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button
                  onClick={prevImage}
                  className="w-16 h-16 brutal-border bg-[#2D8CFF] flex items-center justify-center brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-none transition-all pointer-events-auto"
                >
                  <svg className="w-8 h-8 fill-brutal-white" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="w-16 h-16 brutal-border bg-[#2D8CFF] flex items-center justify-center brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all pointer-events-auto"
                >
                  <svg className="w-8 h-8 fill-brutal-white" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="bg-brutal-cream p-4 mt-4 brutal-border">
              <div className="flex items-center justify-between">
                <span className="brutal-mono text-xs">
                  IMAGE {currentImageIndex + 1} / {images.length}
                </span>
                <div className="flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-8 h-8 brutal-border ${
                        currentImageIndex === index
                          ? 'bg-[#2D8CFF]'
                          : 'bg-brutal-white hover:bg-brutal-dark/10'
                      }`}
                    >
                      <span className="brutal-mono text-xs font-bold text-brutal-white">
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-12">
            {/* Overview */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">Product Overview</h2>
              <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                Owned the end-to-end product lifecycle (SDLC) for AI-powered features in Zoom Docs, specifically
                the <span className="font-bold text-[#2D8CFF]">smart formula generation</span> capability. This
                feature leverages large language models to automatically generate complex spreadsheet formulas,
                dramatically reducing the time users spend on data manipulation tasks.
              </p>
              <p className="brutal-text text-brutal-dark/70 leading-relaxed">
                As the AI Product Manager Intern, I led the complete product development cycle—from initial
                concept and UX design to ML prompt tuning and responsible AI monitoring—impacting <span className="font-bold">10M+ global users</span>.
              </p>
            </div>

            {/* Key Features */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="brutal-border bg-brutal-cream p-6">
                  <div className="w-12 h-12 bg-[#2D8CFF] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold mb-2 text-[#2D8CFF]">Smart Content Generation</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    AI-powered drafting and content suggestions that understand context and maintain
                    brand voice
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <div className="w-12 h-12 bg-[#2D8CFF] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold mb-2 text-[#2D8CFF]">Real-time Collaboration</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Seamless integration with Zoom's collaboration tools for team-based content creation
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <div className="w-12 h-12 bg-[#2D8CFF] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold mb-2 text-[#2D8CFF]">Enterprise Security</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Built with enterprise-grade security and compliance standards for sensitive business content
                  </p>
                </div>
              </div>
            </div>

            {/* My Role & Contributions */}
            <div className="brutal-border bg-[#2D8CFF] p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">My Role & Contributions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#2D8CFF]">Product Lifecycle Ownership</h3>
                  <ul className="space-y-2">
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Owned end-to-end SDLC for smart formula generation feature</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Built high-fidelity UX flows for AI suggestions interface</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Reduced task completion time by 65% through intelligent automation</span>
                    </li>
                  </ul>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#2D8CFF]">ML & AI Engineering</h3>
                  <ul className="space-y-2">
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Partnered with ML engineers to tune LLM prompts and ranking logic</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Evaluated output quality across edge cases and failure modes</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Implemented responsible AI monitoring and quality assurance</span>
                    </li>
                  </ul>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#2D8CFF]">Data Engineering & Analytics</h3>
                  <ul className="space-y-2">
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Created Databricks-based workflows with SQL/PySpark pipelines</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Built churn prediction model with 89% accuracy</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Developed anomaly detection system for usage evaluation</span>
                    </li>
                  </ul>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#2D8CFF]">User Research & Iteration</h3>
                  <ul className="space-y-2">
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Conducted 80+ user interviews to identify adoption blockers</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Identified top barrier through data analysis and user feedback</span>
                    </li>
                    <li className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>Drove simplified sign-on plan to improve feature accessibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact & Metrics */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">Impact & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="brutal-border bg-[#2D8CFF] p-6 mb-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-5xl font-black text-brutal-white">65%</p>
                  </div>
                  <p className="brutal-text text-sm font-bold leading-tight">Task Time Reduction</p>
                </div>
                <div className="text-center">
                  <div className="brutal-border bg-[#2D8CFF] p-6 mb-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-5xl font-black text-brutal-white">10M+</p>
                  </div>
                  <p className="brutal-text text-sm font-bold leading-tight">Global Users</p>
                </div>
                <div className="text-center">
                  <div className="brutal-border bg-[#2D8CFF] p-6 mb-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-5xl font-black text-brutal-white">80+</p>
                  </div>
                  <p className="brutal-text text-sm font-bold leading-tight">User Interviews</p>
                </div>
                <div className="text-center">
                  <div className="brutal-border bg-[#2D8CFF] p-6 mb-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-5xl font-black text-brutal-white">89%</p>
                  </div>
                  <p className="brutal-text text-sm font-bold leading-tight">Model Accuracy</p>
                </div>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#2D8CFF]"></span>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Databricks",
                    "SQL",
                    "PySpark",
                    "Python",
                    "LLM Prompting",
                    "Figma",
                    "Jira",
                    "Tableau"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#2D8CFF]/10 border-2 border-[#2D8CFF] px-3 py-1 brutal-text text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#2D8CFF]"></span>
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {[
                    "Enterprise AI product development lifecycle",
                    "Data-driven feature prioritization",
                    "Cross-functional team collaboration",
                    "B2B SaaS product metrics and analytics"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#2D8CFF] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Project Reflection */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow text-center">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Project Reflection</h2>
              <p className="brutal-text text-brutal-white/90 max-w-3xl mx-auto leading-relaxed">
                Owning the complete product lifecycle for Zoom's smart formula generation feature taught me the
                critical importance of balancing technical sophistication with user experience. Working directly
                with ML engineers on prompt tuning while simultaneously conducting 80+ user interviews showed me
                that successful AI products require both technical excellence and deep user empathy. Building the
                Databricks analytics infrastructure for responsible AI monitoring reinforced my belief that
                data-driven decision making and ethical AI practices must go hand in hand. This experience
                solidified my commitment to creating AI products that are not just powerful, but also accessible,
                reliable, and genuinely improve how 10M+ users work every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoomProject
