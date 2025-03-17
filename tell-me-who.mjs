import { readdir } from 'node:fs/promises';

let files = await readdir(process.argv[2])
files=files.map((e)=>{
    var res=e.split('_').reverse()
    res[0]=res[0].split('.')[0]
    res = res[0] + " "+res[1]
    return res
})
files.sort()
for (let i = 1 ; i <= files.length; i++) {
    files[i - 1] = i + '. ' + files[i- 1]
}
console.log(files.join('\n'))

