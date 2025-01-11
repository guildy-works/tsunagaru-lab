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
import { SectionType1 } from '@/components/SectionType1'
import { Button2 } from '@/components/Button2'
import { resources } from '@/resources'

export const TopArt = () => {
    return (
        <>
            <Desktop />
            <Mobile />
        </>

    )
}

const Desktop = () => <div className="hidden sm:flex flex-col gap-0">
    <div className='-mt-2 min-h-[75svh] relative flex flex-col justify-center items-center overflow-hidden'>
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

        <div className='mt-32 flex flex-wrap gap-4 justify-center'>
            <div>
                <motion.div transition={{ type: "spring", damping: 5, mass: 0.4, delay: 2.2 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}>
                    <Image src={Logo} alt="Logo" className="w-40 md:w-48 object-cover" />
                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center px-8 gap-8'>
                <SkewScrollTriggerAnimation tag="h1" className='font-maru text-title1 text-center' delay={1.7}>
                    つながる、広がる、<br className='sm:hidden' />中四国
                </SkewScrollTriggerAnimation>

                <SkewScrollTriggerAnimation tag="h2" className='font-maru text-title3 text-center' delay={1.9}>
                    人脈、仕事、情報<br />
                    未来がつながる
                </SkewScrollTriggerAnimation>
            </div>
        </div>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1530 113"
            className='mb-40 mt-12 w-full stroke-[6px] md:!stroke-2'>
            <motion.path
                transition={{ duration: 2.2, delay: 1.5 }}
                initial={{ strokeDasharray: 1930, strokeDashoffset: 1930 }}
                animate={{ strokeDasharray: 1930, strokeDashoffset: 0 }}
                className=' stroke-orange-600 z-50 '
                fill="transparent"
                d="M.5,43.3c61.63,15.81,124.1,28.89,187.14,38.08,125.96,18.3,253.78,18.9,380.78,24.91,78.79,2.62,157.78,2.05,236.45-3.06,24.47-1.84,49.47-3.94,71.61-14.82,21.65-10.73,36.65-33.26,28.34-56.26-7.59-23.36-38.23-38.33-60.43-25.38-16.44,9.17-18.9,30.59-10.31,46.72,26.76,49.04,114.62,57.02,172.81,58.12,62.61.52,119.56-13.77,179.27-28.72C1451.86,8.51,1668.46,1.2,1929.5,102.3" />
        </svg>
    </div>
    <motion.div
        className="h-[20svh] bg-gradient1 w-full flex flex-col justify-center items-center gap-4">
        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, delay: 2, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, delay: 2, },
                opacity: { duration: 0.3, delay: 2, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-6 bg-[#893be2] flex flex-col justify-center items-center gap-2 rounded-3xl z-10">
            <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#893be2]" className="text-title3 text-white">早期入会特典</SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#893be2]" className="text-title4 text-white">会費永年割引キャンペーン</SkewScrollTriggerAnimation>
            <Button2 href={resources.links.line} subTitle="Click!">
                早期入会特典をGET！
            </Button2>
        </motion.div>
    </motion.div>
</div>


const Mobile = () => <div
    style={{ minHeight: 'calc(100svh - 62px)' }}
    className='sm:hidden relative flex flex-col justify-center items-center overflow-hidden rotate'>
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
        className='absolute bottom-0 left-0 size-fit flex justify-center items-center'>
        <Image src={Part3} alt="art1" className=" object-cover" />
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

    <div className='mt-32 flex flex-wrap gap-4 justify-center'>
        <div>
            <motion.div transition={{ type: "spring", damping: 5, mass: 0.4, delay: 2.2 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}>
                <Image src={Logo} alt="Logo" className="w-40 md:w-48 object-cover" />
            </motion.div>
        </div>
        <div className='flex flex-col justify-center items-center px-8 gap-4'>
            <SkewScrollTriggerAnimation tag="h1" className='text-[2rem] font-maru text-center leading-[2.4rem]' delay={1.7}>
                つながる、広がる、<br className='sm:hidden' />中四国
            </SkewScrollTriggerAnimation>

            <SkewScrollTriggerAnimation tag="h2" className='font-maru text-title4 text-center' delay={1.9}>
                人脈、仕事、情報<br />
                未来がつながる
            </SkewScrollTriggerAnimation>
        </div>
    </div>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1530 113"
        className='mb-3 mt-4 w-full stroke-[6px] md:!stroke-2'>
        <motion.path
            transition={{ duration: 2.2, delay: 1.5 }}
            initial={{ strokeDasharray: 1930, strokeDashoffset: 1930 }}
            animate={{ strokeDasharray: 1930, strokeDashoffset: 0 }}
            className=' stroke-orange-600 z-50 '
            fill="transparent"
            d="M.5,43.3c61.63,15.81,124.1,28.89,187.14,38.08,125.96,18.3,253.78,18.9,380.78,24.91,78.79,2.62,157.78,2.05,236.45-3.06,24.47-1.84,49.47-3.94,71.61-14.82,21.65-10.73,36.65-33.26,28.34-56.26-7.59-23.36-38.23-38.33-60.43-25.38-16.44,9.17-18.9,30.59-10.31,46.72,26.76,49.04,114.62,57.02,172.81,58.12,62.61.52,119.56-13.77,179.27-28.72C1451.86,8.51,1668.46,1.2,1929.5,102.3" />
    </svg>

    <motion.div
        className="w-full p-4 flex flex-col justify-center items-center gap-4 mb-6">
        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, delay: 2, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, delay: 2, },
                opacity: { duration: 0.3, delay: 2, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-6 bg-[#893be2] flex flex-col justify-center items-center gap-2 rounded-3xl z-10">
            <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#893be2]" className="text-title2 text-white">早期入会特典</SkewScrollTriggerAnimation>
            <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#893be2]" className="text-title3 text-white">会費永年割引キャンペーン</SkewScrollTriggerAnimation>
            <Button2 href={resources.links.line} subTitle="Click!">
                早期入会特典をGET！
            </Button2>
        </motion.div>
    </motion.div>
</div>
