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
import clsx from "clsx";

export const OnayamiSection = () => {
    const Chip = ({ children, delay }: { children: ReactNode, delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="rounded-full font-bold px-1 py-1 bg-color3 text-md  tracking-tighter mt-2">
            {children}
        </FadeAndSlideScrollTriggerAnimation>

    const Dot = ({ delay }: { delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            delay={delay}
            className="rounded-full font-bold mt-2">
            ・
        </FadeAndSlideScrollTriggerAnimation>

    return <SectionBox disablePx disableMaxWidth className="!mb-0">

        <div className="w-full flex flex-col items-center mx-auto justify-center">

            <div className="flex flex-col items-center mx-auto">
                <h2 className="flex items-baseline gap-0 z-10">
                    <Chip delay={0}>フリーランス</Chip>
                    <Dot delay={0.1} />
                    <Chip delay={0.2}> 経営者</Chip>
                    <Dot delay={0.3} />
                    <Chip delay={0.4}>大学生</Chip>
                    <Dot delay={0.5} />
                    <Chip delay={0.6}>独立を考えている方</Chip>
                    <FadeAndSlideScrollTriggerAnimation delay={0.7} className="-ml-1 z-10 leading-tight mt-1 text-md ">へ</FadeAndSlideScrollTriggerAnimation>
                </h2>

                <div className="mt-2 w-full flex flex-col items-center justify-center">
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.4, damping: 5, mass: 0.2 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="border-b-2 border-black" />
                    <div className="greaterthan flex size-[20px] md:size-[35px] -mt-[11px] md:-mt-[18px] border-t-2 border-r-2 bg-white border-black" style={{
                        transform: "rotateZ(135deg)",
                        marginTop: "",
                    }}></div>
                </div>
            </div>
            <SkewScrollTriggerAnimation tag="h2" className="text-title1 font-bold mt-2 mx-auto">
                こんな悩みありませんか？
            </SkewScrollTriggerAnimation>

            <section className="max-w-3xl md:max-w-7xl grid grid-cols-2 md:grid-cols-4 p-8 pt-0 md:p-0 gap-4 sm:gap-8"
            >
                <OnayamiItem marginTop title={<>人脈を<br className="sm:hidden" />広げたい</>}
                    content={<>
                        交流する<br className="sm:hidden" />機会がない<br />
                        経営者との<br className="sm:hidden" />つながりが薄い<br />
                        中四国の人との<br className="sm:hidden" />つながりが薄い<br />
                    </>}
                    src={Issue2}
                />

                <OnayamiItem

                    title={<>宣伝や<br className="sm:hidden" />告知をしたい</>}
                    content={<>
                        求人や案件の<br className="sm:hidden" />
                        掲載費用が高い<br />
                        イベントを告知する<br className="sm:hidden" />
                        場所がない<br />
                        商品やサービスの<br className="sm:hidden" />
                        宣伝をしたい<br />
                    </>}
                    src={Issue3}
                />

                <OnayamiItem marginTop title={<>生産性を<br className="sm:hidden" />高めたい</>}
                    content={<>
                        ついつい二度寝を<br className="sm:hidden" />してしまう<br />
                        時間を<br className="sm:hidden" />有効活用したい<br />
                        新しいスキルを<br className="sm:hidden" />身につけたい
                    </>}
                    src={Issue1}
                />


                <OnayamiItem title={<>中四国を<br className="sm:hidden" />盛り上げたい</>}
                    content={<>
                        地元に<br className="sm:hidden" />恩返しをしたい<br />
                        地方や地域の問題を<br className="sm:hidden" />解決したい<br />
                        地方の<br className="sm:hidden" />魅力や文化を広めたい
                    </>}
                    src={Issue1}
                />
            </section>
        </div>
    </SectionBox>
}

const OnayamiItem = ({ title, content, delay, marginTop, href, src }: {
    delay?: number,
    marginTop?: boolean,
    title: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
    src: StaticImageData,
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation className={clsx(
            marginTop ? "md:mb-12" : "md:mt-12",
            "mt-8 overflow-hidden flex flex-col items-center justify-center",
        )}>
            <FadeAndSlideScrollTriggerAnimation
                delay={0.2}>
                <h2 className="text-title3 text-center">{title}</h2>
            </FadeAndSlideScrollTriggerAnimation>
            <div className="h-36 sm:h-48 w-auto z-50" >
                <Image src={src} alt="img" className="h-full object-cover" />
            </div>

            <FadeAndSlideScrollTriggerAnimation delay={0.3} className="-mt-8 bg-gradient3 pt-8 p-4 rounded-3xl h-fit w-full">
                <p>{content}</p>
            </FadeAndSlideScrollTriggerAnimation>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}