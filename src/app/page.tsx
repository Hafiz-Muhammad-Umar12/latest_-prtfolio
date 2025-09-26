import About from '@/components/about'
import ContactPage from '@/components/contact'
import Hero from '@/components/hero'
import Projects from '@/components/project'
import ServicesSection from '@/components/servisis'
import SkillsSection from '@/components/skills'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <SkillsSection/>
      <ServicesSection/>
      <ContactPage/>
      
    </main>
  )
}

export default HomePage