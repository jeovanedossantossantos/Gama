import axios from 'axios';
// axios.post("https://sistemadeagendamento-san5v.ondigitalocean.app/session",  {email: "email@email.com",
// password: "123456"})
//   .then(resp => {  
//       console.log(resp.data.data.authorization)
//   })
//   .catch(error => {          
//       console.log(error)       
// {
// 	"baseUrl": "https://sistemadeagendamento-san5v.ondigitalocean.app/"
// }
//   })
export default  axios.create({
    baseURL:"https://sistemadeagendamento-san5v.ondigitalocean.app/",
    headers:{
        "Content-Type": "text/plain",
    }
    // https://dev-marcilio-afrya.herokuapp.com/
    //https://sistemadeagendamento-san5v.ondigitalocean.app/
    // "https://webhook.site/1cf60753-daff-455f-b26b-22fab738847a"
    // 'https://gamabackend-with-node.herokuapp.com/'

})



