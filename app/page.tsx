"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationAchievementsSection from "@/components/education-achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Data definitions (moved here to be passed down to components)
  const personalInfo = {
    email: "kirtishrivastav626@gmail.com",
    phone: "+91 7742678810",
    location: "Jaipur, India",
    linkedin: "https://linkedin.com/in/kirti20feb",
    behance: "https://www.behance.net/gallery/207581035/UIUX-CASE-STUDY", // Keep behance for other sections if needed
    cvPath: "/kirti-shrivastava-cv.pdf", // Path to the CV file
  }

  const skills = [
    { name: "Figma", level: 95 },
    { name: "Adobe Photoshop", level: 85 },
    { name: "Sketch", level: 80 },
    { name: "Canva", level: 95 },
    { name: "Lottielab Animation", level: 75 },
    { name: "MS Office", level: 90 },
    { name: "Google Workspace", level: 88 },
  ]

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Aucio Infotech",
      period: "Mar 2025 - Present",
      description:
        "Designed and launched the Bondspe Mobile App with clean, intuitive user interface. Developed responsive UI designs for client websites including Riya Soni Kundan House (luxury jewelry), Neel Initiative (agri-tech platform), Brixcode Technologies (corporate tech services), and Legal Republic (legal services platform).",
      projects: [
        "Bondspe Mobile App",
        "Riya Soni Kundan House",
        "Neel Initiative",
        "Brixcode Technologies",
        "Legal Republic",
      ],
      type: "uiux",
    },
    {
      title: "Junior UI/UX Designer",
      company: "Viral Chilly",
      period: "Nov 2024 - Feb 2025",
      description:
        "Designed websites for jewelry brand and parent company, conducted user research, created wireframes and high-fidelity mockups. Edited promotional videos for brand storytelling and produced design assets for marketing campaigns. Developed Handy Craftly - a colorful eCommerce UI showcasing handmade products.",
      projects: ["Handy Craftly eCommerce Platform", "Jewelry Brand Website", "Marketing Campaign Assets"],
      type: "uiux",
    },
    {
      title: "UI/UX Design Intern",
      company: "Devicecure",
      period: "Sep 2024 - Oct 2024",
      description:
        "Designed homepage UI for doorstep mobile repair service, boosting user engagement. Created wireframes, interactive prototypes, and high-fidelity designs. Improved visual hierarchy and navigation flow while collaborating with developers.",
      projects: ["Devicecure Homepage Redesign", "Mobile Repair Service UI"],
      type: "uiux",
    },
    {
      title: "Executive Assistant to Director",
      company: "NM Financiers Pvt. Ltd. & DI Gold Designer ",
      period: "Dec 2021 - Jun 2024",
      description:
        "Managed director's calendar, correspondence, and travel arrangements (including flight bookings, hotel reservations, and car rentals). Coordinated with executives, employees, clients, and external partners to ensure seamless communication. Analyzed customer data, loan records, and EMI payments using Excel. Scheduled meetings with foreign clients and dignitaries. Prepared and edited confidential documents, reports, and presentations. Developed and implemented effective filing and data management systems. Provided exceptional customer service and support to clients.",
      projects: ["Travel Management System", "Data Analysis & Reporting", "Client Relations Management"],
      type: "other",
    },
    {
      title: "HR Recruiter",
      company: "Virtue Training And Placement Services",
      period: "Jun 2021 - Dec 2021",
      description:
        "Sourced candidates online, conducted interviews, and shortlisted candidates for MNCs. Created recruitment networks on social media and other mediums to build talent pipeline.",
      projects: ["Candidate Sourcing", "Interview Process Management", "Social Media Recruitment"],
      type: "other",
    },
    {
      title: "Backend Executive (Admin)",
      company: "SBE Finserve Private Limited",
      period: "Jul 2019 - Jan 2021",
      description:
        "Maintained data, created Excel reports, and managed email correspondence. Coordinated with Sales Executives to close sales and ensure timely follow-ups.",
      projects: ["Data Management", "Sales Coordination", "Report Generation"],
      type: "other",
    },
  ]

  const education = [
    {
      degree: "Pursuing MBA",
      institution: "Amity University",
      year: "Present",
      grade: "",
    },
    {
      degree: "UI/UX Designer Certification",
      institution: "upGrad - Golden Gate University San Francisco",
      year: "2023",
      grade: "",
    },
    {
      degree: "Bachelor of Arts",
      institution: "S.S.G. Pareek PG College",
      year: "2023",
      grade: "63%",
    },
    {
      degree: "12th Grade",
      institution: "Army Public School",
      year: "2019",
      grade: "68%",
    },
  ]

  const achievements = [
    "National Trade Certificate (Computer Operator and Programming Assistant)",
    "IIHM Certificate for participating in Young Chef India Schools",
  ]

  const projectsData = [
    {
      title: "Bondspe Mobile App",
      company: "Aucio Infotech",
      description: "Clean, intuitive mobile app interface design with focus on user experience and modern aesthetics.",
      category: "Mobile App",
      color: "from-blue-500 to-cyan-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Riya Soni Kundan House",
      company: "Aucio Infotech",
      description: "Luxury jewelry brand website with elegant design showcasing premium products and craftsmanship.",
      category: "E-commerce",
      color: "from-purple-500 to-pink-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Neel Initiative",
      company: "Aucio Infotech",
      description:
        "Agri-tech platform empowering farmers through soil health insights with data-driven interface design.",
      category: "AgriTech",
      color: "from-green-500 to-emerald-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Bondspe Website",
      company: "Aucio Infotech",
      description: "Responsive web design for the Bondspe platform, ensuring seamless user experience across devices.",
      category: "Web Design",
      color: "from-teal-500 to-blue-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Brixcode Technologies",
      company: "Aucio Infotech",
      description:
        "Corporate tech service website design focusing on professional presentation and clear service offerings.",
      category: "Corporate Website",
      color: "from-indigo-500 to-purple-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Legal Republic",
      company: "Aucio Infotech",
      description: "Legal services platform with focus on trust, clarity, and professional user experience design.",
      category: "Legal Services",
      color: "from-orange-500 to-red-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Handy Craftly",
      company: "Viral Chilly",
      description: "Colorful eCommerce UI showcasing handmade products with intuitive navigation and engaging visuals.",
      category: "E-commerce",
      color: "from-pink-500 to-rose-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Devicecure Homepage",
      company: "Devicecure",
      description: "Doorstep mobile repair service homepage design that boosted user engagement and conversions.",
      category: "Service Platform",
      color: "from-yellow-500 to-orange-500",
      demoLink: "#", // Added demo link
    },
    {
      title: "Game Studio UI/UX",
      company: "Personal Project",
      description:
        "Designed intuitive and engaging user interfaces for a hypothetical game studio, focusing on player experience.",
      category: "Game UI/UX",
      color: "from-red-500 to-purple-500",
      demoLink: "#", // Added demo link
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection personalInfo={personalInfo} scrollToContact={() => scrollToSection("contact")} />
      <AboutSection />
      <SkillsSection skills={skills} featuredProjectLink={personalInfo.behance} />
      <ProjectsSection projectsData={projectsData} viewPortfolioLink={personalInfo.behance} />
      <ExperienceSection experiences={experiences} />
      <EducationAchievementsSection
        education={education}
        achievements={achievements}
        linkedinLink={personalInfo.linkedin}
        behanceLink={personalInfo.behance}
      />
      <ContactSection personalInfo={personalInfo} />
      <Footer />
    </div>
  )
}
