const sameAmount = (str, reg1, reg2) => {
    const rg1 = str.match(new RegExp(reg1, "g")) || [];
    console.log(rg1)
    const rg2 = str.match(new RegExp(reg2, "g")) || [];
    console.log(rg2)
    return reg1.length == reg2.length
}

console.log(sameAmount('example', "dex", "ex"))