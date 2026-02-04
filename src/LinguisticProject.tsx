import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function LinguisticProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <div className="w-3 h-3 bg-[#A435F0]" />
              <span className="brutal-text-sm text-brutal-accent">Research</span>
              <span className="brutal-mono text-sm opacity-60">2024</span>
            </div>
            <h1 className="brutal-heading-lg mb-6">
              LINGUISTIC<br/>SYNCHRONY &<br/>WELL-BEING
            </h1>
            <p className="brutal-text text-brutal-dark/80 max-w-3xl">
              Investigated how language adaptation affects short-term psychological outcomes in online communication.
              Analyzed linguistic patterns and their correlation with mood and social connection.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Psycholinguistics", "NLP", "Behavioral Research", "Data Analysis"].map((tag) => (
                <span key={tag} className="bg-brutal-black/10 px-3 py-2 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="brutal-border bg-brutal-black p-4 brutal-shadow-lg mb-16">
            <div className="brutal-border bg-brutal-white">
              <iframe
                src="/linguistic_slides.pdf"
                className="w-full h-[800px]"
                title="Linguistic Synchrony Research Slides"
              />
            </div>
            <div className="bg-brutal-cream p-4 mt-4 brutal-border">
              <div className="flex items-center justify-between">
                <span className="brutal-mono text-xs">linguistic_slides.pdf</span>
                <a
                  href="/linguistic_slides.pdf"
                  download
                  className="brutal-btn bg-[#A435F0] text-brutal-white text-xs py-2 px-4 hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  DOWNLOAD PDF
                </a>
              </div>
            </div>
          </div>

          {/* Research Details */}
          <div className="space-y-12">
            {/* Research Overview */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">Research Overview</h2>
              <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                This study investigates the relationship between linguistic synchrony—the phenomenon where
                conversational partners adapt their language patterns to match each other—and short-term
                psychological well-being in online communication contexts.
              </p>
              <p className="brutal-text text-brutal-dark/70 leading-relaxed">
                Using natural language processing techniques and behavioral analysis, we examined how linguistic
                adaptation correlates with measures of mood, social connection, and overall well-being in
                digital conversations.
              </p>
            </div>

            {/* Key Findings */}
            <div className="brutal-border bg-[#A435F0] p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Key Findings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#A435F0]">Linguistic Patterns</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Identified distinct patterns of language adaptation in online conversations and their
                    correlation with conversational outcomes
                  </p>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#A435F0]">Psychological Impact</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Measured significant relationships between linguistic synchrony levels and self-reported
                    mood and social connection metrics
                  </p>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#A435F0]">NLP Techniques</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Applied computational linguistic methods to quantify synchrony across multiple
                    linguistic dimensions
                  </p>
                </div>
                <div className="brutal-border bg-brutal-white p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#A435F0]">Data Analysis</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Analyzed large-scale conversation datasets using statistical modeling and
                    machine learning approaches
                  </p>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#A435F0]"></span>
                  Research Methods
                </h2>
                <ul className="space-y-3">
                  {[
                    "Corpus analysis of online conversations",
                    "NLP-based linguistic feature extraction",
                    "Survey-based well-being assessment",
                    "Statistical correlation analysis"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#A435F0] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#A435F0]"></span>
                  Tools & Technologies
                </h2>
                <ul className="space-y-3">
                  {[
                    "Python (NLTK, spaCy, scikit-learn)",
                    "R (statistical analysis)",
                    "Linguistic Inquiry and Word Count (LIWC)",
                    "Survey design & analysis tools"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#A435F0] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Implications */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Research Implications</h2>
              <div className="space-y-4">
                <div className="brutal-border bg-brutal-cream p-6">
                  <p className="brutal-text text-sm text-brutal-dark/80 leading-relaxed">
                    <span className="font-bold text-[#A435F0]">Digital Communication:</span> Understanding
                    linguistic synchrony can inform the design of better online communication platforms that
                    promote positive social interactions and mental well-being.
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <p className="brutal-text text-sm text-brutal-dark/80 leading-relaxed">
                    <span className="font-bold text-[#A435F0]">Mental Health:</span> Insights into the
                    relationship between language patterns and psychological outcomes can support development
                    of interventions for online mental health support.
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <p className="brutal-text text-sm text-brutal-dark/80 leading-relaxed">
                    <span className="font-bold text-[#A435F0]">AI & NLP:</span> Findings contribute to
                    computational models of human conversation and can enhance conversational AI systems
                    to be more empathetic and contextually aware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinguisticProject
