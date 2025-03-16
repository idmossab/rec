const word=process.argv[2]

if(!word){
   // console.log("error");
    process.exit(1)
}
const verydisco=(word)=>{
    let mid=Math.ceil(word.length/2)
    let first=word.slice(0,mid)
    let last =word.slice(mid)
    return last+first
}
export let result =word.split(" ").map((e)=>verydisco(e)).join(" ")
console.log(result)