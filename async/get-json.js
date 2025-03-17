// async function getJSON(p = '', params = {}) {
//     const url = `${p}?${Object.entries(params)
//         .map(([key, value]) => `${key.replace(' ', '+')}=${value.toString().replace(' ', '+')}`)
//         .join('&')}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error(response.statusText);  // Use statusText from the response
//     }

//     const res = await response.json();
//     if (res.error) {
//         throw new Error(res.error);
//     }
//     return res.data;
// }


async function getJSON(p, params) {
    const url = `${p}?${Object.entries(params).map(([k,v])=>`${k}=${v.toString().replace(' ','+')}`).join('&')}`
    const response=await fetch(url)
    if(!response.ok) throw new Error(response.statusText)
    const res =await response.json()
    if(res.error) throw new Error(res.error)
    return res.data
}

// async function getJSON(p = '', params = {}) {
//     const url = `${p}?${Object.entries(params)
//         .map(([key, value]) => `${key.replace(' ', '+')}=${value.toString().replace(' ', '+')}`)
//         .join('&')}`;

//     const { ok, json, statusText } = await fetch(url);
//     if (ok) {
//         const res = await json();
//         if (res.error) throw new Error(res.error);
//         return res.data;
//     } else {
//         throw new Error(statusText);
//     }
// }