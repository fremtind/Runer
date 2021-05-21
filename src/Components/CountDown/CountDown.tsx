import React, {useEffect, useRef, useState} from 'react';
import './CountDown.scss';
import {ICountDown} from "../../Utilities/Interfaces";
import {IIntervalFunction} from "../../Utilities/Types";

export const useInterval = (callback: IIntervalFunction, delay: number) => {
    const savedCallback = useRef<IIntervalFunction | null>(null);

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

const CountDown: React.FC<ICountDown> = ({
    setShowCountDown
}) => {
    useEffect(() => {
        document.title = 'Get Ready!';
    }, []);

    const [count, setCount] = useState(3);
    useInterval(() => {
        if (count === 1) {
            setShowCountDown(false);
        }
        setCount(count - 1);
    }, 1000);

    return (
        <section className="countdown">
            <p className="countdown__infoText">Teksten du skal lese vil dukke opp her</p>
            <p className="countdown__number">{count}</p>
        </section>
    );
};

export default CountDown;
