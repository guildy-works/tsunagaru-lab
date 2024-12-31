import Line from '@/assets/sns/LINE.svg'
import Instagram from '@/assets/sns/Instagram.svg'
import X from '@/assets/sns/X.svg'
import Image from 'next-export-optimize-images/picture';
import { DOMMotionComponents, motion, useInView } from "motion/react"

export const SnsLinkList = ({ disableMessage }: { disableMessage?: boolean }) => {
    return (
        <div className="flex gap-2 md:gap-4 flex-wrap justify-center p-6">
            <motion.a
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
            >
                <Image src={X} alt="X" className="w-12" />
            </motion.a>
            <motion.a
                transition={{ delay: 0.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="X (Twitter)">
                <Image src={Instagram} alt="Instagram" className="w-12" />
            </motion.a>
            <motion.a
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                href="/"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LINE">
                <Image src={Line} alt="Line" className="w-12" />
            </motion.a>
            {!disableMessage &&
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='w-full text-center text-color10 text-title3'>
                    DMでお気軽に<br className='sm:hidden' />
                    お問い合わせください
                </motion.div>
            }
        </div>
    )
}