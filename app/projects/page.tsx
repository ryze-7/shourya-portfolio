'use client'

import { Navbar } from '@/components/navbar'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses using OpenAI API and WebSocket integration.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'WebSocket'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=AI+Chat+App',
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    tags: ['React', 'Supabase', 'Tailwind', 'TypeScript'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=Task+Dashboard',
  },
  {
    id: 4,
    title: 'Data Visualization Tool',
    description: 'Interactive dashboard for visualizing complex datasets with multiple chart types and filters.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=Data+Viz+Tool',
  },
  {
    id: 5,
    title: 'Mobile Weather App',
    description: 'Cross-platform weather application with real-time data, location services, and beautiful UI.',
    tags: ['React Native', 'TypeScript', 'Weather API'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=Weather+App',
  },
  {
    id: 6,
    title: 'API Authentication System',
    description: 'Secure JWT-based authentication system with role-based access control and OAuth integration.',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=Auth+System',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I've built and contributed to. Each represents my growth as a developer 
            and my passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-background overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-background border border-accent/30 text-accent rounded hover:border-accent transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-accent hover:text-emerald-400 transition-colors text-sm font-medium"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                  >
                    Code
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Want to collaborate?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-emerald-500 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
