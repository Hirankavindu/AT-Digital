import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

export default function Home() {
  return (
   <>
    <Hero/>
    <Section1/>
    <Section2/>
   </>
  )
}
