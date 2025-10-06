import About from '@/components/about'
import CertificationPage from '@/components/certification'
import Chatbot from '@/components/ChatWidget'
// import ChatWidget from '@/components/ChatWidget'
import ContactPage from '@/components/contact'
import Hero from '@/components/hero'
import ExpertProjectsSection from '@/components/project'
import Skill_section_2 from '@/components/skill_section2'
// import Projects from '@/components/skill_section2'
// import ServicesSection from '@/components/servisis'
import SkillsSection from '@/components/skills'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <Chatbot/>
      {/* <ServicesSection/> */}
      <About/>
       <Skill_section_2/>
      <SkillsSection/>
      <ExpertProjectsSection/>
      <ContactPage/>
      <CertificationPage/>
    </main>
  )
}

export default HomePage