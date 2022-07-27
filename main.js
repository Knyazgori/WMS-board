function getInfo() {
  fetch('http://localhost:44932/GetInformation/WSS?geoKey=WSS', {
  method: 'GET',
  headers: {
    'Content-Type': 'text/plain; charset=utf-8',
    // 'Content-Type': 'text/plain', 
    'server': 'Microsoft-IIS/8.5',
    'transfer-encoding': 'chunked', 
    'x-powered-by': 'ASP.NET', 
  },
  mode: 'no-cors'
})  
.then(data => console.log(data))
}

getInfo()

// { "Data": { 
//   "WrkStation": "ВСЕ РАБОЧИЕ МЕСТА",
//   "State":"Занято",
//   "Tasks": { 
//     "Task": { 
//       "TaskType": "ОТБОР",
//       "Priority": "99", 
//       "TaskStaus":"НОВОЕ",
//       "PrdCode": "2081482",
//       "PrdDesc": "м ВВГнгАLSLTx4х1.5(N",
//       "Amount":"1987",
//       "LotFrom":"08D/1799",
//       "LotTo":"BUXT/1799.2",
//       "BigNum":"2563" 
//     }
//   },
//   Total": {
//     "TotTasks":"2",
//     "WrkTasks":"2",
//     "NewTasks":"0"
//   }
// }
