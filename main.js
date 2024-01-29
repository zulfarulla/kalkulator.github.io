//Belajar Membuat Kalkulator
function tambah(){
    const x = document.kalku.x.value
    const y = document.kalku.y.value
    let result = document.kalku.result.value   

    result = (Number(x) + Number(y))
    document.kalku.result.value=result
}
function kurang(){
    const x = document.kalku.x.value
    const y = document.kalku.y.value
    let result = document.kalku.result.value   

    result = (Number(x) - Number(y))
    document.kalku.result.value=result
}
function bagi(){
    const x = document.kalku.x.value
    const y = document.kalku.y.value
    let result = document.kalku.result.value   

    result = (Number(x) / Number(y))
    document.kalku.result.value=result
}
function kali(){
    const x = document.kalku.x.value
    const y = document.kalku.y.value
    let result = document.kalku.result.value   

    result = (Number(x) * Number(y))
    document.kalku.result.value=result
}