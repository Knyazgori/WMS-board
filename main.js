const response = {
  Data: {
    WrkStation: "ВСЕ РАБОЧИЕ МЕСТА",
    State: "Занято",
    Tasks: {
      Task:
        [
          {
            TaskType: "ОТБОР",
            Priority: "99",
            TaskStaus: "НОВОЕ",
            PrdCode: "2081482",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "1987",
            LotFrom: "08D/1799",
            LotTo: "BUXT/1799.2",
            BigNum: "2563"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР12",
            Priority: "9912",
            TaskStaus: "НОВОЕ12",
            PrdCode: "208148212",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N12",
            Amount: "11222222987",
            LotFrom: "08D/112799",
            LotTo: "BUXT/1799.212",
            BigNum: "256123"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          {
            TaskType: "ОТБОР1",
            Priority: "991",
            TaskStaus: "НОВОЕ1",
            PrdCode: "20814821",
            PrdDesc: "м ВВГнгАLSLTx4х1.5(N",
            Amount: "19871",
            LotFrom: "08D/179111",
            LotTo: "BUXT/1799.2",
            BigNum: "2563111"
          },
          
        ],
    },
    Total: {
      TotTasks: "2",
      WrkTasks: "2",
      NewTasks: "0"
    }
  }
}


function createTableBody() {
  // Главная таблица
  let rows = response.Data.Tasks.Task.length;
  let table = document.getElementById('first_board')
  let secondTable = document.getElementById('second_board')

  for (let i = 0; i < rows; i = i + 1) {
    table.innerHTML += (`
    <tr align="center" id="col_1_${i + 1}">
      <td>${response.Data.Tasks.Task[i].TaskType || ''}</td>
      <td>${response.Data.Tasks.Task[i].Priority || ''}</td>
      <td>${response.Data.Tasks.Task[i].TaskStaus || ''}</td>
      <td>${response.Data.Tasks.Task[i].PrdCode || ''}</td>
      <td>${response.Data.Tasks.Task[i].PrdDesc || ''}</td>
      <td>${response.Data.Tasks.Task[i].Amount || ''}</td>
      <td><span>${response.Data.Tasks.Task[i].LotFrom || ''}</span><hr /><span>${response.Data.Tasks.Task[i].LotTo || ''}</span></td>
      <td>${response.Data.Tasks.Task[i].BigNum || ''}</td>
    </tr>
    `)
  }

  // Состояние рм
  const h1 = document.getElementById('status')
  h1.innerText += ` ${response.Data.State}`

  // Дополнительная таблица 
  secondTable.innerHTML += (`
    <tr align="center" id="col_2_2">
      <td>${response.Data.Total.TotTasks || ''}</td>
      <td>${response.Data.Total.WrkTasks || ''}</td>
      <td>${response.Data.Total.NewTasks || ''}</td>
    </tr>
  `)
};

createTableBody()

// function getInfo() {
//   fetch('http://localhost:44932/GetInformation/WSS?geoKey=WSS', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/plain; charset=utf-8',
//       // 'Content-Type': 'text/plain', 
//       'server': 'Microsoft-IIS/8.5',
//       'transfer-encoding': 'chunked',
//       'x-powered-by': 'ASP.NET',
//     },
//     mode: 'no-cors'
//   })
//     .then(data => console.log(data))
// }
// getInfo()

