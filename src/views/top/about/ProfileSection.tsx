import { SectionBox } from "@/components/SectionBox";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import clsx from "clsx";
import Image from 'next-export-optimize-images/picture';
import Profile from "@/assets/profile.webp";

export const ProfileSection = () => <SectionBox className={clsx(
    "grid",
    "grid-cols-1  mx-auto !gap-4 !max-w-xl",
    "md:grid-cols-2 md:!max-w-5xl md:!gap-12"
)}>
    <div className="flex flex-col items-center justify-center gap-4">
        <FadeAndSlideScrollTriggerAnimation tag="h2" className="text-title2 font-bold">小早川（こばやかわ）</FadeAndSlideScrollTriggerAnimation>
        <FadeAndSlideScrollTriggerAnimation innerClassName=""
            transform={{ translate: { y: "60px", }, scale: 1.2 }}>
            <Image src={Profile} alt="img" className="rounded-3xl border-2 border-black" />
        </FadeAndSlideScrollTriggerAnimation>
    </div>

    <div className="flex flex-col items-center justify-center gap-4">
        <div className="mx-auto justify-start flex flex-col items-start gap-1 sm:gap-2 md:gap-3 w-full">
            <FadeAndSlideScrollTriggerAnimation tag="p">
                初めまして！<br />
                広島県と岡山県を拠点に活動している、小早川です<br /><br />

                この度<br />
                中四国地方に特化したオンラインコミュニティ「つながるラボ」を<br />
                スタートさせることになりました！<br /><br />

                このコミュニティでは<br />
                フリーランス、経営者、大学生、独立したい方が中心となって<br />
                「中四国地方で一番盛り上がるコミュニティ」を<br />
                創り上げることを目標としています<br /><br />

                「地方でつながる、地方から輝く」のコンセプトのもと<br />
                人脈、仕事、情報をつなげていきましょう！<br />
            </FadeAndSlideScrollTriggerAnimation>
        </div>
    </div>
</SectionBox>
