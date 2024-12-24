import clsx from "clsx"
import { ReactNode } from "react"
import css from "./Button3.module.scss"
import Link from "next/link"

export const Button3 = ({ children, subTitle, className, href }: { children?: ReactNode, subTitle?: string, className?: string, href: string }) => {

    return (
        <div className={clsx("flex flex-col items-center h-24 w-fit",className )}>
            {subTitle && <div className={css.tooltip}>{subTitle}</div>}
            <div className={clsx(css.button)}>
                <Link href={href}>{children}</Link>
            </div>
        </div>
    )
}