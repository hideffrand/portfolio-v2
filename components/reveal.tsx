// components/reveal.tsx
"use client"

import { motion, Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "fade"

const variantMap: Record<Direction, Variants> = {
    up: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    className = "",
    once = true,
    amount = 0.2,
}: {
    children: React.ReactNode
    direction?: Direction
    delay?: number
    duration?: number
    className?: string
    once?: boolean
    amount?: number
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variantMap[direction]}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}