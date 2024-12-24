import Link from "next/link";
import { menuItems } from "./Header";
import { SnsLinkList } from "@/components/SnsLinkList";
import Logo from "@/assets/logo.png";
import Image from 'next-export-optimize-images/picture';


export const Footer = () => {
    return (
        <footer className="bg-color0 text-white pt-16 pb-8 w-full">
            <Image className="mx-auto" src={Logo} alt="つながるラボ" width={160} height={160} />

            <div className="mx-auto px-4  w-full mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* ロゴと会社情報 */}
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="text-title2 text-color3">つながるラボ</h2>
                        <p className="text-gray-600">
                        つながるラボ
                        </p>

                        <SnsLinkList />
                    </div>

                    {/* サイトマップ */}
                    <div className="md:col-span-2 flex flex-col items-center">
                        <h2 className="text-title3 mb-6">サイトマップ</h2>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-white hover:text-gray-900 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="w-full border-t border-gray-300 mt-12 pt-8">
                    <p className="text-center text-white">
                        © {new Date().getFullYear()} つながるラボ. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
