import TopImage from "@/assets/top.png";
import RoseImage from "@/assets/rose.png";
import Link from "next/link";
import { FadeAndSlideScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/FadeAndSlideScrollTriggerAnimation";
import Kon1Image from '@/assets/kon6.jpg';
import Kon2Image from '@/assets/kon7.jpg';
import Bg1 from '@/assets/top.png';
import Bg1_Mobile from '@/assets/top_mobile.jpg';
import Image from 'next-export-optimize-images/picture';
import { TopArt } from "./TopArts";

export const TopSection = () => {
    return (
        <div className="w-full mx-auto relative">
            <TopArt/>

            <div className="absolute flex flex-col justify-center items-center inset-0 m-auto">
                <FadeAndSlideScrollTriggerAnimation  className="font-slight text-[1.8rem] md:text-[3.8rem] font-bold text-[#c3735e]">
                    <></>
                </FadeAndSlideScrollTriggerAnimation>
            </div>
        </div>

    )
}