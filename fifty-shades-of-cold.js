import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const stl = document.createElement('style')
    document.head.append(stl)
    colors.forEach((c) => {
        stl.innerHTML+= `.${c}{
        background : ${c}
        }
        `
    })
}

export const generateColdShades = () => {
    colors.forEach((c)=>{
        if(c.includes("aqua")||c.includes("blue")||c.includes("turquoise")||c.includes("green")||c.includes("cyan")||c.includes("navy")||c.includes("purple")){
            const newDiv=document.createElement('div')
            newDiv.classList=c
            newDiv.innerHTML=c
            document.body.append(newDiv)
        }
    })
}
export const choseShade = (fi) => {
    const dv=document.querySelectorAll('div')
    dv.forEach((e)=>{
        e.setAttribute('class',fi)
    })
}
