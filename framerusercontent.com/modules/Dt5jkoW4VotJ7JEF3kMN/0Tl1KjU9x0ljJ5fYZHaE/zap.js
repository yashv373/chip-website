let r;
var p = o => {
    if (!r) {
        const n = o.forwardRef(({
            color: t = "currentColor",
            size: e = 24,
            ...i
        }, s) => o.createElement("svg", {
            ref: s,
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: t,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...i
        }, o.createElement("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        })));
        n.displayName = "Zap", r = n
    }
    return r
};
export {
    p as
    default
};