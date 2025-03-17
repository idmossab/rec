// Throttle.
function throttle(func, wait) {
    let isThrottle = false
    return (...arg) => {
        if (!isThrottle) {
            func(...arg)
            isThrottle = true
            setTimeout(() => {
                isThrottle = false
            }, wait)
        }
    }
}

const opThrottle = (func, wait, { leading = false, trailing = false } = {}) => {
    let shouldWait = false
    return (...arg) => {
        if (!leading && !trailing) return
        if (shouldWait) return
        if (leading) {
            func(...arg)
        }
        shouldWait = true
        setTimeout(() => {
            if (!leading && trailing) {
                return func(...arg)
            }
            shouldWait = false
        }, wait)
    }
}