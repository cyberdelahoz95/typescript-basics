type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

function sendRequest(cb: CallBack): void {
    if (cb) {
        cb(null, { data: "Succeed" });
    }
}

const anotherRequest: SendRequest = (cb: CallBack): void => {
    if (cb) {
        cb(null, { data: "Succeed" });
    }
};
