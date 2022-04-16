import BackGraundTwo from "../../../assets/image/background/bg2.jpg"
import Veder from "../../../assets/image/elements/vender.jpg"
import footer from "../footer"
let Texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let HomeSectionsTwo=`
<section class="section background__two" style="background: url(${BackGraundTwo}) no-repeat;
height: 100vh;
width: 100%;
background-size: cover;
">
    <div class="block-section--two">
        <img src="${Veder}" alt="Vader" width="300px" height="auto">
        <div class="text-block--two">
            <p>
                ${Texto}
            </p>
        </div>
    </div>
    ${footer}
    
</section>
`
export default HomeSectionsTwo;