import { SectionBox } from "@/components/SectionBox"
import { ReactNode } from "react"
import Balloon1 from "@/assets/balloon1.svg";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { MdOutlinePhoto, MdPerson, MdPersonOutline, MdPhoto } from "react-icons/md";
import { Button3 } from "@/components/Button3";
import { title } from "process";
import styles from "./IntroduceSection.module.scss";
import { DOMMotionComponents, motion, useInView } from "motion/react"
import clsx from "clsx";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import { resources } from "@/resources";

export const IntroduceSection = () => {
    return <SectionBox disablePx disableMaxWidth className="!mt-0">
        <div id="about" />

        <div
            className="w-full relative flex flex-col overflow-hidden"
        >
            <div className={clsx(styles.triangleUp, "bg-[#6e35df]")} />
            <div

                className="w-full flex justify-center items-center bg-[#6e35df] pt-16 py-4 -mt-[1px]">

                <SkewScrollTriggerAnimation skewPanelClass="!bg-[#6e35df]"
                    className="py-4 text-white text-[3rem] leading-[3.5rem] font-bold "
                >
                    つながるラボなら<br />
                    中四国でつながる
                </SkewScrollTriggerAnimation>

            </div>
            <div className={clsx(styles.triangleDown, "border-t-8")} />
        </div>

        <div className="md:hidden hiddlen w-full max-w-6xl px-8 space-y-8" >
            {
                resources.introduces.map((x, i) =>
                    <IntroduceItem
                        baloon={x.baloon}
                        delay={0}
                        key={x.title}
                        num={x.num}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>

        <div className="hidden mt-16 hiddlen w-full md:grid grid-cols-3 gap-8 max-w-6xl px-8" >
            {
                resources.introduces.map((x, i) =>
                    <IntroduceItem
                        delay={i * 0.1}
                        key={x.title}
                        num={x.num}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>
    </SectionBox>
}


const IntroduceItem = ({ title, content, num, delay, baloon }: {
    title: ReactNode,
    num: string,
    content: ReactNode,
    delay: number,
    src?: StaticImageData,
    baloon?: boolean
}) => {
    return (
        <motion.div
            viewport={{ once: true }}
            transition={{
                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, delay },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0.4 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            className="relative p-8 w-full h-full flex flex-col items-center gap-4 bg-gradient4 rounded-3xl" >

            <h3 className="text-color2 flex flex-col text-[3rem]">
                <span> Point</span>
                <span className="text-[4rem] mx-auto mt-8">{num}</span>
            </h3>

            <h3 className="text-title2 mt-8">
                {title}
            </h3>

            <MdOutlinePhoto className="text-[8rem]" />
            <p className="text-size2">{content}</p>

            {baloon && <FadeAndSlideScrollTriggerAnimation delay={0.4}
                className="z-10 absolute -right-[32px] top-0 bottom-0 m-auto pb-24 size-fit" >
                <Image src={Balloon1} alt="img" className="w-40" />
            </FadeAndSlideScrollTriggerAnimation>}
        </ motion.div >
    );
}