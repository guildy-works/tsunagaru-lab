import { Button2 } from "@/components/Button2";
import { SectionType1 } from "@/components/SectionType1";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";

export const FeaturesSection = () => {

    return (
        <SectionType1 className="md:py-32 bg-gradient1">
            <motion.div
                viewport={{ once: true }}
                transition={{
                    translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3 },
                    scale:{ type: "spring", bounce: 1, damping: 2, mass: 0.3 },
                    opacity: { duration: 0.3, },
                }}
                initial={{ translateY: "60px", opacity: 0,scale:0.9 }}
                whileInView={{ translateY: "0px", opacity: 1,scale:1 }}
                className="max-w-4xl mx-auto p-8  bg-[#893be2] flex flex-col justify-center items-center gap-4 rounded-3xl">
                <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#893be2]" className="text-title2 text-white">早期入会特典</SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#893be2]" className="text-title3 text-white">回避永年割引キャンペーン</SkewScrollTriggerAnimation>
                <Button2 href="#" subTitle="Click!">
                    早期入会特典をGET！
                </Button2>
            </motion.div>
        </SectionType1>

    )
}

const CardItem = ({ title, content, colorClass, delay, href }: { delay: number, title: ReactNode, content: ReactNode, colorClass: string, href: string }) => {
    return (
        <Link href={href}>
            <FadeAndSlideScrollTriggerAnimation
                delay={delay}
                className={`size-full text-center p-3 sm:p-6 rounded-3xl flex flex-col justify-center items-center min-h-28 ${colorClass}`}>

                <h2 className="text-size2 text-white mb-2 border-b-orange-100 border-b-2  pb-2 w-full whitespace-pre">{title}</h2>
                <p className="text-p text-white">{content}</p>
            </FadeAndSlideScrollTriggerAnimation>
        </Link>
    );
};

const CardGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CardItem
                href="#support"
                title="どんな婚活サポート？"
                delay={0}
                content={<>「お得」「効率的」<br className="sm:hidden" />「幸せ」</>}
                colorClass="bg-color9"
            />
            <CardItem
                href="/services#service1"
                delay={0.2}
                title={<>お得なサービスが<br className="md:hidden" />受けれるお店一覧</>}
                content="婚活～結婚に有益なお店"
                colorClass="bg-color10"
            />
            <CardItem
                delay={0.4}
                href="#reviews"
                title="お客様の声"
                content={<>福山市No1の<br className="sm:hidden" />Google口コミ</>}
                colorClass="bg-color11"
            />
            <CardItem
                delay={0.6}
                href="#mariage"
                title="結婚相談所"
                content={<>「入会金・登録費」<br className="sm:hidden" />初期費用が0円</>}
                colorClass="bg-color9"
            />
            <CardItem
                delay={0.8}
                href="#events"
                title="婚活イベント"
                content={<>96％の確率で<br className="sm:hidden" />カップリング成立</>}
                colorClass="bg-color10"
            />
            <CardItem
                href="#consultants"
                delay={1}
                title="恋愛相談窓口"
                content={<>初回15分無料<br className="sm:hidden" />まずは、ココから！</>}
                colorClass="bg-color11"
            />
        </div>
    );
};

