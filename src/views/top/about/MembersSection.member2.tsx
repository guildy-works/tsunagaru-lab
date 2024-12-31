import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from "next/image";

export const MembersSection2 = () => {

    return (
        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

            <SkewScrollTriggerAnimation tag="h2" className="text-title1 font-bold">早期入会者の紹介</SkewScrollTriggerAnimation>

            <Splide
                className="w-full"
                options={{
                    autoplay: true,
                    rewind: true,
                    interval: 2000, // 自動再生の間隔
                    speed: 2000, // フェードする時間
                    arrows: false,
                    width: 'auto',
                    gap: '1rem',
                    padding: { right: '2rem', left: '2rem', },
                    perPage: 1,
                    autoWidth: true,
                } as Options}
            >

                {resources.members2.map((resource, index) => (<SplideSlide key={resource.name} >
                    <OnayamiItem title={resource.name}
                        key={resource.name}
                        title2={resource.job}
                        content={resource.details}
                        src={resource.image}
                    />
                </SplideSlide>
                ))}

            </Splide>

            <p>
                その他に<br />
                多数のSNSフォロワー数万人のインフルエンサー<br />
                中四国地方で活躍する経営者/フリーランス<br />
                マルシェ運営者/イベンター<br />
                行政関連(?)<br />
                学生<br />
                の方々が入会しております！
            </p>
        </div>
    )
}

const OnayamiItem = ({ title, title2, content, delay, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    title2: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
    src: StaticImageData
}) => {
    return (
        <FadeAndSlideScrollTriggerAnimation
            className="h-full w-full max-w-80  md:max-w-md flex flex-col items-center justify-center bg-color4 p-5 gap-4 rounded-3xl overflow-hidden">
            <div className="w-full gap-4 bg-color4 grid grid-cols-1 md:grid-cols-2">
                <div className="rounded-lg">
                    <Image src={src} alt={title} className="w-full h-40 rounded-lg object-cover" />
                </div>
                <div className="flex-grow-1">
                    <h3 className="text-title3 font-bold">{title}</h3>
                    <h4 className="text-title4 font-bold">{title2}</h4>
                </div>
            </div>
            <p className="p-4 h-full bg-white w-full rounded-lg">{content}</p>
        </ FadeAndSlideScrollTriggerAnimation>
    );
}