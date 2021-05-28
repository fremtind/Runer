import { useEffect, useState, CSSProperties, useMemo } from "react";
import { useHistory } from "react-router";
import { PrimaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import styled from "styled-components";
import { Footer } from "../../Components/Footer";
import CountDown from "../../Components/CountDown";
import rawExercises, { baseLine } from "../../exercises/exercises";
import texts from "../../exercises/texts";
import "./Exercise.scss";
import { httpPost } from "../../common/http";
import { useSession } from "../../common/sessionContext";

const StyledMain = styled.main((props: CSSProperties) => ({
    ...props,
}));

// randomize order
const rngExercises = rawExercises.sort(() => 0.5 - Math.random());
const exercises = [baseLine, ...rngExercises];

const useSlideControl = () => {
    const history = useHistory();
    const { clientId, testSession } = useSession();

    const [state, setState] = useState<{
        showCountdown: boolean;
        activeTest: number;
        testStart: null | Date;
    }>({
        showCountdown: true,
        activeTest: 0,
        testStart: null,
    });

    const currentExercise = useMemo(() => {
        return {
            ...exercises[state.activeTest],
            text: texts[state.activeTest % texts.length],
        };
    }, [state]);

    const onCountdownFinish = () => {
        setState({
            ...state,
            showCountdown: false,
            testStart: new Date(),
        });
    };

    const onFinishExercise = () => {
        httpPost(clientId, testSession, {
            testResult: {
                duration: Date.now() / 1000 - state.testStart!.getTime() / 1000,
                styles: JSON.stringify(currentExercise.styles),
                text: currentExercise.text,
            },
        });

        if (state.activeTest + 1 >= exercises.length) {
            history.push("/tusen-takk");
            return;
        }

        setState({
            showCountdown: true,
            activeTest: state.activeTest + 1,
            testStart: null,
        });
    };

    return { currentExercise, showCountdown: state.showCountdown, onCountdownFinish, onFinishExercise };
};

const Exercise = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = "Lesetest | Runer";
    }, []);

    const { currentExercise, onCountdownFinish, onFinishExercise, showCountdown } = useSlideControl();

    if (showCountdown) {
        return (
            <>
                <StyledMain className="exercise-page" style={currentExercise.styles}>
                    <CountDown onFinish={onCountdownFinish} />
                </StyledMain>
                <Footer style={currentExercise.styles}>
                    <PrimaryButton disabled>Ferdig å lese</PrimaryButton>
                    <TertiaryButton inverted={currentExercise.dark} onClick={() => history.push("/tusen-takk")}>
                        Avbryt testen
                    </TertiaryButton>
                </Footer>
            </>
        );
    }

    return (
        <>
            <StyledMain className="exercise-page" style={currentExercise.styles}>
                <article>{currentExercise.text}</article>
            </StyledMain>
            <Footer style={currentExercise.styles}>
                <PrimaryButton
                    onClick={() => {
                        onFinishExercise();
                    }}
                    inverted={currentExercise.dark}
                >
                    Ferdig å lese
                </PrimaryButton>
                <TertiaryButton inverted={currentExercise.dark} onClick={() => history.push("/tusen-takk")}>
                    Avbryt testen
                </TertiaryButton>
            </Footer>
        </>
    );
};

export default Exercise;
