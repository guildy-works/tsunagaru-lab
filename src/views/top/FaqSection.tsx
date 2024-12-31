import { SectionBox } from "@/components/SectionBox"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md"
import Image from 'next-export-optimize-images/picture';
import Illust from "@/assets/illust1.webp";
import { motion } from "motion/react";

const data = [
    {
        q: "中四国地方以外の人も参加できますか？",
        a: "もちろんです！ ただしイベントは中四国がメインとなるのでご了承ください"
    },
    {
        q: "朝活は顔出ししなくてもいいですか？",
        a: "顔出しなしでマイクもオフでも大丈夫ですが、顔出しをしてくれると嬉しいです！"
    },
    {
        q: "朝活や交流会は強制参加ですか？",
        a: "参加したいときでOKです！"
    },
    {
        q: "いつでも退会できますか？",
        a: "いつでも退会可能です。メンバー専用LINEにて、お問い合わせお願いします"
    },
    {
        q: "プランの変更はできますか？",
        a: "可能です！ メンバー専用LINEにて、お問い合わせお願いします"
    }
]

export const FaqSection = () => {
    return (
        <SectionBox disableMaxWidth className="mx-auto max-w-4xl !gap-8">
            <h2 className="text-title1 w-full border-b-2 border-color3 pb-4 text-center border-dotted max-w-md">Q&A</h2>

            <div className='w-full divide-y-2 divide-color1/5 border-2 border-black/5 rounded-xl'>
                {data?.map(x => <Disclosure as="div"
                    className="w-full relative group p-2 md:p-6"
                    key={x.a}
                >
                    <DisclosureButton className="py-2 px-3 overflow-hidden text-title4 font-bold cursor-pointer group w-full flex items-center justify-start gap-2">
                        <span className="bg-color3 text-white rounded-md  font-bold px-4 py-2 size-10 flex justify-center items-center">
                            Q
                        </span>
                        <h3 className="ml-4 text-start text-title3 text-color1">
                            {x.q}
                        </h3>
                        <MdArrowDownward className="ml-auto size-5 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel transition
                        className="mt-4 p-1 pt-0 px-3 whitespace-break-spaces transition duration-200 ease-out overflow-hidden data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                        <div className="flex items-center gap-2">
                            <span className="size-10 bg-color2 text-white font-bold rounded-md px-4 py-2 flex items-center justify-center">
                                A
                            </span>
                            <p className="ml-4 text-start text-title4 text-gray-600">
                                {x.a}
                            </p>
                        </div>
                    </DisclosurePanel>
                </Disclosure>)
                }
            </div>

            <motion.div
            transition={{delay:0.5}}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}>
                <Image src={Illust} alt="Q&A"  />
            </motion.div>
        </SectionBox>
    )
}
