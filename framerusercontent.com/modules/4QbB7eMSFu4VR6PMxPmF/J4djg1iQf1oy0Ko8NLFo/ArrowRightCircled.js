let e;
var i = r => {
    if (!e) {
        let o = function(t, n) {
            return r.createElement("svg", {
                width: "100%",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
                ...t
            }, r.createElement("path", {
                d: "M8 12h8m0 0l-3.5-3.5M16 12l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        };
        e = r.forwardRef(o)
    }
    return e
};
export {
    i as
    default
};