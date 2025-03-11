const ionOut = (str) => {
    const reg = /\w+(t)(?=ion)/g
    return str.match(reg) || []
}

console.log(ionOut('creation  1, attention 20 bomber breate'))