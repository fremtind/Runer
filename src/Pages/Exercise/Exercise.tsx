import React, {useEffect, useState} from 'react';
import './Exercise.scss';
import TestGenerator from "../../Components/TestGenerator";

const Exercise = () => {
    useEffect(() => {
        document.title = 'Exercise';
    }, []);

    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [testNumber, setTestNumber] = useState<number>(0);

    return (
        <section className="exercise">
            <TestGenerator
                text="Hello Hello Hello!"
                backgroundColor="black"
                fontColor="white"
                fontFamily="sans-serif"
                fontSize="26px"
            />
        </section>
    );
};

export default Exercise;
