import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { MdOutlinePhoto, MdPerson, MdPersonOutline, MdPhoto } from "react-icons/md";
import { Button3 } from "@/components/Button3";
import { title } from "process";
import { DOMMotionComponents, motion, useInView } from "motion/react"
import Join1 from "@/assets/join1.webp";
import Join2 from "@/assets/join2.webp";
import Join3 from "@/assets/join3.webp";
import Join4 from "@/assets/join4.webp";

const data = [

    {
        num: "01",
        title: "様々な人とつながる",
        img: Join1,
        content: <>
            オフライン交流会や各種イベントの開催<br />
            チャット上での交流<br />
            フリーランス、経営者、学生、社会人とつながれる
        </>
    },
    {
        num: "02",
        title: "集客や採用ができる",
        img: Join2,
        content: <>
            求人や案件、仕事の受発注<br />
            マルシェなどのイベント<br />
            商品やサービスの宣伝し放題
        </>,
    },
    {
        num: "03",
        title: "スキルアップにつながる",
        img: Join3,
        content: <>
            セミナーの開催<br />
            スキルやノウハウなど<br />
            色んな情報をメンバー同士でシェア
        </>,
    },
    {
        num: "04",
        title: "朝活ができる",
        img: Join4,
        content: <>
            平日の朝7時から8時まで<br />
            ポモドーロタイマーを活用した<br />
            Zoom朝活で生産性が高まります
        </>,
    },
]

export const HowToJoinSection = () => {
    return <SectionBox disablePx disableMaxWidth className="mx-auto max-w-4xl !gap-8">
        <h2 className="text-title1 w-full border-b-2 border-color3 pb-4 text-center border-dotted max-w-md">
            入会方法
        </h2>

        <div className="hidden sm:grid w-full sm:grid-cols-2 md:grid-cols-4 max-w-6xl" >
            {
                data.map((x, i) =>
                    <IntroduceItem
                        src={x.img}
                        key={x.title}
                        num={x.num}
                        delay={i * 200}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>

        <div className="sm:hidden" >
            <Splide
                className=""
                options={{
                    autoplay: true,
                    rewind: false,
                    interval: 2000, // 自動再生の間隔
                    speed: 2000, // フェードする時間
                    arrows: false,
                    width: 'auto',
                    perPage: 1,
                    autoWidth: true,
                } as Options}
            >
                {
                    data.map((x, i) =>

                        <SplideSlide key={i}>
                            <IntroduceItem
                                src={x.img}
                                key={x.title}
                                num={x.num}
                                delay={i * 200}
                                title={x.title}
                                content={x.content}
                            />
                        </SplideSlide>

                    )
                }
            </Splide>
        </div>
    </SectionBox>
}


const IntroduceItem = ({ title, content, delay, num, src }: {
    delay?: number,
    title: ReactNode,
    num: string,
    content: ReactNode,
    src?: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            delay={0.2}
            className="w-full h-full flex flex-col items-center gap-4 overflow-hidden"
        >
            <Image src={src} alt={title} className="w-[320px] h-[540px] object-cover" />
        </FadeAndSlideScrollTriggerAnimation>
    );
}