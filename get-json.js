async function getJSON(path, params) {
    //test?query=hello+world&b=5
    const url = `${path}?${Object.entries(params).map(([k, v]) => {
        return `${k}=${v.toString().replace(' ', '+')}`
    }).join('&')}`
    const response = await fetch(url)
    if (!response.ok) throw Error(response.statusText)
    const res = await response.json()
    console.log("wwwwwwwwwwwwwwww",res)
    if(res.error) throw Error(res.error)
    return res.data
}