import { Button2 } from "@/components/Button2";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";

export const Campaign = () => <>
    <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#893be2]" className="text-title4 text-white">LINE登録者限定</SkewScrollTriggerAnimation>
    <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#893be2]" className="text-title3 text-white">無料キャンペーン！</SkewScrollTriggerAnimation>
    <Button2 href={resources.links.line} subTitle="Click!" className='mt-2'>
        LINEで受け取る
    </Button2>
</>