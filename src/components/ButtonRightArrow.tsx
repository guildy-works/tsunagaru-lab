import { MouseEventHandler, ReactNode } from "react"
import styles from "./ButtonRightArrow.module.scss"
import clsx from "clsx"

export const ButtonRightArrow = ({ onClick, children ,className}: { onClick?: MouseEventHandler, className?:string, children: ReactNode }) => {


    return (
        <button onClick={onClick} className={clsx("flex cursor-pointer overflow-hidden", styles.button,className)}>
            <div className={clsx("h-full  bg-[#5865f2] flex-1",styles.left)}>
                {children}
            </div>
            <div className={styles.triangle}></div>
        </button>
    )
}