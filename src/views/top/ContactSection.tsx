import { SectionType1 } from "@/components/SectionType1"
import { SnsLinkList } from "@/components/SnsLinkList"
import Image from 'next-export-optimize-images/picture';

import LineQR from "@/assets/LineQR.png"
import { Button2 } from "@/components/Button2";
import { Button3 } from "@/components/Button3";
import { Button } from "@headlessui/react";
import { ButtonRightArrow } from "@/components/ButtonRightArrow";
import { motion } from "motion/react";

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
                <p className="text-center text-gray-600 mb-8">詳細、入会などはこちらから</p>

                <SnsLinkList />

                <Button className="mx-auto mt-8 bg-color3 rounded-full text-white text-title3 px-8 py-4">
                    公式LINEを追加する
                </Button>

                <ButtonRightArrow className="w-fit mx-auto mt-8">
                    無料で<br />
                    つながるラボを<br className="sm:hidden" />
                    覗いてみませんか？
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