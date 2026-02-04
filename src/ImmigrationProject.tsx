import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function ImmigrationProject() {
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
              <div className="w-3 h-3 bg-[#E97627]" />
              <span className="brutal-text-sm text-brutal-accent">Data Visualization & Social Impact</span>
              <span className="brutal-mono text-sm opacity-60">2023</span>
            </div>
            <h1 className="brutal-heading-lg mb-6">
              ADVOCATING FOR<br/>IMMIGRATION<br/>RIGHTS
            </h1>
            <p className="brutal-text text-brutal-dark/80 max-w-3xl">
              Data-driven analysis of H1-B visa sponsorships, examining demographic and geographic patterns
              to advocate for equitable immigration policies. Presented at the Virginia Immigration Rights
              Conference, bringing together insights from criminal justice research and immigration policy analysis.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Tableau", "Social Impact", "Research", "Criminal Justice"].map((tag) => (
                <span key={tag} className="bg-brutal-black/10 px-3 py-2 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tableau Dashboard Embed */}
          <div className="brutal-border bg-brutal-black p-4 brutal-shadow-lg mb-16">
            <div className="brutal-border bg-brutal-white">
              <iframe
                src="https://public.tableau.com/views/BuildingTrustAcrossBorders/Dashboard1?:embed=y&:display_count=yes&:showVizHome=no"
                className="w-full h-[800px]"
                title="Building Trust Across Borders - Immigration Data Visualization"
              />
            </div>
            <div className="bg-brutal-cream p-4 mt-4 brutal-border">
              <div className="flex items-center justify-between">
                <span className="brutal-mono text-xs">Interactive Tableau Dashboard</span>
                <a
                  href="https://public.tableau.com/app/profile/mingye.li4776/viz/BuildingTrustAcrossBorders/Dashboard1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-[#E97627] text-brutal-white text-xs py-2 px-4 hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  VIEW ON TABLEAU
                </a>
              </div>
            </div>
          </div>

          {/* Research Journey */}
          <div className="space-y-12">
            {/* Oxford Connection */}
            <div className="brutal-border bg-[#E97627] p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">From Criminal Justice to Immigration Rights</h2>
              <div className="brutal-border bg-brutal-white p-6">
                <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                  My journey into immigration rights advocacy began with criminal justice research at the
                  <span className="font-bold text-[#E97627]"> University of Oxford</span>. While studying the
                  intersections of law, policy, and social equity, I became deeply interested in how systemic
                  barriers affect marginalized communities—particularly immigrant populations navigating complex
                  legal frameworks.
                </p>
                <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                  This research experience revealed patterns of institutional inequity that transcended borders,
                  sparking my curiosity about immigration policy in the United States. The methodological rigor
                  and social justice lens I developed at Oxford became the foundation for my subsequent work.
                </p>
                <p className="brutal-text text-brutal-dark/70 leading-relaxed">
                  The insights from my criminal justice research caught the attention of
                  <span className="font-bold text-[#E97627]"> University of Virginia Philanthropy</span>, which
                  led to an extraordinary opportunity: collaborating with UVA School of Law and Oxford Faculty of
                  Law to present data-driven immigration research at the Virginia Immigration Rights Conference.
                  This partnership united academic rigor with practical advocacy, using data visualization to make
                  complex immigration patterns accessible to policymakers and advocates.
                </p>
              </div>
            </div>

            {/* Project Overview */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">Research Overview</h2>
              <p className="brutal-text text-brutal-dark/80 leading-relaxed mb-4">
                This project analyzes H1-B visa sponsorship data to uncover demographic and geographic correlations
                that impact immigrant workers. By visualizing patterns in visa approvals, employer sponsorships,
                and regional disparities, the research aims to inform policy discussions and advocate for more
                equitable immigration practices.
              </p>
              <p className="brutal-text text-brutal-dark/70 leading-relaxed">
                The interactive Tableau dashboard enables stakeholders to explore the data dynamically, revealing
                insights about which communities face the greatest barriers and where systemic reforms are most needed.
              </p>
            </div>

            {/* Key Findings */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Key Research Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="brutal-border bg-brutal-cream p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#E97627]">Geographic Patterns</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Analysis of H1-B sponsorship distribution across states and metropolitan areas,
                    revealing regional disparities in opportunity access
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#E97627]">Demographic Analysis</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Examination of sponsorship patterns across different demographic groups and
                    employment sectors
                  </p>
                </div>
                <div className="brutal-border bg-brutal-cream p-6">
                  <h3 className="brutal-text font-bold mb-3 text-[#E97627]">Policy Implications</h3>
                  <p className="brutal-text text-sm text-brutal-dark/70">
                    Data-driven recommendations for immigration policy reform to promote equity
                    and opportunity
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Presentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#E97627]"></span>
                  Conference Impact
                </h2>
                <ul className="space-y-3">
                  {[
                    "Presented at Virginia Immigration Rights Conference",
                    "Collaboration between UVA School of Law & Oxford Faculty of Law",
                    "Engaged with policymakers and immigration advocates",
                    "Data-driven approach to policy reform discussions"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#E97627] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
                <h2 className="brutal-text text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#E97627]"></span>
                  Research Methods
                </h2>
                <ul className="space-y-3">
                  {[
                    "Large-scale H1-B visa data analysis",
                    "Interactive Tableau visualizations",
                    "Statistical correlation studies",
                    "Comparative policy research framework"
                  ].map((item) => (
                    <li key={item} className="brutal-text text-sm text-brutal-dark/70 flex items-start gap-2">
                      <span className="text-[#E97627] mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Partnerships */}
            <div className="brutal-border bg-brutal-white p-8 brutal-shadow">
              <h2 className="brutal-text text-xl font-bold mb-6">Academic Partnerships</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 brutal-border bg-brutal-cream">
                  <div className="w-16 h-16 bg-[#E97627] mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold text-[#E97627]">University of Oxford</h3>
                  <p className="brutal-mono text-xs mt-2">Criminal Justice Research</p>
                </div>
                <div className="text-center p-6 brutal-border bg-brutal-cream">
                  <div className="w-16 h-16 bg-[#E97627] mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold text-[#E97627]">UVA School of Law</h3>
                  <p className="brutal-mono text-xs mt-2">Immigration Rights Conference</p>
                </div>
                <div className="text-center p-6 brutal-border bg-brutal-cream">
                  <div className="w-16 h-16 bg-[#E97627] mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 fill-brutal-white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <h3 className="brutal-text font-bold text-[#E97627]">UVA Philanthropy</h3>
                  <p className="brutal-mono text-xs mt-2">Research Sponsor</p>
                </div>
              </div>
            </div>

            {/* Reflection */}
            <div className="brutal-border bg-brutal-black p-8 brutal-shadow text-center">
              <h2 className="brutal-text text-xl font-bold mb-6 text-brutal-white">Project Reflection</h2>
              <p className="brutal-text text-brutal-white/90 max-w-3xl mx-auto leading-relaxed">
                This project represents the convergence of academic research, data visualization, and social advocacy.
                Starting from criminal justice research at Oxford and evolving into immigration rights advocacy at UVA,
                it demonstrated how rigorous data analysis can illuminate systemic inequities and inform meaningful
                policy change. The opportunity to present at a conference uniting two prestigious law schools reinforced
                my commitment to using data and technology as tools for social justice and equitable policy reform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImmigrationProject
