import { SectionBox } from "@/components/SectionBox"
import { MembersSection2 } from "./MembersSection.member2";
import { Campaign } from "../Campain";
import { motion } from "motion/react";

export const MembersSection = () => {
    return <SectionBox disablePx disableMaxWidth>
        <div className="w-full flex flex-col items-center mx-auto gap-8 justify-center">
            <MembersSection2 />

            <motion.div
                className="w-full p-4 flex flex-col justify-center items-center gap-4 mb-6">
                <motion.div
                    viewport={{ once: true }}
                    transition={{

                        translateY: { type: "spring", bounce: 1, damping: 5, mass: 0.3,  },
                        scale: { type: "spring", bounce: 1, damping: 2, mass: 0.3, },
                        opacity: { duration: 0.3,  },
                    }}
                    initial={{ translateY: "60px", opacity: 0, scale: 0.9 }}
                    whileInView={{ translateY: "0px", opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto p-6 bg-[#893be2] flex flex-col justify-center items-center gap-2 rounded-3xl z-10">
                    <Campaign />
                </motion.div>
            </motion.div>
        </div>

    </SectionBox>
}
