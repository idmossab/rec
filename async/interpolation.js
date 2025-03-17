const interpolation = ({ step, start, end, callback, duration }) => {
    let d = start
    let t = duration / step
    let distance = (end - start) / step
    for (let i = 1; i <= step; i++) {
        setTimeout(() => {
            callback([d, t * i])
            d += distance
        }, t * i);
    }
}