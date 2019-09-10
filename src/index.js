
export default (callback, timeout) => {
    const action = () => {
        callback();
        setTimeout(() => action(), timeout);
    };

    action();
};
