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
import { PlanTable } from "./PlanTable";
import { DOMMotionComponents, motion, useInView } from "motion/react"

export const PlansSection = () => {
    return (
        <SectionBox disablePx disableMaxWidth className="bg-gradient1 w-full py-16 !gap-8 relative">
            <div id="plans" className="absolute -top-24" />

            <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">

                <h2 className="text-title1 font-bold">料金プラン</h2>

                <Splide
                    className=""
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
                        <PlanItem title="フリープラン"
                            price="¥0/月"
                            title2="学生におすすめ！"
                            content={<>
                                ・オフライン交流会への参加<br />
                                ・セミナーや講演会への参加<br />
                                ・地域や企業のイベント情報受け取り
                            </>}
                            src={Issue1}
                        />
                    </SplideSlide>
                    <SplideSlide >
                        <PlanItem
                            title="スモールプラン"
                            price="¥1,980/月"
                            title2="フリーランスにおすすめ！"
                            content={<>
                                ・フリープラン機能が全て使える<br />
                                ・Zoom朝活<br />
                                ・スキルやノウハウの情報共有<br />
                                ・チャット交流<br />
                                ・求人や仕事、案件の応募
                            </>}
                            src={Issue1}
                        />
                    </SplideSlide>
                    <SplideSlide >
                        <PlanItem title="ビジネスプラン"
                            price="¥3,980/月"
                            title2="経営者におすすめ！"
                            content={<>
                                ・スモールプラン機能が全て使える<br />
                                ・各種イベントの宣伝し放題<br />
                                ・求人や仕事、案件の発注し放題
                            </>}
                            src={Issue1}
                        />
                    </SplideSlide>
                </Splide>
            </div>
            <Button2 href="#" subTitle="Click!">
                早期入会特典をGET！
            </Button2>
        </SectionBox>
    )
}

const PlanItem = ({ title, title2, price, content, delay, colorClass, href, src }: {
    delay?: number,
    title: ReactNode,
    title2: ReactNode,
    price: ReactNode,
    content: ReactNode,
    colorClass?: string,
    href?: string
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
            className="h-full w-full flex flex-col items-center justify-center bg-color3 p-5 gap-4 rounded-3xl overflow-hidden">
            <h3 className=" text-title3 font-bold">{title2}</h3>
            <h2 className=" text-title1 font-bold">{title}</h2>
            <p className=" h-full w-full rounded-lg">{content}</p>

            <ServiceDialog buttonText="詳細" >
                <PlanTable />
            </ServiceDialog>
        </ motion.div>
    );
}
