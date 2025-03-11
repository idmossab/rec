const letterSpaceNumber = (str) => {
    const reg = /\w\s\d{1}\b/g;
    return str.match(reg) || []
}

console.log(letterSpaceNumber('example 1, example 20'))