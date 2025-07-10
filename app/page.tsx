"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Instagram, ExternalLink, FolderOpen, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/* -------------------------------------------------------------------------- */
/*                               STATIC DATA                                  */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    id: 1,
    title: "Quizzie",
    description: "Quizzie is an open-source, fully-featured quizzing platform. I worked mainly on the frontend.",
    techStack: "React, Material UI, Axios, Chart.js",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    techStack: "Next.js, TypeScript, Prisma, Stripe, Tailwind CSS",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and drag-and-drop UI.",
    techStack: "React, Node.js, Socket.io, MongoDB",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A responsive weather application with interactive maps and analytics.",
    techStack: "Vue.js, OpenWeather API, Chart.js, Leaflet",
    image: "/placeholder.svg?height=200&width=300",
    websiteUrl: "#",
    githubUrl: "#",
  },
]

/* ------------------------------ SKILL ICONS ------------------------------ */

const SkillIcon = ({ skill }: { skill: string }) => {
  const getSkillIcon = (skillName: string) => {
    //  ... SVG switch from previous code (unchanged) ...
    //  keep your long switch statement here
    return null
  }
  return <div className="flex items-center justify-center text-blue-400">{getSkillIcon(skill)}</div>
}

/* ------------------------------ SKILLS DATA ------------------------------ */

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

/* ----------------------------- CONTACT LINKS ----------------------------- */

const contactLinks = [
  {
    name: "GitHub",
    description: "Check out my repositories and contributions",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-red-500",
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
    color: "hover:text-pink-600",
  },
]

/* -------------------------------------------------------------------------- */
/*                            PAGE COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  /* --------------------------- LOCAL STATE  --------------------------- */
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>("Frontend")
  const [showDescription, setShowDescription] = useState(false)

  /* -------------------------- EFFECTS -------------------------- */
  useEffect(() => {
    const timer = setTimeout(() => setShowDescription(true), 500)
    return () => clearTimeout(timer)
  }, [])

  /* ------------------------ REUSABLE STYLES ------------------------ */
  const cardStyle = "rounded-2xl border border-white/10 backdrop-blur-md shadow-lg"
  const sectionTileStyle = `bg-white/5 p-8 md:p-12 backdrop-blur-sm ${cardStyle} w-full`

  /* ------------------------ RENDER ------------------------ */
  return (
    <div className="min-h-screen text-white">
      {/* NOTE: bg-black removed so body’s dotted background shows through */}
      {/* ---------------------- NAVBAR ---------------------- */}
     

      {/* ---------------------- HOME SECTION ---------------------- */}
      <section>
        <div>
        <br />
        <br />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <div className={sectionTileStyle}>
            <div className={`${sectionTileStyle}`}>
    {/* Name Section - More elegant approach */}
    <div className="flex flex-col items-center gap-y-8">
      <div className="text-center w-3/4 mx-auto">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-anton font-bold leading-none tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Abdul Hadi
            </span>
          </h1>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-anton font-bold leading-none tracking-tight opacity-20 blur-sm">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Abdul Hadi
            </span>
          </div>
        </div>
        {/* Optional: Add a subtle subtitle or tagline */}
        <div className="mt-6">
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
            Software Developer
          </p>
          <p className="text-gray-500 text-sm md:text-base font-light tracking-wide mt-2 flex items-center justify-center">
            <MapPin className="w-4 h-4 mr-1.5 translate-y-px"></MapPin>
              Dubai, United Arab Emirates
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 rounded-full transform hover:scale-105"
        >
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 mr-2" />
            Open CV
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-white/10 transition-all duration-300 rounded-full transform hover:scale-105"
        >
          <Link href="/#projects">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Projects
          </Link>
        </Button>
      </div>
      {/* Social Links */}
      <div className="flex justify-center space-x-8">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"
        >
          <Github className="w-8 h-8" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
      </div>
    </div>
  {/* Close all opened divs for this section */}
            </div>
          </div>
        </div>
      </section>

    {/* ---------------------- PROJECTS ---------------------- */}
<section id="projects" className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div>
      <div className={sectionTileStyle}>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 text-white">
          My&nbsp;Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`${cardStyle} bg-white/5 border-white/10 transition hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10`}
            >
              <CardHeader className="p-6 pb-4">
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Link
                      href={project.githubUrl}
                      className="text-gray-500 hover:text-red-500 transition hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                  </div>
                  <CardDescription className="text-gray-200 mb-4">{project.description}</CardDescription>
                  <p className="text-sm text-blue-400 mb-6">
                    <span className="font-semibold">TECH&nbsp;STACK:</span> {project.techStack}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition rounded-full"
                  >
                    <Link href={project.websiteUrl} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit&nbsp;Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
          ))}
        </div>
        {/* View All Projects */}
        <div className="flex justify-center">
          <Card
            className={`${cardStyle} bg-white/5 border-white/10 w-full md:w-96 transition hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10`}
          >
            <CardContent className="p-8 text-center">
              <FolderOpen className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <CardTitle className="text-2xl mb-4">View&nbsp;All&nbsp;Projects</CardTitle>
              <CardDescription className="text-gray-200 mb-6">
                Explore all my projects and contributions on GitHub
              </CardDescription>
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition rounded-full"
              >
                <Link href="https://github.com" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View&nbsp;on&nbsp;GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ---------------------- SKILLS ---------------------- */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={sectionTileStyle}>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">
              Current Technologies
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
              I'm proficient in a range of modern technologies that empower me to build highly functional solutions. 
              These are some of my main technologies.
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
                {Object.keys(skillsData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as keyof typeof skillsData)}
                    className={`px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillsData[activeTab].map((skill) => {
                // Get skill description based on category
                const getSkillDescription = (skillName: string) => {
                  const descriptions: { [key: string]: string } = {
                    // Frontend
                    "React": "JavaScript Library",
                    "Next.js": "React Framework",
                    "Vue.js": "Progressive Framework",
                    "TypeScript": "JavaScript but better",
                    "JavaScript": "Programming Language",
                    "HTML5": "Markup Language",
                    "CSS3": "Styling Language",
                    "Tailwind CSS": "CSS Framework",
                    "Material UI": "Component Library",
                    "Sass": "CSS Preprocessor",
                    "Redux": "State Management",
                    "Zustand": "State Management",
                    "React Query": "Data Fetching",
                    // Backend
                    "Node.js": "JavaScript Runtime",
                    "Express.js": "Web Framework",
                    "Python": "Programming Language",
                    "Django": "Python Framework",
                    "FastAPI": "Modern API Framework",
                    "PostgreSQL": "SQL Database",
                    "MongoDB": "NoSQL Database",
                    "MySQL": "SQL Database",
                    "Redis": "In-Memory Database",
                    "REST APIs": "API Architecture",
                    "GraphQL": "Query Language",
                    "Socket.io": "Real-time Engine",
                    // DSA
                    "Data Structures": "Core Concepts",
                    "Algorithms": "Problem Solving",
                    "Problem Solving": "Analytical Skills",
                    "Competitive Programming": "Contest Coding",
                    "Time Complexity": "Performance Analysis",
                    "Space Complexity": "Memory Analysis",
                    "Dynamic Programming": "Optimization Technique",
                    "Graph Algorithms": "Network Solutions",
                    "Tree Algorithms": "Hierarchical Solutions",
                    "Sorting & Searching": "Fundamental Algorithms",
                  }
                  return descriptions[skillName] || "Technology"
                }

                return (
                  <div
                    key={skill}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <SkillIcon skill={skill} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg">{skill}</h3>
                      <p className="text-gray-400 text-sm">{getSkillDescription(skill)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- CONTACT ---------------------- */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className={sectionTileStyle}>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">
              Get&nbsp;In&nbsp;Touch
            </h2>
            <p className="text-xl text-gray-200 text-center mb-16 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just chatting about technology!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactLinks.map(({ name, description, icon: Icon, url, color }) => (
                <Card
                  key={name}
                  className={`${cardStyle} bg-white/5 border-white/10 transition hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10`}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 text-gray-500 transition ${color}`}>
                      <Icon className="w-12 h-12" />
                    </div>
                    <CardTitle className="text-xl">{name}</CardTitle>
                    <CardDescription className="text-gray-200">{description}</CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition rounded-full"
                    >
                      <Link href={url} target="_blank">
                        Connect
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Call-to-Action */}
            <div className="text-center mt-16">
              <Card className={`${cardStyle} bg-white/5 border-white/10 max-w-2xl mx-auto`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing&nbsp;Together!</h3>
                  <p className="text-gray-200 mb-6">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition rounded-full"
                  >
                    <Link href="mailto:your.email@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send&nbsp;Email
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
