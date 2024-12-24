import { SectionBox } from "@/components/SectionBox"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { MdArrowDownward, MdArrowDropDown } from "react-icons/md"
import Image from 'next-export-optimize-images/picture';
import Illust from "@/assets/illust1.webp";


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
                    <DisclosureButton className="py-2 px-3 overflow-hidden text-title4 font-bold cursor-pointer group flex w-full items-center justify-between">
                        <h3 className="text-start text-title3 text-color1">
                            {x.q}
                        </h3>
                        <MdArrowDownward className="size-5 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel transition className="p-1 pt-0 px-3 whitespace-break-spaces transition duration-200 ease-out overflow-hidden data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                        <p className="text-start text-title4 text-gray-600">
                            {x.a}
                        </p>
                    </DisclosurePanel>
                </Disclosure>)
                }
            </div>

            <Image src={Illust} alt="Q&A" className="w-full" />
        </SectionBox>
    )
}
