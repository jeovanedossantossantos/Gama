// let bdn1 = document.querySelector("#btn1")

// // bdn1.addEventListener('click', () => {

// //     console.log("clico")



// // })

// function test(event) {
//     event.stopPropagation()
//     return console.log("clico 2")
// }
// bdn1.addEventListener('mousedow', test)
// bdn1.addEventListener('mouseup', test)

// const clicoEmMim = () => console.log("clico Em Mim")

// let btn2 = document.querySelector("#btn2")

// btn2.addEventListener("click", () => {

//     clicoEmMim()
//     bdn1.removeEventListener("click", test)

// })

// let btn3 = document.querySelector("#btn3")
// btn2.addEventListener("click", function(event) {

//     console.log(event)

// })



// let p = document.getElementById("para")

// function msg(event) {
//     event.stopPropagation();
//     console.log("para")
// }
// let btn4 = document.createElement("button")
// btn4.addEventListener('click', msg)
// btn4.innerText = "Text"

// p.appendChild(btn4)

// p.addEventListener('click', () => {


//     console.log("Os dois")
// })

// let link = document.querySelector('a')

// link.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log("Não vai fazer nada ")
// })

// window.addEventListener('mousedown', (e) => {
//     console.log("Mause ")
// })

// window.addEventListener('mouseup', (e) => {
//     console.log("Mause Solto")
// })

// window.addEventListener('keydown', (e) => {
//     if (e.key === "Enter") {
//         console.log("Enter")
//     }

// })

// // window.addEventListener("mousemove", (e) => {
// //     console.log("x", e.x)
// //     console.log("y", e.y)
// // })

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
// })

// let i = document.querySelector("input")
// i.addEventListener('focus', () => {
//     console.log("focado")
// })
// i.addEventListener('blur', () => {
//     console.log("desfocado")
// })

window.addEventListener("load", () => {
    alert("CARREGO")
})

window.addEventListener('unload', function(event) {
    event.returnValue = null;
});