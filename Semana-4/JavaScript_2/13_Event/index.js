let bdn1 = document.querySelector("#btn1")

// bdn1.addEventListener('click', () => {

//     console.log("clico")



// })

function test() {
    return console.log("clico 2")
}
bdn1.addEventListener('click', test)

const clicoEmMim = () => console.log("clico Em Mim")

let btn2 = document.querySelector("#btn2")

// btn2.addEventListener("click", () => {

//     clicoEmMim()
//     bdn1.removeEventListener("click", test)

// })

btn2.addEventListener("click", function(event) {

    console.log(event)

})