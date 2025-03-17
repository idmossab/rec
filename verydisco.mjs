const word = process.argv[2]
if (!word) {
    process.exit(1);
}
const verydisco = (word) => {
    const mid = Math.ceil(word.length / 2)
    const first = word.slice(0, mid)
    const last = word.slice(mid)
    return last + first
}
const result = word.split(" ").map(verydisco).join(" ")

console.log(result)