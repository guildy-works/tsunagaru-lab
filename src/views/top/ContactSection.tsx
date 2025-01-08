import { SectionType1 } from "@/components/SectionType1"
import { SnsLinkList } from "@/components/SnsLinkList"
import Image from 'next-export-optimize-images/picture';

import LineQR from "@/assets/LineQR.png"
import { Button2 } from "@/components/Button2";
import { Button3 } from "@/components/Button3";
import { Button } from "@headlessui/react";
import { ButtonRightArrow } from "@/components/ButtonRightArrow";
import { motion } from "motion/react";
import Link from "next/link";
import Line from '@/assets/sns/LINE.svg'
import Discord from '@/assets/sns/Discord.svg'
import { resources } from "@/resources";

export const ContactSection = () => {

    return (
        <SectionType1 disableLine className="bg-gradient2" innerClassName="items-center relative">
            <div id="contacts" className="absolute -top-24" />

            <motion.div
                viewport={{ once: true }}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="rounded-2xl bg-white p-8 md:p-16 md:px-48 w-full my-8 md:my-32 flex flex-col">
                <h2 className="text-title2 font-jost text-center mb-2">お問い合わせ</h2>
                <p className="text-center text-color0/60 mb-8">詳細、入会などはこちらから</p>

                <motion.div
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1 }}
                    className='w-full text-center text-color10 text-title3'>
                    お気軽に<br className='' />
                    お問い合わせください
                </motion.div>

                <Link
                    target="_blank"
                    href={resources.links.line}
                    className="mx-auto mt-8 flex items-center gap-3 bg-color3 rounded-full text-white text-title3 px-8 py-2 hover:bg-color3/70">
                    <Image src={Line} alt="Line" className="w-12" />
                    公式LINEを追加する
                </Link>

                <ButtonRightArrow className="w-fit mx-auto mt-8" href={resources.links.discord} >
                    <div className="flex items-center gap-3">
                        <Image src={Discord} alt="Line" className="w-12" />
                        <div className="flex flex-col items-center gap-2 text-[1rem] leading-[1.6rem]">
                            無料で<br />
                            つながるラボを<br/>
                            覗いてみませんか？
                        </div>
                    </div>

                </ButtonRightArrow>

            </motion.div>

        </SectionType1>
    )
}


const ArrowSvg = () => <svg xmlns="http://www.w3.org/2000/svg" width="408"
    className="w-full"
    zoomAndPan="magnify" viewBox="0 0 306 86.999996" height="116"
    preserveAspectRatio="xMidYMid meet" version="1.0">
    <defs>
        <clipPath id="1">
            <path d="M 0 0 L 306 0 L 306 86.398438 L 0 86.398438 Z M 0 0 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="2">
            <path
                d="M 262.671875 0 L 0 0 L 0 86.398438 L 262.671875 86.398438 L 305.875 43.199219 Z M 262.671875 0 "
                clipRule="nonzero" />
        </clipPath>
    </defs>
    <rect fill="#ffffff" y="-8.7" height="104.399995" fillOpacity="1" />
    <g clipPath="url(#1)">
        <g clipPath="url(#2)">
            <path fill="#8c52ff"
                d="M 0 0 L 305.773438 0 L 305.773438 86.398438 L 0 86.398438 Z M 0 0 "
                fillOpacity="1" fillRule="nonzero" />
        </g>
    </g>
</svg>