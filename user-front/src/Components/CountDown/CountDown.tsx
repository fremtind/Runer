import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CountDown.scss";

type IntervalFunction = () => unknown | void;

export const useInterval = (callback: IntervalFunction, delay: number) => {
    const savedCallback = useRef<IntervalFunction | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            if (savedCallback.current !== null) {
                savedCallback.current();
            }
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};

const countOpacity = [0.2, 0.5, 1.0];

interface Props {
    onFinish: () => void;
}

const CountDown: React.FC<Props> = ({ onFinish }) => {
    useEffect(() => {
        document.title = "Lesbarhetstest | Runer";
    }, []);

    const [count, setCount] = useState(3);
    useInterval(() => {
        if (count === 1) {
            onFinish();
        }
        setCount(count - 1);
    }, 1000);

    return (
        <section className="countdown">
            <p className="countdown__infoText">Teksten du skal lese vil dukke opp her</p>
            <motion.p
                key={count}
                exit={{
                    opacity: 0,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: countOpacity[count - 1] }}
                transition={{
                    ease: "easeOut",
                    duration: 0.8,
                }}
                className={`countdown__number countdown__number--${count}`}
            >
                {count}
            </motion.p>
        </section>
    );
};

export default CountDown;
