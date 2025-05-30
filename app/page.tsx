"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ExternalLink, Mail, Instagram, FolderOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Quizzie",
    description:
      "Quizzie is an open source, fully professional quizzing platform. It makes it very easy to create and give quizzes. I worked mainly on the frontend part.",
    techStack: "React, Material UI, Axios, ChartsJS, and many more libraries.",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with scalability and performance in mind.",
    techStack: "Next.js, TypeScript, Prisma, PostgreSQL, Stripe, Tailwind CSS.",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    techStack: "React, Node.js, Socket.io, MongoDB, Express, Redux Toolkit.",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics with beautiful visualizations.",
    techStack: "Vue.js, OpenWeather API, Chart.js, Leaflet, Vuetify.",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
]

const skillsData = {
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Sass",
    "Redux",
    "Zustand",
    "React Query",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "REST APIs",
    "GraphQL",
    "Socket.io",
  ],
  DSA: [
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "Competitive Programming",
    "Time Complexity",
    "Space Complexity",
    "Dynamic Programming",
    "Graph Algorithms",
    "Tree Algorithms",
    "Sorting & Searching",
  ],
}

const contactLinks = [
  {
    name: "GitHub",
    description: "Check out my repositories and contributions",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-gray-200",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    name: "Gmail",
    description: "Send me an email",
    icon: Mail,
    url: "mailto:your.email@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "Instagram",
    description: "Follow my journey",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-pink-400",
  },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>("Frontend")
  const [showDescription, setShowDescription] = useState(false) // New state for description visibility

  useEffect(() => {
    // Set a timeout to show the description after 500ms
    const timer = setTimeout(() => {
      setShowDescription(true)
    }, 500)

    return () => clearTimeout(timer) // Clean up the timer
  }, []) // Empty dependency array means this runs once on mount

  // Consistent curved border style for all tiles
  const cardStyle = "rounded-2xl border border-white/10 backdrop-blur-md shadow-lg"
  const sectionTileStyle = `bg-white/5 p-8 md:p-12 backdrop-blur-sm ${cardStyle} w-full`

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-xl border-b border-white/10 z-50 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <div className="flex justify-center items-center">
            <div className="flex space-x-8">
              <Link
                href="#home"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="#projects"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-20 min-h-screen relative overflow-hidden"
        // Removed custom background, will use global bg-black
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16 w-3/4 mx-auto">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent leading-tight">
                Abdul Hadi
              </h1>
              <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-clip-text text-transparent leading-tight">
                Shafeer
              </h1>
            </div>
          </div>

          {/* About Section */}
          <div
            className={`max-w-4xl mx-auto transform transition-all duration-700 ${
              showDescription ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className={`${sectionTileStyle}`}>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-8">
                I am currently a 1st year student in Amity University, Noida. From very early on in my life, I have been
                interested in technology and computers. Hence, I am currently pursuing this interest as a Computer
                Application student.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-12">
                My technical interests know no bounds! I am good at Frontend Development, Competitive Programming, also
                experienced in App Development and Backend Development.
              </p>

              {/* CV Button */}
              <div className="text-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
                >
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open CV
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-start space-x-6">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-8 h-8" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`${sectionTileStyle}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className={`bg-white/5 border-white/10 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 ${cardStyle}`}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-6 h-6" />
                      </Link>
                    </div>
                    <CardDescription className="text-gray-200 mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <p className="text-sm text-blue-400 mb-6">
                      <span className="font-semibold">TECH STACK:</span> {project.techStack}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
                    >
                      <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Projects Card */}
            <div className="flex justify-center">
              <Card
                className={`bg-white/5 border-white/10 transition-all duration-300 hover:transform hover:scale-105 w-full md:w-96 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 ${cardStyle}`}
              >
                <CardContent className="p-8 text-center">
                  <FolderOpen className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                  <CardTitle className="text-2xl text-white mb-4">View All Projects</CardTitle>
                  <CardDescription className="text-gray-200 mb-6">
                    Explore all my projects and contributions on GitHub
                  </CardDescription>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
                  >
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`${sectionTileStyle}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Skills
            </h2>

            <Card className={`bg-white/5 border-white/10 backdrop-blur-sm ${cardStyle}`}>
              {/* Tab Navigation */}
              <div className="flex border-b border-white/10">
                {Object.keys(skillsData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as keyof typeof skillsData)}
                    className={`flex-1 px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400 bg-white/5"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillsData[activeTab].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/5 text-white hover:bg-white/10 transition-all duration-300 p-3 text-center justify-center text-sm border border-white/10 hover:border-white/20 hover:scale-105 rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`${sectionTileStyle}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-200 text-center mb-16 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactLinks.map((contact) => {
                const IconComponent = contact.icon
                return (
                  <Card
                    key={contact.name}
                    className={`bg-white/5 border-white/10 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/10 ${cardStyle}`}
                  >
                    <CardHeader className="text-center">
                      <div className={`mx-auto mb-4 text-gray-500 transition-all duration-300 ${contact.color}`}>
                        <IconComponent className="w-12 h-12" />
                      </div>
                      <CardTitle className="text-xl text-white">{contact.name}</CardTitle>
                      <CardDescription className="text-gray-200">{contact.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 rounded-full"
                      >
                        <Link href={contact.url} target="_blank" rel="noopener noreferrer">
                          Connect
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-16">
              <Card className={`bg-white/5 border-white/10 max-w-2xl mx-auto backdrop-blur-sm ${cardStyle}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together!</h3>
                  <p className="text-gray-200 mb-6">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you. Feel free to reach out through any of the platforms above.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
                  >
                    <Link href="mailto:your.email@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
