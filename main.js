async function fetchData(key, geoKey) {
  const data = await fetch(
    `http://localhost:44932/GetInformation/WST?key=${key || "WSS"}&geoKey=${
      geoKey || "WSS"
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        server: "Microsoft-IIS/8.5",
        "transfer-encoding": "chunked",
        "x-powered-by": "ASP.NET",
      },
      mode: "no-cors",
    }
  );
  const response = await data.json();
  return response;
}

// Первая таблица
function renderTable(rows) {
  function renderHeader() {
    let header = `
          <tr>
              <th id="g_col_head_1">Тип задания</th>
              <th id="g_col_head_2">Приоритет</th>
              <th id="g_col_head_3">Состояние</th>
              <th id="g_col_head_4">Код товара</th>
              <th id="g_col_head_5">Наименование товара</th>
              <th id="g_col_head_6">Количество в задании</th>
              <th id="g_col_head_7">
              <span>Из партии</span>
              <hr>
              <span>В партию</span>
              </th>
              <th id="g_col_head_8">БН</th>
          </tr>`;
    return header;
  }

  function renderRow(item, key) {
    let row = "";
    if (Array.isArray(item)) {
      for (let i = 0; i < key; i++) {
        row += `
                  <tr align="center">
                      <td>${item[i].TaskType || ""}</td>
                      <td>${item[i].Priority || ""}</td>
                      <td>${item[i].TaskStaus || ""}</td>
                      <td>${item[i].PrdCode || ""}</td>
                      <td>${item[i].PrdDesc || ""}</td>
                      <td>${item[i].Amount || ""}</td>
                      <td><span>${item[i].LotFrom || ""}</span><hr /><span>${
          item[i].LotTo || ""
        }</span></td>
                      <td>${item[i].BigNum || ""}</td>
                  </tr>`;
      }
    } else {
      row += `
        <tr align="center">
            <td>${item.TaskType || ""}</td>
            <td>${item.Priority || ""}</td>
            <td>${item.TaskStaus || ""}</td>
            <td>${item.PrdCode || ""}</td>
            <td>${item.PrdDesc || ""}</td>
            <td>${item.Amount || ""}</td>
            <td><span>${item.LotFrom || ""}</span><hr /><span>${
        item.LotTo || ""
      }</span></td>
            <td>${item.BigNum || ""}</td>
        </tr>`;
    }

    return row;
  }

  let table =
    '<table border="1" width="100%" cellspacing="0" class="first_board" id="first_board"><thead align="center">';
  table += renderHeader();
  table += "</thead><tbody>";
  table += renderRow(rows.Data.Tasks[0].Task, rows.Data.Tasks[0].Task.length);
  table += "</tbody></table>";
  return table;
}

// Вторая таблица
function renderSecondTable(data) {
  function renderHeader() {
    let header = `
    <tr>
      <th id="d_col_1">Всего заданий</th>
      <th id="d_col_2">В работе</th>
      <th id="d_col_2">В ожидании</th>
    </tr>`;
    return header;
  }

  function renderRow(item) {
    let row = "";
    row += `
    <tr align="center">
      <td>${item.TotTasks || ""}</td>
      <td>${item.WrkTasks || ""}</td>
      <td>${item.NewTasks || ""}</td>
    </tr>`;
    return row;
  }

  let table =
    '<table border="1" width="100%" cellspacing="0" class="second_board" id="second_board"><thead align="center">';
  table += renderHeader();
  table += "</thead><tbody>";
  table += renderRow(data.Data.Total);
  table += "</tbody></table>";
  return table;
}

// Статус
function renderDocumentState(data) {
  return ` ${data.Data.State}`;
}
const doc = document.getElementById("RefreshPages");
const keys = doc.dataset.src;
let queryObj = {};
window.location.search
  .substring(1)
  .split("&")
  .forEach((item) => {
    let param = item.split("=");
    queryObj[param[0]] = param[1];
  });
setInterval(
  function () {
    fetchData(queryObj.key, queryObj.geoKey).then((res) => {
      document.getElementById("general_table").innerHTML = renderTable(res);
      document.getElementById("second_table").innerHTML =
        renderSecondTable(res);
      document.getElementById("status_now").innerHTML =
        renderDocumentState(res);
    });
  },
  keys ? Number(keys) * 1000 : 10000
);
