import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import Ribbon from "@/assets/ribbon.svg";
import Issue2 from "@/assets/issue2.webp";
import Issue3 from "@/assets/issue3.webp";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { MdOutlinePhoto, MdPerson, MdPersonOutline, MdPhoto } from "react-icons/md";
import { Button3 } from "@/components/Button3";
import { title } from "process";

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

        <div className="w-[120%] relative">
            <Image src={Ribbon} alt="Onayami" className="w-[120%] min-h-60 object-cover" />
            <h2 className="absolute inset-0 m-auto mt-12 text-white flex justify-center items-center text-title1 font-bold">
                つながるラボなら<br />
                中四国でつながる
            </h2>
        </div>


        <div className="hiddlen w-full md:grid grid-cols-3 gap-8 max-w-6xl px-8 mt-12 md:mt-0" >
            {
                data.map((x, i) =>
                    <IntroduceItem
                        key={x.title}
                        num={x.num}
                        delay={i * 100}
                        title={x.title}
                        content={x.content}
                    />
                )
            }
        </div>

        <div className="sm:hidden w-full flex flex-col items-center mx-auto gap-8 justify-center">

            <Splide
                className=""
                options={{
                    autoplay: true,
                    rewind: true,
                    interval: 2000, // 自動再生の間隔
                    speed: 2000, // フェードする時間
                    arraws: false,
                    width: 'auto',
                    gap: '1rem',
                    padding: { right: '1rem', left: '1rem' },
                    perPage: 1,
                    autoWidth: true,
                } as Options}
            >

                <SplideSlide >
                    <IntroduceItem
                        num="01"
                        delay={0}
                        title="人脈を広げたい"
                        content={<>
                            交流する機会がない<br />
                            経営者とのつながりが薄い<br />
                            中四国の人とのつながりが薄い<br />
                        </>}
                        src={Issue2}
                    />
                </SplideSlide>
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
            delay={delay}
            className="w-full -mt-12 md:mt-0"
            innerClassName="pb-16 md:pb-8 p-8 w-full h-full flex flex-col items-center gap-4 bg-gradient4  rounded-3xl w-fit">
            <div className="flex items-center gap-3 w-full">
                <div className="text-color2 flex flex-col text-[1rem] md:text-[2rem]">
                    <span> Point</span>
                    <span className="text-[2rem] md:text-[3rem] mx-auto mt-4">{num}</span>
                </div>
                <h3 className="text-title2">
                    {title}
                </h3>
            </div>

            <MdOutlinePhoto className="text-[8rem]" />
            <p className="text-size2">{content}</p>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}