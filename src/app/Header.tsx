import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Link from "next/link";
import { Button, Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { MdClose, MdMenu } from 'react-icons/md';
import { SnsLinkList } from '@/components/SnsLinkList';
import { FadeAndSlideAnimation } from '@/libs/Animations/FadeAndSlideAnimation';
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';

import { useScrollState } from '@/libs/ScrollTrigger';

type MenuItem = {
    href: string;
    label: string;
    label2?: string; // サブタイトル
    childlen?: MenuItem[]; // 子要素がある場合
};
export const menuItems: MenuItem[] = [
    { href: "/", label: "TOP" },
    { href: "/#orner", label: "オーナー挨拶" },
    { href: "/#about", label: "つながるラボでできること" },
    { href: "/#plans", label: "料金プラン" },
    { href: "/#mission", label: "ミッション" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const state = useScrollState()

    return (
        <>
            <header className="flex items-center sticky top-0 mt-0 bg-gradient-opacity backdrop-blur-lg z-20 border-b border-black/5">
                <Link href="/">
                    <Image src={Logo} alt="Logo" className='w-[60px] md:w-[120px]' />
                </Link>

                {/* Desktop */}
                <nav className="hidden w-full md:flex gap-6 justify-end py-8 px-20">

                    <div className='ml-auto' />
                    {menuItems.map((item, index) => {
                        return (
                            <div className="relative group" key={index}>
                                {item.childlen?.length
                                    ? (
                                        <Popover>
                                            {() => (<>
                                                <PopoverButton as={Fragment}>
                                                    {
                                                        () => <button
                                                            onMouseEnter={({ target }) => (target as any)?.click()}
                                                            className="cursor-pointer text-navigation py-2 inline-block relative outline-0">
                                                            {item.label}
                                                        </button>
                                                    }
                                                </PopoverButton>

                                                <PopoverPanel
                                                    transition
                                                    anchor="bottom"
                                                    className="w-80 origin-top-right rounded-xl border border-black/5 backdrop-blur-md bg-red-50/70 p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                                                >
                                                    {item.childlen?.map((child, index) => (
                                                        <div key={index}>
                                                            <Link
                                                                href={child.href}
                                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-5 hover:bg-red-200/20"
                                                            >
                                                                <span>{child.label}</span>
                                                                {child.label2 && (
                                                                    <small className="ml-2">{child.label2}</small>
                                                                )}
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </PopoverPanel>
                                            </>)
                                            }
                                        </Popover>
                                    )
                                    :
                                    <Link
                                        href={item.href}
                                        className="text-navigation font-bold py-2 inline-block relative "
                                    >
                                        {item.label}
                                    </Link>
                                }
                            </div>
                        )
                    })}
                </nav>

                <Button className="ml-auto min-w-32 mr-4 gap-2 rounded-lg flex items-center justify-center bg-color2 py-2 px-4 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-color2/80">
                    入会はコチラ
                </Button>

                {/* Mobile */}
                <nav className="flex md:hidden gap-6 py-2">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex items-center justify-center p-2 w-12 h-12 rounded-full text-color3 hover:bg-color3/10">
                        <MdMenu size={48} />
                    </button>

                    <Drawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </nav>
            </header>
        </>
    );
};

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen, children }: React.PropsWithChildren<Props>) => {
    const close = () => setIsOpen(false);

    return (

        <Dialog transition open={isOpen} as="div"
            className="relative z-50 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
            onClose={close}>
            <div className="fixed inset-0 z-50">
                <DialogPanel className="relative bg-white/80 backdrop-blur-lg w-full h-screen p-4 flex flex-col items-center">

                    <h1 className='py-6 text-title2 font-slight text-color3'>Match Bond</h1>

                    <nav className="flex flex-col gap-6 h-full justify-center items-start">
                        {menuItems.map((item, index) => (
                            <FadeAndSlideAnimation in key={item.href} delay={index * 50} className="flex flex-col gap-4">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    key={index}
                                    href={item.href}
                                    className="text-navigation hover:text-color3 transition duration-300"
                                >
                                    {item.label}
                                </Link>
                                {
                                    item.childlen?.length && (
                                        item.childlen?.map(
                                            (child, index) => (
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    key={child.href}
                                                    href={child.href}
                                                    className="ml-4 text-navigation hover:text-color3 transition duration-300"
                                                >
                                                    {child.label}
                                                </Link>
                                            )
                                        )
                                    )
                                }
                            </FadeAndSlideAnimation>
                        ))}
                    </nav>
                    <Image className="mb-8" src={Logo} alt="つながるラボ" width={120} height={120} loading="lazy" />

                    <SnsLinkList />

                    <button data-collapse-toggle="navbar-hamburger"
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="absolute top-4 right-4 inline-flex items-center justify-center p-2 w-12 h-12 text-sm rounded-full text-color3 hover:bg-color3/10"
                    >
                        <MdClose size={24} />
                    </button>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
