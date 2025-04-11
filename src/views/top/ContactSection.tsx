import { SectionType1 } from "@/components/SectionType1"
import Image from 'next-export-optimize-images/picture';
import { motion } from "motion/react";
import Link from "next/link";
import Line from '@/assets/sns/LINE.svg'
import ReccomendsBalloon from '@/assets/recommends-balloon.png'
import { resources } from "@/resources";
import { MdEmail } from "react-icons/md";

export const ContactSection = () => {

    return (
        <>
            <SectionType1 disableLine className="bg-gradient2" innerClassName="items-center relative">
                <div id="contacts" className="absolute -top-24" />

                <motion.div
                    viewport={{ once: true }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="rounded-2xl bg-white p-8 md:p-16 md:px-48 w-full my-8 md:my-32 !mb-8 flex flex-col">
                    <h2 className="text-title2 text-center mb-2">⼊会はコチラ</h2>
                    <p className="text-center text-color0/60 mb-8">お気軽にお問い合わせください</p>

                    <motion.div
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        className='w-full text-center text-color10 text-title3'>
                        ＼無料キャンペーン実施中∕
                    </motion.div>

                    <Link
                        target="_blank"
                        href={resources.links.line}
                        className="relative mx-auto mt-8 flex items-center gap-3 bg-color3 rounded-full text-center text-white text-title3 px-8 py-2 hover:bg-color3/90 w-full max-w-[380px]">
                        <Image src={Line} alt="Line" className="w-12" />
                        <Image src={ReccomendsBalloon} alt="Line" className="absolute -right-4 top-0 w-32 translate-x-1/4 -translate-y-1/2" />
                       <span className="ml-10 md:ml-14">⼊会する</span> 
                    </Link>

                    <Link
                        target="_blank"
                        href={resources.links.mail}
                        className="mx-auto mt-4 flex items-center gap-3 bg-color0 rounded-full text-white text-title3 px-8 py-2 hover:bg-color0/90 w-full max-w-[380px]">
                        <MdEmail className="text-[2.8rem] ml-1" />
                        メールでお問い合わせ
                    </Link>

                </motion.div>
            </SectionType1>
        </>
    )
}
