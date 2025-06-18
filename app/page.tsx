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

// Skill icons component
const SkillIcon = ({ skill }: { skill: string }) => {
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case "react":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
          </svg>
        )
      case "next.js":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.956 1.669 13.94.394 13.114.134 12.208.026 11.572 0z" />
          </svg>
        )
      case "vue.js":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
          </svg>
        )
      case "typescript":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        )
      case "javascript":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
        )
      case "html5":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        )
      case "css3":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
        )
      case "tailwind css":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        )
      case "material ui":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.465v3.465l9-5.196V2.475L12 7.67 0 2.475zM24 7.67v10.39l-3 1.733V12.86l-6 3.465-6-3.465v3.465l9 5.196V12.86l3-1.733z" />
          </svg>
        )
      case "sass":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM10.067,16.017c-.17.63-.315,1.209-.9,1.209-.585,0-.945-.9-.945-1.774a5.426,5.426,0,0,1,.315-1.774,10.727,10.727,0,0,1,.9-1.98c.315-.585.63-.945.945-.945s.585.36.585.9A10.727,10.727,0,0,1,10.067,16.017ZM17.6,8.819c-.9,1.575-2.25,2.925-3.6,4.05a18.7,18.7,0,0,1-3.825,2.7c-.9.45-1.8.675-2.7.675a3.6,3.6,0,0,1-2.7-1.125,3.6,3.6,0,0,1-1.125-2.7,7.2,7.2,0,0,1,2.025-4.95A10.8,10.8,0,0,1,9.6,5.219a7.2,7.2,0,0,1,4.95-2.025,3.6,3.6,0,0,1,2.7,1.125,3.6,3.6,0,0,1,1.125,2.7A7.2,7.2,0,0,1,17.6,8.819Z" />
          </svg>
        )
      case "redux":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061c-.923.047-1.66.84-1.614 1.755.047.465.236.87.556 1.188-1.176 2.324-2.93 4.04-5.614 5.566-1.8 1.03-3.738 1.387-5.665 1.097-1.614-.24-2.88-1.01-3.75-2.277C-1.043 18.1-.71 15.963.649 14.22c.898-1.16 2.206-1.85 3.037-2.138-.075-.39-.112-.976-.112-1.274 0-.914.047-1.828.047-1.828C1.523 9.28.424 10.34.424 12.107c0 3.27 2.322 5.708 5.614 6.832.705.24 2.577.24 3.738-.045 3.131-.705 5.736-2.277 7.539-4.648.947-1.274 1.674-2.277 1.319-3.742zm-7.539-1.097c.923.047 1.66-.84 1.614-1.754-.047-.915-.796-1.648-1.709-1.648h-.061c-.923.047-1.66.84-1.614 1.754.047.915.796 1.648 1.77 1.648zm8.486-8.486c-2.089-2.324-5.17-3.6-8.972-3.6-6.621 0-12.03 4.648-12.03 10.356 0 2.277.898 4.367 2.322 5.708.236.225.236.465 0 .69-.236.225-.472.465-.472.915 0 .45.236.915.708 1.125.236.105.472.105.708 0 .472-.225.708-.69.708-1.125 0-.45-.236-.69-.472-.915-.236-.225-.236-.465 0-.69 1.424-1.341 2.322-3.431 2.322-5.708 0-5.708-5.409-10.356-12.03-10.356-3.802 0-6.883 1.276-8.972 3.6C.424 6.832-.288 8.922-.288 11.199c0 4.648 3.131 8.486 7.539 9.516.705.165 1.424.24 2.089.24 3.131 0 6.262-1.341 8.486-3.6 2.089-2.324 2.813-4.414 2.813-6.691 0-2.277-.724-4.367-2.813-6.691z" />
          </svg>
        )
      case "zustand":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      case "react query":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      case "node.js":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
          </svg>
        )
      case "express.js":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667a6.046 6.046 0 01-.54-3.95zm11.115-2.956C10.75 6.539 9.301 5.48 7.304 5.928a5.317 5.317 0 00-4.196 4.18L8.15 8.623c1.6 0 2.967 0 2.967-.003z" />
          </svg>
        )
      case "python":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
          </svg>
        )
      case "django":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
          </svg>
        )
      case "fastapi":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      case "postgresql":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.111 5.866c-.72-1.233-1.154-1.233-1.154-1.233s-.433 0-1.154 1.233c-.72 1.233-.72 3.233 0 4.466.72 1.233 1.154 1.233 1.154 1.233s.433 0 1.154-1.233c.72-1.233.72-3.233 0-4.466zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      case "mongodb":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.51-9.027.417-.297 4.604-3.515 4.292-5.418z" />
          </svg>
        )
      case "mysql":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.002c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.966.378 3.85.421 5.53zM24 18.695h-2.95v-5.53h.905v4.85h2.045v.68zm-12.7-5.53h.918v5.53h-.918v-5.53zm3.973 0c.967 0 1.597.467 1.597 1.37 0 .896-.63 1.336-1.597 1.336h-.918v2.824h-.918v-5.53h1.836zm-.918 2.027h.918c.47 0 .679-.244.679-.657 0-.413-.209-.69-.679-.69h-.918v1.347z" />
          </svg>
        )
      case "redis":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 2.661l.54.997-1.797.644-.54-.997L10.5 2.661zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644zm2.077.702l.54.997-1.797.644-.54-.997 1.797-.644z" />
          </svg>
        )
      case "rest apis":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      case "graphql":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.8 3.6l.4-.2c.3-.2.7-.2 1 0L12 6.1l4.8-2.7c.3-.2.7-.2 1 0l.4.2c.2.1.3.4.3.7v5.4l4.1 2.4c.3.2.5.5.5.9v.8c0 .4-.2.7-.5.9l-4.1 2.4v5.4c0 .3-.1.6-.3.7l-.4.2c-.3.2-.7.2-1 0L12 17.9l-4.8 2.7c-.3.2-.7.2-1 0l-.4-.2c-.2-.1-.3-.4-.3-.7v-5.4L1.4 12c-.3-.2-.5-.5-.5-.9v-.8c0-.4.2-.7.5-.9l4.1-2.4V1.6c0-.3.1-.6.3-.7z" />
          </svg>
        )
      case "socket.io":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
          </svg>
        )
    }
  }

  return <div className="flex items-center justify-center text-blue-400">{getSkillIcon(skill)}</div>
}

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
              <h1 className="text-7xl md:text-9xl font-bold mb-2 leading-tight font-anton uppercase text-lime-400">
                ABDUL HADI
              </h1>
              <h1 className="text-7xl md:text-9xl font-bold leading-tight font-anton uppercase text-lime-400">
                SHAFEER
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
              {/* CV Button - MOVED HERE */}
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

              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-8">
                I am currently a 1st year student in Amity University, Noida. From very early on in my life, I have been
                interested in technology and computers. Hence, I am currently pursuing this interest as a Computer
                Application student.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-12">
                My technical interests know no bounds! I am good at Frontend Development, Competitive Programming, also
                experienced in App Development and Backend Development.
              </p>

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
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-anton uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
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
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 font-anton uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
                      className="bg-white/5 text-white hover:bg-white/10 transition-all duration-300 p-3 text-center justify-center text-sm border border-white/10 hover:border-white/20 hover:scale-105 rounded-full flex items-center gap-2"
                    >
                      <SkillIcon skill={skill} />
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
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 font-anton uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full"
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
