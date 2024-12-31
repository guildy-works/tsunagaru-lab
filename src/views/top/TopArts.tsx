import Part1 from '../../assets/top-parts/img1.svg'
import Part2 from '../../assets/top-parts/img2.svg'
import Part3 from '../../assets/top-parts/img3.svg'
import Part4 from '../../assets/top-parts/img4.svg'
import Part5 from '../../assets/top-parts/img5.svg'
import Part6 from '../../assets/top-parts/img6.svg'
import Part7 from '../../assets/top-parts/img7.svg'
import Part8 from '../../assets/top-parts/img8.svg'
import Part9 from '../../assets/top-parts/img9.svg'
import Part10 from '../../assets/top-parts/img10.svg'
import Logo from "@/assets/logo.png";
import { motion } from 'motion/react';
import Image from 'next-export-optimize-images/picture';
import { SkewScrollTriggerAnimation } from '@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation'

export const TopArt = () => {
    return (
        <div className='-mt-2 h-[90svh] relative flex flex-col justify-center items-center overflow-hidden rotate'>

            <motion.div
                transition={{ type: "spring", mass: 0.4, duration: 1, delay: 0.5 }}
                initial={{ translateX: "-100%", opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part1} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ type: "spring", mass: 0.4, duration: 1, delay: 0.8 }}
                initial={{ translateY: "100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part2} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.4 }}
                initial={{ translateY: "100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part3} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.5 }}
                initial={{ translateY: "100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part4} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 1 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part5} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ mass: 0.4, duration: 1, delay: 0.4 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part6} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.7 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part7} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 0.6 }}
                initial={{ translateY: "-100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part8} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ type: "spring", mass: 0.4, duration: 1, delay: 0.2 }}
                initial={{ translateX: "100%", opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part9} alt="art1" className="size-full object-cover" />
            </motion.div>

            <motion.div
                transition={{ duration: 1 }}
                initial={{ translateY: "100%", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                className='absolute top-0 left-0 inset-0 flex justify-center items-center'>
                <Image src={Part10} alt="art1" className="size-full object-cover" />
            </motion.div>

            <div className='flex flex-wrap gap-4 justify-center'>
                <div>
                    <motion.div transition={{type:"spring",damping:5 ,mass:0.4 ,delay: 2.2 }}
                        initial={{ opacity: 0,scale:0.5 }}
                        animate={{ opacity: 1,scale:1 }}>
                        <Image src={Logo} alt="Logo" className="w-48 object-cover" />
                        <p className='text-[#f1ab3f] mt-1'>- 地方でつながる、地方で輝く</p>
                    </motion.div>
                </div>
                <div className='flex flex-col justify-center items-center px-8 gap-8'>
                    <SkewScrollTriggerAnimation tag="h1" className='text-title1 text-center' delay={1.7}>
                        つながる、広がる、<br className='sm:hidden' />中四国。
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation tag="h2" className='text-title3 text-center' delay={1.9}>
                        朝活、人脈、求人、仕事<br />
                        あなたと未来、全てがつながる。
                    </SkewScrollTriggerAnimation>
                </div>
            </div>
        </div>

    )
}
