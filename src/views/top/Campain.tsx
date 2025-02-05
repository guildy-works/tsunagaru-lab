import { Button2 } from "@/components/Button2";
import { SkewScrollTriggerAnimation } from "@/libs/ScrollTriggerAnimations/SkewScrollTriggerAnimation";
import { resources } from "@/resources";
import styles from "@/components/Strong.module.scss"
import clsx from "clsx";
import { motion } from "motion/react";
import css from "@/components/Balloon.module.scss"
import Lines3 from "@/assets/lines3.png"
import Image from 'next-export-optimize-images/picture';

export const Campaign = () => <>
    <div className="w-full p-4 flex flex-col justify-center items-center gap-4 relative">

        <motion.div
            viewport={{ once: true }}
            transition={{

                translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3, },
                scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, },
                opacity: { duration: 0.3, },
            }}
            initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
            className="relative max-w-4xl mx-auto p-8 bg-[#8355f6] flex flex-col justify-center items-center gap-2 rounded-3xl z-10">
            <div className={css.balloon_container}>
                <div className="relative size-full">
                    <div className={css.balloon2} />
                    <div className={css.balloon}>
                        <div className={css.balloon3}>
                            <svg className="fill-white w-9 -rotate-[20deg]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path d="M25.12,44.521c-2.114,1.162-2.024-0.549-1.933-1.076c0.054-0.314,0.3-1.787,0.3-1.787c0.07-0.534,0.144-1.36-0.067-1.887 c-0.235-0.58-1.166-0.882-1.85-1.029C11.48,37.415,4.011,30.4,4.011,22.025c0-9.342,9.42-16.943,20.995-16.943S46,12.683,46,22.025 C46,32.517,34.872,39.159,25.12,44.521z M18.369,25.845c0-0.56-0.459-1.015-1.023-1.015h-2.856v-6.678 c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015v7.694c0,0.561,0.459,1.016,1.023,1.016h3.879 C17.91,26.863,18.369,26.406,18.369,25.845z M21.357,18.152c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015 v7.694c0,0.561,0.459,1.016,1.023,1.016c0.565,0,1.023-0.456,1.023-1.016V18.152z M30.697,18.152c0-0.56-0.459-1.015-1.023-1.015 c-0.565,0-1.025,0.455-1.025,1.015v4.761l-3.978-5.369c-0.192-0.254-0.499-0.406-0.818-0.406c-0.11,0-0.219,0.016-0.325,0.052 c-0.419,0.139-0.7,0.526-0.7,0.963v7.694c0,0.561,0.46,1.016,1.025,1.016c0.566,0,1.025-0.456,1.025-1.016v-4.759l3.976,5.369 c0.192,0.254,0.498,0.406,0.818,0.406c0.109,0,0.219-0.018,0.325-0.053c0.42-0.137,0.7-0.524,0.7-0.963V18.152z M36.975,20.984 h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015c0-0.56-0.46-1.015-1.025-1.015h-3.879c-0.565,0-1.023,0.455-1.023,1.015 c0,0.001,0,0.001,0,0.003v3.842v0.001c0,0,0,0,0,0.001v3.845c0,0.561,0.46,1.016,1.023,1.016h3.879 c0.565,0,1.025-0.456,1.025-1.016c0-0.56-0.46-1.015-1.025-1.015h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015 c0-0.561-0.46-1.016-1.025-1.016V20.984z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden flex flex-col items-center justify-center">
                <SkewScrollTriggerAnimation tag="h2" skewPanelClass="!bg-[#8355f6]" className={clsx("text-[1.6rem] leading-[1.6rem] text-white", styles.tooltip)}>LINE登録者限定</SkewScrollTriggerAnimation>
                <SkewScrollTriggerAnimation tag="h3" skewPanelClass="!bg-[#8355f6]" className="-mt-2 text-[2.4rem] leading-[2.4rem] pt-6 pb-2 font-bold text-white relative">
                    無料キャンペーン！

                    <Image src={Lines3} alt="lines" className="absolute -top-2 right-3 w-7 -rotate-12" />
                </SkewScrollTriggerAnimation>
            </div>
            <Button2 href={resources.links.line} subTitle="Click!" className='mt-1'>
                LINEで受け取る
            </Button2>
        </motion.div>
    </div>
</>