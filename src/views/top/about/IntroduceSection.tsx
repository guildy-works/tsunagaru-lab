import { SectionBox } from "@/components/SectionBox"
import { ReactNode } from "react"
import Ribbon from "@/assets/ribbon.svg";
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

const data = [

    {
        num: "01",
        title: "様々な人とつながる",
        content: <>
            オフライン交流会や各種イベントの開催<br />
            チャット上での交流<br />
            フリーランス、経営者、学生、社会人とつながれる
        </>
    },
    {
        num: "02",
        title: "集客や採用ができる",
        content: <>
            求人や案件、仕事の受発注<br />
            マルシェなどのイベント<br />
            商品やサービスの宣伝し放題
        </>,
    },
    {
        num: "03",
        title: "スキルアップにつながる",
        content: <>
            セミナーの開催<br />
            スキルやノウハウなど<br />
            色んな情報をメンバー同士でシェア
        </>,
    },
    {
        num: "04",
        title: "朝活ができる",
        content: <>
            平日の朝7時から8時まで<br />
            ポモドーロタイマーを活用した<br />
            Zoom朝活で生産性が高まります
        </>,
    },
    {
        num: "05",
        title: "中四国を盛り上げられる",
        content: <>
            行政や民間と協力、協業して<br />
            各メンバーの力と知恵で<br />
            地域資源、問題、経済の課題解決に取り組む
        </>,
    },
    {
        num: "06",
        title: "経済圏の構築",
        content: <>
            Coming soon
        </>,
    },
]

export const IntroduceSection = () => {
    return <SectionBox disablePx disableMaxWidth>
        <div id="about" />

        <div
            className="w-full relative flex flex-col overflow-hidden"
        >
            <div className={clsx(styles.triangleUp, "bg-[#8c52ff]")} />
            <div

                className="w-full flex justify-center items-center bg-[#8c52ff] pt-16 py-4 -mt-[1px]">

                <SkewScrollTriggerAnimation skewPanelClass="!bg-[#8c52ff]"
                    className=" text-title1 font-bold "
                >
                    つながるラボなら<br />
                    中四国でつながる
                </SkewScrollTriggerAnimation>

            </div>
            <div className={clsx(styles.triangleDown, "border-t-8")} />
        </div>

        <div className="md:hidden mt-16 hiddlen w-full max-w-6xl px-8" >
            {
                data.map((x, i) =>
                    <IntroduceItem
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
                data.map((x, i) =>
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


const IntroduceItem = ({ title, content, num, delay, }: {
    title: ReactNode,
    num: string,
    content: ReactNode,
    delay: number,
    src?: StaticImageData
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
            className="-mt-12 md:mt-0 pb-16 md:pb-8 p-8 w-full h-full flex flex-col items-center gap-4 bg-gradient4 overflow-hidden rounded-3xl" >
            <div className="flex items-center gap-3 w-full">
                <h3 className="text-color2 flex flex-col text-[1rem] md:text-[2rem]">
                    <span> Point</span>
                    <span className="text-[2rem] md:text-[3rem] mx-auto mt-4">{num}</span>
                </h3>
                <h3 className="text-title2">
                    {title}
                </h3>
            </div>

            <MdOutlinePhoto className="text-[8rem]" />
            <p className="text-size2">{content}</p>
        </ motion.div >
    );
}