// const express = require("express");
// const { Server } = require("http");
// const express = require("express");
// const axios = require("axios").default;

// const app = express();
// let currentTime = new Date().getTime()
// let futureTime = new Date().getTime(1669852800000)

// let remaining = (futureTime - currentTime) / 1000

// app.get('/minutes', async (req,res) =>{
//   let presentDate = new Date("2022-11-30T11:00:44.672+05:30").getTime()
// console.log(presentDate);
//   let finddate = new Date().getTime()
//   let remaining = (finddate-presentDate)/1000/60

//   console.log(remaining)
//   let hourMin ="2022-11-30T11:00:44.672+05:30".slice(11,16) 
//   let hourmin2 = "2022-11-30T11:00:44.672+05:30".split("T")[1].split(":")
//   res.send({hourmin2})

// })



// app.get("/", async (req, res) => {
//     let breakTime = new Date("2022-11-30T17:00:00.000+05:30").getTime();
//     let now = new Date().getTime();
//     const minutesLeftForBreak = (breakTime - now) / 1000 / 60;

//     res.send({
//         minutesLeftForBreak,
//     });
//     const currentTime = new Date();
//     res.send({
//          currentTime: currentTime.toString(),
//          tomorrowSameTime: new Date(currentTime.getTime() + 24 * 60 * 60 * 1000).toString(),
//     });

  
//   });

//  app.listen(7000);
// () => console.log("Server started");