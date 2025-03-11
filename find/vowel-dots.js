const vowelDots = (str) => {
    const reg = /[aeiou]/gi;
    return str.replace(reg, reg => reg + ".")
}
console.log(vowelDots('example 1, example 20'))