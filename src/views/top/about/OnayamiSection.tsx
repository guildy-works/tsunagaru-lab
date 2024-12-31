import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import Issue1 from "@/assets/issue1.webp";
import Issue2 from "@/assets/issue2.webp";
import Issue3 from "@/assets/issue3.webp";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const OnayamiSection = () => {
    const Chip = ({ children, delay }: { children: ReactNode, delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="rounded-full px-4 bg-color3 text-title3 font-bold mt-2">
            {children}
        </FadeAndSlideScrollTriggerAnimation>

    const Dot = ({ delay }: { delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="rounded-full px-1text-title1 font-bold mt-2">
            ・
        </FadeAndSlideScrollTriggerAnimation>

    return <SectionBox disablePx disableMaxWidth>

        <div className="w-fit flex flex-col items-center mx-auto gap-8 justify-center">

            <div className="flex flex-col items-center">
                <h2 className="text-title3 font-bold flex flex-wrap items-center gap-0 px-8">
                    <Chip delay={0}>フリーランス</Chip>
                    <Dot delay={0.1} />
                    <Chip delay={0.2}> 経営者</Chip>
                    <Dot delay={0.3} />
                    <Chip delay={0.4}>大学生</Chip>
                    <Dot delay={0.5} />
                    <Chip delay={0.6}>独立を考えている方</Chip>
                    <FadeAndSlideScrollTriggerAnimation delay={700} className="-ml-2 z-10 text-title2">へ</FadeAndSlideScrollTriggerAnimation>
                </h2>

                <motion.div
                     viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 1, damping: 5, mass: 0.8 }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="mt-4 h-[2px] bg-black" />

                <SkewScrollTriggerAnimation tag="h2" className="text-title1 font-bold mt-4 mx-auto">
                    こんな悩みありませんか？
                </SkewScrollTriggerAnimation>
            </div>

            <Splide
                options={{
                    autoplay: true,
                    rewind: true,
                    interval: 2000, // 自動再生の間隔
                    speed: 2000, // フェードする時間
                    arrows: false,
                    width: 'auto',
                    gap: '1rem',
                    padding: { right: '4rem', left: '4rem', },
                    perPage: 1,
                    autoWidth: true,
                } as Options}
            >

                <SplideSlide >
                    <OnayamiItem title="人脈を広げたい"
                        content={<>
                            交流する機会がない<br />
                            経営者とのつながりが薄い<br />
                            中四国の人とのつながりが薄い<br />
                        </>}
                        src={Issue2}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem
                        title="宣伝や告知をしたい"
                        content={<>
                            求人や案件の掲載費用が高い<br />
                            イベントを告知する場所がない<br />
                            商品やサービスの宣伝をしたい<br />
                        </>}
                        src={Issue3}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem title="生産性を高めたい"
                        content={<>
                            ついつい二度寝をしてしまう<br />
                            時間を有効活用したい<br />
                            新しいスキルを身につけたい
                        </>}
                        src={Issue1}
                    />
                </SplideSlide>
            </Splide>
        </div>
    </SectionBox>
}

const OnayamiItem = ({ title, content, delay, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
    src: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation className="overflow-hidden flex flex-col items-center justify-center gap-4 bg-gradient3 p-8 rounded-3xl w-fit">
            <FadeAndSlideScrollTriggerAnimation
                delay={0.2}>
                <h2 className="text-title2">        {title}</h2>
            </FadeAndSlideScrollTriggerAnimation>
            <Image src={src} alt="img" className="h-24 w-auto" />
            <FadeAndSlideScrollTriggerAnimation delay={0.3}>
                <p>{content}</p>
            </FadeAndSlideScrollTriggerAnimation>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}