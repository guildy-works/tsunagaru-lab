import { SectionBox } from "@/components/SectionBox";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import Image from 'next-export-optimize-images/picture';
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { Button2 } from "@/components/Button2";
import { SectionType1 } from "@/components/SectionType1";
import { Button3 } from "@/components/Button3";
import Issue1 from "@/assets/issue1.webp";
import { ServiceDialog } from "@/components/ServiceDialog";
import { PlanSheet, PlanTable } from "./PlanTable";
import { DOMMotionComponents, motion, useInView } from "motion/react"
import { resources } from "@/resources";
import { HighlightMarker } from "@/components/HighlightMarker";

export const PlansSection = () => {
    return (
        <SectionBox disablePx disableMaxWidth className="bg-gradient1 w-full py-16 !gap-8 relative">
            <div id="plans" className="absolute -top-24" />
            <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

                <h2 className="text-title1 font-bold">料金プラン</h2>

                <Splide
                    className="mx-auto max-w-full"
                    options={{
                        autoplay: false,
                        rewind: false,
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
                        <PlanItem title={<>フリープラン</>}
                            price="¥0/月"
                            title2={<>学生におすすめ！</>}
                            content={<ul className="list-disc px-4">
                                <li>オフライン交流会への参加</li>
                                <li>セミナーや講演会への参加</li>
                                <li>地域や企業のイベント情報<br />
                                    受け取り</li>
                            </ul>}
                            markerClassName="bg-color4"
                            src={Issue1}
                        />
                    </SplideSlide>
                    <SplideSlide >
                        <PlanItem
                            title={<>スモールプラン</>}
                            price="¥1,980/月"
                            markerClassName="bg-color1"
                            title2={<>フリーランスにおすすめ！</>}
                            content={<ul className="list-disc px-4">
                                <li>フリープラン機能が全て使える</li>
                                <li>Zoom朝活</li>
                                <li>スキルやノウハウの情報共有</li>
                                <li>チャット交流 </li>
                                <li>求人や仕事、案件の応募</li>
                            </ul>}
                            src={Issue1}
                        />
                    </SplideSlide>
                    <SplideSlide >
                        <PlanItem title={<>ビジネスプラン</>}
                            markerClassName="bg-color2"
                            price="¥3,980/月"
                            title2={<>経営者におすすめ！</>}
                            content={<ul className="list-disc px-4">
                                <li>スモールプラン機能が<br />
                                    全て使える</li>
                                <li>各種イベントの宣伝し放題</li>
                                <li>求人や仕事、案件の発注し放題</li>
                            </ul>}
                            src={Issue1}
                        />
                    </SplideSlide>
                </Splide>
            </div>

            <ServiceDialog buttonText="詳細" >
                <PlanTable />
            </ServiceDialog>
            <Button2 href={resources.links.line} subTitle="Click!">
                早期入会特典をGET！
            </Button2>
        </SectionBox>
    )
}

const PlanItem = ({ title, title2, price, content, delay, markerClassName, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    title2: ReactNode,
    price: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string,
    markerClassName?: string,
    src: StaticImageData
}) => {
    return (
        <motion.div
            viewport={{ once: true }}
            transition={{
                scale: { type: "spring", duration: 0.5, delay },
                opacity: { duration: 0.3, },
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-full w-80 flex flex-col items-center justify-center bg-color3 p-8 gap-3 rounded-3xl overflow-hidden">
            <div>
                <HighlightMarker
                    className=" text-title4 font-bold text-center"
                    markerClassName={markerClassName}
                >{title2}</HighlightMarker>
            </div>

            <h2 className=" text-title2 font-bold text-center">{title}</h2>

            <div className="w-full">
                <hr className="w-full border-font1 border" />

            </div>

            <h3 className="text-title2">{price}</h3>

            <div className=" h-full w-full">{content}</div>
        </ motion.div>
    );
}
