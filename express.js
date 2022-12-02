// const { default: axios } = require("axios");
// const { json } = require("body-parser");
// const express = require("express");

// const app = express();
// try{
// app.get("/", async (req, res) => {
    
//     const response = await axios.get("https:/randomuser.me/api?results=20")
//     const json = response.data;
//     const user = json.results[0];

//     const dob =new Date(user.dob.date);
    
//     res.send({y

//         firstname: user.name.first,
//         yearOfBirth: dob.get
//     })

// console.log(result)
// //     res.send(result.data)

// //     var resObj = apiRes.results.map(data => {
// //         return {
// //             firstname: data.name.first,
// //             dob: new Date(data.dob.date).getFullYear()
// //         }
// //     })
// //     res.send(resObj)
//  })
// }
// catch (err) {
//     res.send(err)
// }

//     app.listen(7000, () => {
//     console.log("running")
// })