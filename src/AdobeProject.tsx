import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AdobeProject() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
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
              <div className="w-3 h-3 bg-[#FF6B35]" />
              <span className="brutal-text-sm text-brutal-accent">Product Strategy</span>
              <span className="brutal-mono text-sm opacity-60">2025</span>
            </div>
            <h1 className="brutal-heading-lg mb-6">
              ADOBE LLM<br/>OPTIMIZER<br/>GTM STRATEGY
            </h1>
            <p className="brutal-text text-brutal-dark/80 max-w-3xl">
              Go-to-market proposal for Adobe's LLM Optimizer launch in Q3 2025. Developed market positioning,
              pricing strategy, and customer acquisition plan for enterprise clients.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["GTM Strategy", "LLM", "Enterprise", "Market Research"].map((tag) => (
                <span key={tag} className="bg-brutal-black/10 px-3 py-2 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Custom Video Player */}
          <div className="brutal-border bg-brutal-black p-4 brutal-shadow-lg mb-16">
            {/* Video Display */}
            <div className="relative aspect-video bg-brutal-dark mb-4 brutal-border overflow-hidden">
              <video
                ref={videoRef}
                src="/Adobe.MOV"
                className="w-full h-full object-contain"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
              />

              {/* Play/Pause Overlay */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-brutal-black/30 hover:bg-brutal-black/50 transition-colors cursor-pointer"
                >
                  <div className="w-24 h-24 brutal-border bg-[#FF6B35] flex items-center justify-center brutal-shadow-sm hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                    <svg className="w-12 h-12 fill-brutal-white ml-2" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>

            {/* Custom Controls */}
            <div className="bg-brutal-cream p-4 brutal-border">
              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-3 bg-brutal-dark/20 brutal-border appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${(currentTime / duration) * 100}%, rgba(0,0,0,0.1) ${(currentTime / duration) * 100}%, rgba(0,0,0,0.1) 100%)`
                  }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 brutal-border bg-brutal-white hover:bg-[#FF6B35] hover:text-brutal-white transition-colors flex items-center justify-center brutal-shadow-sm"
                  >
                    {isPlaying ? (
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-current" />
                        <div className="w-1 h-4 bg-current" />
                      </div>
                    ) : (
                      <svg className="w-5 h-5 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>

                  {/* Time Display */}
                  <span className="brutal-mono text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Volume Icon (Decorative) */}
                <div className="w-10 h-10 brutal-border bg-brutal-white flex items-center justify-center">
                  <svg className="w-5 h-5 fill-brutal-black" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Product Overview */}
          <div className="space-y-12">
            {/* What is LLM Optimizer */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">What is Adobe LLM Optimizer?</h2>
              <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                Adobe LLM Optimizer is a groundbreaking analytics and optimization platform designed for the AI-first search era.
                It measures and enhances brand visibility in AI-generated answers across major platforms like ChatGPT, Perplexity,
                Copilot, and other AI answer engines.
              </p>
              <p className="brutal-text text-brutal-dark/70 leading-relaxed">
                Unlike traditional SEO that focuses on link authority, LLM optimization prioritizes brand presence,
                citations, and sentiment in AI responses—helping brands win the new battleground of AI-powered search.
              </p>
            </div>

            {/* Key Features */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="brutal-border bg-brutal-cream p-4">
                  <h3 className="brutal-text font-bold mb-2 text-[#FF6B35]">Brand Tracking</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Monitor mentions, citations, sentiment, and positioning across AI platforms
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-4">
                  <h3 className="brutal-text font-bold mb-2 text-[#FF6B35]">Analytics Dashboard</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Comprehensive dashboards for brand presence and agentic traffic analysis
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-4">
                  <h3 className="brutal-text font-bold mb-2 text-[#FF6B35]">Optimization Engine</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Actionable insights for onsite and offsite content optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Optimization Strategies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF6B35]"></span>
                  Onsite Optimization
                </h2>
                <ul className="space-y-3">
                  {[
                    "Refresh content regularly",
                    "Use structured headers",
                    "Add comprehensive FAQ sections",
                    "Ensure technical accessibility"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#FF6B35] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF6B35]"></span>
                  Offsite Optimization
                </h2>
                <ul className="space-y-3">
                  {[
                    "Engage on Wikipedia, Reddit, Quora",
                    "Collaborate with affiliate publishers",
                    "Create social media & YouTube content",
                    "Secure media coverage"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#FF6B35] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="brutal-border bg-[#FF6B35] p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Tracking Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Mentions Frequency",
                  "Citation Quality",
                  "Brand Sentiment",
                  "Visibility Score",
                  "Agentic Traffic"
                ].map((metric) => (
                  <div key={metric} className="brutal-border bg-brutal-white p-4 text-center">
                    <p className="brutal-mono text-xs font-bold">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow text-center">
              <h2 className="brutal-text text-xl font-bold mb-6">Optimization Approach</h2>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {["ANALYZE", "PLAN", "ACT", "ADAPT"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="brutal-border bg-[#FF6B35] px-6 py-3">
                      <span className="brutal-text font-bold text-brutal-white">{step}</span>
                    </div>
                    {index < 3 && <span className="text-2xl text-brutal-dark/30">→</span>}
                  </div>
                ))}
              </div>
              <p className="brutal-text text-sm text-brutal-dark/60 mt-6 italic">
                Continuous cycle for improving AI search visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdobeProject
