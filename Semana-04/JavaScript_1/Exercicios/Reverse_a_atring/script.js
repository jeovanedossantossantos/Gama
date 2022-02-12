let newS = ''

function reverseAString(srt){

    for(let i = 1 ; i <= srt.length; i ++){
        newS+=srt[srt.length - i];
        
    }
    return newS

}
function ConvertendoToF(valor){
    return valor*1.8 + 32
}

let res = reverseAString("Hello")
console.log(res)