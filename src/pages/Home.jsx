
import InfityScroller from '../components/InfityScroller';
import Hero from '../components/Hero';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import About from '../components/About';
import Coaches from '../components/Coaches';
import Passes from '../components/Passes';
import Trial from '../components/Trial';


const Home = () => {
  const text1 = 'GET YOUR DREAM SHAPE WITH OUR PROGRAMS THAT MADE BY PROFESSIONALS AND BODY BUILDERS, CONVENIENT FOR PEOPLE OF ALL AGES.'
  return (
    <>
      <Hero />
      <InfityScroller text1={text1} />
      <div className='bg-black pb-30 '>
        <Services />
        <About />
        <Coaches />
        <Passes />
        <Trial />
      </div>

    </>
  )
}

export default Home