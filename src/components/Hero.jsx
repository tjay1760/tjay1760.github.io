import {motion} from 'framer-motion'
import { styles } from '../style'
// import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
<div className='flex flex-col justify-center items-center mt-5'>
  <div className='w-5 h-5 rounded-full bg-[#915eff] blur-sm'/>
  <div className='w-1 sm:h-80 h-40 violet-gradient blur-sm'/>
</div>
<div className='mt-20'>
  <h1 className={`${styles.heroHeadText} text-white`}>Hi there 👋 I&apos;m <span className='text-[#915eff]'>John</span></h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    &quot;Thoughts are beautiful things. Just decode them&quot;
  </p>
</div>
      </div>
      {/* <ComputersCanvas/> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='hidden sm:flex sm:w-[35px] h-[64px] rounded-3xl border-4 border-secondary justify-center items-start p-2'>
<motion.div
animate={{
  y : [0,24,0]
}}
transition={{
  duration: 1.5,
  repeat: Infinity,
  repeatType: 'loop'

}}
className ='w-1 h-4  bg-secondary mb-1 rounded-bl-md rounded-br-md'
/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero