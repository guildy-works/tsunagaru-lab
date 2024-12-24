import { SectionBox } from "@/components/SectionBox"
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation"
import { ReactNode } from "react"
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import Issue1 from "@/assets/issue1.webp";
import Issue2 from "@/assets/issue2.webp";
import Issue3 from "@/assets/issue3.webp";
import { StaticImageData } from "next/image";
import Image from 'next-export-optimize-images/picture';
import { MdPerson, MdPersonOutline } from "react-icons/md";
import { Button3 } from "@/components/Button3";

export const MembersSection = () => {
    return <SectionBox disablePx disableMaxWidth>

        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

            <h2 className="text-title1 font-bold">早期入会者の紹介</h2>

            <Splide
                className="w-full"
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
                    <OnayamiItem title="TikToker"
                        title2="フリーランス"
                        content={<>
                            10万人以上のフォロワーを持つ<br />
                            広島県の有名インフルエンサー
                        </>}
                        src={Issue2}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem
                        title="Instagrammer"
                        title2="フリーランス"
                        content={<>
                            5万人以上のフォロワーを持つ<br />
                            岡山県の有名インフルエンサー
                        </>}
                        src={Issue3}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem title="起業家＆講演家"
                        title2="経営者"
                        content={<>
                            毎月セミナーを開催<br />
                            YouTubeで自身の活動も配信
                        </>}
                        src={Issue1}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem title="起業家＆講演家"
                        title2="経営者"
                        content={<>
                            毎月セミナーを開催<br />
                            YouTubeで自身の活動も配信
                        </>}
                        src={Issue1}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem title="AIのプロ"
                        title2="クリエイター"
                        content={<>
                            Webデザイン、グラフィックデザイン<br />
                            AIサポート、デベロッパー？？<br />
                            Webのなんでも屋さん
                        </>}
                        src={Issue1}
                    />
                </SplideSlide>
                <SplideSlide >
                    <OnayamiItem title="ものまね軍団"
                        title2="デザイナー"
                        content={<>
                            本職はデザイナー<br />
                            たまに、ものまねもするアーティスト
                        </>}
                        src={Issue1}
                    />
                </SplideSlide>
            </Splide>

            <Button3 href="#" subTitle="お気軽にお問い合わせください！" >
                無料で入会する
            </Button3>
        </div>

    </SectionBox>
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
        <FadeAndSlideScrollTriggerAnimation className="h-full w-full"
            innerClassName="h-full w-full flex flex-col items-center justify-center gap-0 bg-color4 p-5 gap-4 rounded-3xl overflow-hidden">
            <div className="w-full flex gap-4 bg-color4">
                <div className="bg-color4_1 rounded-lg">
                    <MdPersonOutline size={80} />
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