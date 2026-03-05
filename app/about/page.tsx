'use client'

import { Navbar } from '@/components/navbar'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-lg text-accent font-mono">Full-stack developer & tech enthusiast</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Who I Am</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                I love building intuitive, performant applications that solve real-world problems. My journey 
                in tech started with curiosity about how things work, and it's evolved into a career dedicated 
                to creating meaningful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm constantly learning new technologies, contributing to open-source projects, 
                and sharing my knowledge through writing and mentoring. I believe in the power of continuous 
                improvement and collaboration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">My Experience</h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Senior Developer</h3>
                  <p className="text-sm text-accent font-mono mb-2">2022 - Present</p>
                  <p className="text-muted-foreground text-sm">
                    Led development of scalable web applications, mentored junior developers, 
                    and architected backend systems handling millions of requests daily.
                  </p>
                </div>
                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Full-Stack Developer</h3>
                  <p className="text-sm text-accent font-mono mb-2">2020 - 2022</p>
                  <p className="text-muted-foreground text-sm">
                    Built full-stack features from design to deployment. Worked with React, Node.js, 
                    and various databases. Improved application performance by 40%.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Junior Developer</h3>
                  <p className="text-sm text-accent font-mono mb-2">2019 - 2020</p>
                  <p className="text-muted-foreground text-sm">
                    Started my career working on frontend features and bug fixes. Learned best practices 
                    and gained experience working in a team environment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What I'm Passionate About</h2>
              <ul className="space-y-3">
                {[
                  'Building scalable, maintainable web applications',
                  'Creating intuitive user interfaces and experiences',
                  'Open-source contributions and community building',
                  'Teaching and mentoring the next generation of developers',
                  'Exploring new technologies and best practices',
                  'Writing technical articles and sharing knowledge',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-accent mb-2">Frontend</p>
                  <p className="text-xs text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS, Vue.js
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent mb-2">Backend</p>
                  <p className="text-xs text-muted-foreground">
                    Node.js, Express, Python, PostgreSQL, MongoDB
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent mb-2">DevOps</p>
                  <p className="text-xs text-muted-foreground">
                    Docker, AWS, CI/CD, Git, Linux
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Computer Science</p>
                  <p className="text-xs text-accent font-mono">University Name</p>
                  <p className="text-xs text-muted-foreground">2016 - 2019</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent mb-1">50+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent mb-1">5+</p>
                <p className="text-xs text-muted-foreground">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-emerald-500 transition-colors"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </div>
  )
}
