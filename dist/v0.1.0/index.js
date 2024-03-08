async function _asyncSleepPromise(seconds = 0) {
  const ms = 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms * seconds);
  });
}

async function _loadUsuarioList() {
  let list = [];

  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((json) => json);
    list = res;
  } catch (error) {
    console.error(error);
  }

  return list;
}

const columnDefList1 = [
  {
    th: "#",
    thClassList: ["col-01-th", "custom-col-th"],
    width: "1%",
    minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      // const res = `[${index_row}|${index_col}] ${item.username}`;
      const res = `${index_row + 1}`;
      return res;
    },
    tdClassList: ["col-01-td", "custom-col-td"],
  },
  {
    th: "🔅 Tiempo",
    thClassList: ["col-02-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.name}`;
      return res;
    },
    tdClassList: ["col-02-td", "custom-col-td"],
  },
  {
    th: "💫 Opciones",
    thClassList: ["col-03-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.website}`;
      return res;
    },
    tdClassList: ["col-03-td", "custom-col-td"],
  },
  {
    th: "❌ Errores",
    thClassList: ["col-04-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.phone}`;
      return res;
    },
    tdClassList: ["col-04-td", "custom-col-td"],
  },
  {
    th: "💢 Columna 1",
    thClassList: ["col-05-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.company.name}`;
      return res;
    },
    tdClassList: ["col-05-td", "custom-col-td"],
  },
  {
    th: "💢 Columna 2",
    thClassList: ["col-06-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.id}`;
      return res;
    },
    tdClassList: ["col-06-td", "custom-col-td"],
  },
  {
    th: "💢 Columna 3",
    thClassList: ["col-07-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.username}`;
      return res;
    },
    tdClassList: ["col-07-td", "custom-col-td"],
  },
  {
    th: "💢 Columna 4",
    thClassList: ["col-08-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.name}`;
      return res;
    },
    tdClassList: ["col-08-td", "custom-col-td"],
  },
  {
    th: "💢 Columna 5",
    thClassList: ["col-09-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.website}`;
      return res;
    },
    tdClassList: ["col-09-td", "custom-col-td"],
  },
  {
    th: "👁‍🗨 Acciones",
    thClassList: ["col-10-th", "custom-col-th"],
    // width: "1%",
    // minWidth: "1%",
    tdRender: function (item, index_row, index_col) {
      const res = `[${index_row}|${index_col}] ${item.phone}`;
      return res;
    },
    tdClassList: ["col-10-td", "custom-col-td"],
  },
];
let usuarioList = [];

async function fn_init() {
  const list = await _loadUsuarioList();
  usuarioList = list;

  ttable.fnInit({
    id: "example01",
    containerClassList: ["example01"],
    icons: {
      expandRow: "⭕",
      closeRow: "⛔",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList: [],
    columnDefList: columnDefList1,
    textNoData: "No data - 01",
    statusRowsInBody: 4,
  });
  ttable.fnInit({
    id: "example02",
    containerClassList: ["example02"],
    icons: {
      expandRow: "⏩",
      closeRow: "⏫",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList: [],
    columnDefList: columnDefList1,
    textNoData: "<h1>Sin información</h1>",
    statusRowsInBody: 6,
  });
  ttable.fnInit({
    id: "example03",
    containerClassList: ["example03"],
    icons: {
      expandRow: "➕",
      closeRow: "➖",
      expandCol: "⭕",
      closeCol: "⛔",
    },
    dataList: usuarioList,
    columnDefList: columnDefList1,
    textNoData: "No data - 03",
    statusRowsInBody: 8,
  });

  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando.</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando..</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando.</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando..</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Por favor espere</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando.</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando..</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Estamos por terminar</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando.</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Cargando..</h1>" });
  await _asyncSleepPromise(1);
  ttable.fnSetStatus({ id: "example02", text: "<h1>Listo ✅</h1>" });
  await _asyncSleepPromise(3);
  ttable.fnUpdate({ id: "example02", dataList: usuarioList });
}
fn_init();



function fn_refresh_datalist_example01() {
  ttable.fnUpdate({ id: "example01", dataList: usuarioList });
}

function fn_refresh_datalist_nodata_example01() {
  ttable.fnUpdate({ id: "example01", dataList: [] });
}

function fn_status_loading_example01() {
  ttable.fnSetStatus({ id: "example01", text: "loading" });
}

function fn_status_title_loading_example01() {
  ttable.fnSetStatus({ id: "example01", text: "<h1>loading</h1>" });
}