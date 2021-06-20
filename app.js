var express = require('express');
var app = express();
const path=require('path');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:true
}));
const fetch = require("node-fetch");

app.set('views',path.join(__dirname,'/views'));
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

// Requiring the module
// const reader = require('xlsx')
  
// // Reading our test file
// function vommadata(){
//   const file = reader.readFile('./live_python.csv')
      
//     let data = []
      
//     const sheets = file.SheetNames
//       // console.log(sheets)

   
//        const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[10]])
//        temp.forEach((res) => {
//           data.push(res)
//        })
    
//       return data;
//     // Printing data
//   // console.log(data[0])
//   }

//   function niftydata(){
//     const file = reader.readFile('./live_python.csv')
      
//     let data = []
      
//     const sheets = file.SheetNames
//       // console.log(sheets)

   
//        const temp = reader.utils.sheet_to_json(
//             file.Sheets[file.SheetNames[10]])
//        temp.forEach((res) => {
//           data.push(res)
//        })
    
//       return data;
//     // Printing data
//     // console.log(data[0])
//     }
//     function niftydata_strangle(){
//       const file = reader.readFile('./live_python.csv')
        
//       let data = []
        
//       const sheets = file.SheetNames
//         console.log(sheets)
  
     
//          const temp = reader.utils.sheet_to_json(
//               file.Sheets[file.SheetNames[11]])
//          temp.forEach((res) => {
//             data.push(res)
//          })
      
//         return data;
//       // Printing data
//       // console.log(data[0])
//       }
  
//     function bankniftydata(){
//       const file = reader.readFile('./live_python.csv')
      
//       let data = []
        
//       const sheets = file.SheetNames
//         console.log(sheets)
  
     
//          const temp = reader.utils.sheet_to_json(
//               file.Sheets[file.SheetNames[10]])
//          temp.forEach((res) => {
//             data.push(res)
//          })
      
//         return data;
//       // Printing data
//       // console.log(data[0])
//       }

      
// // async function getData(){
// //     var response=await fetch('ZonAnn.Ts+dSST.csv')
// //     console.log(response)
// // }

// // var data;

app.get('/', async function (req, res) {
    
  // getData();
// var data=await niftydata();

console.log("getting data /")
// console.log(data[0])
// res.render('index',{data:data});
});


// app.get('/nifty', async function (req, res) {
    
//   // getData();
//   var data=await niftydata();
//   var data_strangle=await niftydata_strangle();


// console.log("getting nifty /")
// // console.log(data[0])
// res.render('nifty',{data:data,data_strangle:data_strangle});
// });

// app.get('/test', async function (req, res) {
//   var data=await niftydata();

  

//   // getData();
// // var data=await niftydata();

// // console.log("getting data /")
// // // console.log(data[0])
// // res.render('nifty',{data:data});
// });

// app.get('/banknifty', async function (req, res) {
    
//   // getData();
// var data=await bankniftydata();

// console.log("getting data /")
// // console.log(data[0])
// res.render('banknifty',{data:data});
// });

app.listen(process.env.PORT,process.env.IP);


// app.listen(3000, () => {
//     console.log('Express server started at port 3000');

// });