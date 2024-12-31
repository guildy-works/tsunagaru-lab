import clsx from "clsx"
import { MouseEventHandler, ReactNode } from "react"
import css from "./Button1.module.scss"
import Link from "next/link"
import { Button } from "@headlessui/react"

export const Button1 = ({ children, className,onClick }: {
    children?: ReactNode,
    onClick: MouseEventHandler | undefined, className?: string,
}) => {
    return (
        <Button className={clsx(css.button,className)} onClick={onClick}>
            {children}
        </Button>
    )
}