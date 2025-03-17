const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait);
    }
}

const opDebounce = (func, wait, leading = false) => {
    let isFirstCall = true
    let timeout
    return (...arg) => {
        if (isFirstCall && leading) {
            isFirstCall = false
            return func(...arg)
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            isFirstCall = true
            return func(...arg)
        }, wait)
    }
}