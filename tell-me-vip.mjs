import { readdir,readFile,writeFile } from 'node:fs/promises';

let resultVip=[]

try{
    let dir=await readdir(process.argv[2])
    for(const file of dir){
        let guessYes=await readFile(process.argv[2]+'/'+file)
        guessYes=JSON.parse(guessYes)
        if(guessYes.answer=="yes"){
            resultVip.push(file)
        }
    }
    console.log(resultVip)
    resultVip=resultVip.map((e)=>{
        let res=e.split('_').reverse()
        res[0]=res[0].split('.')[0]
        return res.join(' ')
    })
    resultVip.sort()
    console.log(resultVip)
    for(let i=0;i<resultVip.length;i++){
        resultVip[i]=i+1+'. '+resultVip[i]
    }
    writeFile('vip.txt',resultVip.join('\n'))
}
catch(err){
    throw new Error(err.message)
}