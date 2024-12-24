import clsx from "clsx"
import { ReactNode } from "react"
import css from "./Button2.module.scss"

export const Button2 = ({ children, subTitle, className, href }: {
    children?: ReactNode,
    subTitle?: string,
    className?: string,
    href: string
}) => {
    return (
        <a href={href} className={clsx(css.button, className)} >
            {subTitle && <p className={css.btn_balloon}>{subTitle}</p>}
            <p className="text-title3">{children}</p>
        </a>
    )
}