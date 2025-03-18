// import { readdir, writeFile, readFile } from 'node:fs/promises';
// import { argv } from 'node:process';

// //array for guess answer YES
// let guestsFile = []

// try {
//     // read file guess
//     let dir = await readdir(argv[2])

//     // for read file in folder guess
//     for (let file of dir) {
//         // read json as file
//         let result = await readFile(argv[2] + '/' + file, 'utf8')
//         result = JSON.parse(result)//parse to string 

//         // check if answer is YES
//         if (result.answer === 'yes') {
//             guestsFile.push(file)
//         }
//     }

//     // edit to get this Lastname  Lastname
//     guestsFile = guestsFile.map(value => {
//         let result = value.split('_').reverse()
//         result[0] = result[0].split('.')[0]     //delete .json from name
//         return result.join(' ')
//     })

//     //sort
//     guestsFile.sort()

//     // added number to name
//     for (let i = 1; i <= guestsFile.length; i++) {
//         guestsFile[i - 1] = i + '. ' + guestsFile[i - 1]
//     }

//     //write in vip.txt
//     writeFile('vip.txt', guestsFile.join('\n'))//The output must print one guest per line

// } catch (err) {
//     console.error(err.message)
// }



import { readdir, readFile, writeFile } from 'node:fs/promises';

let resultVip = []


try {
    let dir = await readdir(process.argv[2])
    for (let file of dir) {
        let guess = await readFile(process.argv[2] + '/' + file, 'utf-8')
        guess = JSON.parse(guess)
        // console.log(guess)
        if (guess.answer == "yes") {
            resultVip.push(file)
        }
    }
    resultVip=resultVip.map((e)=>{
        let result=e.split('_').reverse()
        result[0]=result[0].split('.')[0]
        return result.join(' ')
    })
    resultVip.sort()
    for(let i=1;i<=resultVip.length;i++){
        resultVip[i-1]=i+". "+resultVip[i-1]
    }
    writeFile('vip.txt',resultVip.join('\n'))

} catch (err) {
    throw new Error(err.message)
}

