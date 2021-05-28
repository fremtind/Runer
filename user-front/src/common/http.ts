import { Exercise } from "../exercises/exercises";

interface TestResultPayload {
    testResult: Omit<Exercise, "dark"> & {
        text: string;
        duration: number;
        metadata: {
            resolution: {
                height: number;
                width: number;
            };
            windowSize: {
                height: number;
                width: number;
            };
            pixelRatio: number;
        };
    };
}

interface QuestionareResultPayload {
    questionaire: {
        age: string;
        eyesight: string;
        aid: string;
    };
}
export const httpPost = async (
    clientId: string,
    sessionId: string,
    payload: TestResultPayload | QuestionareResultPayload,
) => {
    try {
        await fetch("/api/result", {
            method: "POST",
            body: JSON.stringify({
                client_id: clientId,
                session_id: sessionId,
                ...payload,
            }),
        });
    } catch (e) {
        // hysj... smil og vink
    }
};
