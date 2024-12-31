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
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { MembersSection2 } from "./MembersSection.member2";

export const MembersSection = () => {
    return <SectionBox disablePx disableMaxWidth>
        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">
            <MembersSection2 />

            <Button3 href="#" subTitle="お気軽にお問い合わせください！" >
                無料で入会する
            </Button3>
        </div>

    </SectionBox>
}
