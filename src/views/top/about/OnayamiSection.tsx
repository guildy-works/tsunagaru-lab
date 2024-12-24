import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import Issue1 from "@/assets/issue1.webp";
import Issue2 from "@/assets/issue2.webp";
import Issue3 from "@/assets/issue3.webp";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';

export const OnayamiSection = () => {
    const Chip = ({ children, delay }: { children: ReactNode, delay: number }) =>
        <FadeAndSlideScrollTriggerAnimation
            transform={{ translate: { y: "-60px", }, scale: 1.2 }}
            transformTo={{ translate: { y: "0px", }, scale: 1 }}
            delay={delay}
            tag="span" innerClassName="rounded-full px-4 bg-color3 text-title3 font-bold ">
            {children}
        </FadeAndSlideScrollTriggerAnimation>

    return <SectionBox disablePx disableMaxWidth>

        <div className="w-fit flex flex-col items-center mx-auto gap-8 justify-center">

            <div className="flex flex-col items-center">
                <h2 className="text-title3 font-bold flex flex-wrap items-center gap-0">
                    <Chip delay={0}>フリーランス</Chip>
                    <span>・</span>
                    <Chip delay={200}> 経営者</Chip>
                    <span>・</span>
                    <Chip delay={400}>大学生</Chip>
                    <span>・</span>
                    <Chip delay={600}>独立を考えている方</Chip>
                    <span className="-ml-2 z-10">へ</span>
                </h2>
                <div className="mt-4 h-[2px] w-full bg-black" />
                <h2 className="text-title1 font-bold mt-4 mx-auto">こんな悩みありませんか？</h2>
            </div>

            <Splide
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
        <FadeAndSlideScrollTriggerAnimation innerClassName="flex flex-col items-center justify-center gap-4 bg-gradient3 p-8 rounded-3xl w-fit">
            <h3 className="text-title2">{title}</h3>
            <Image src={src} alt="img" className="h-24 w-auto" />
            <p>{content}</p>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}