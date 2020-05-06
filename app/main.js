import "../style.scss";
// loading and saving
const filesUploader = document.getElementById("filesUploader");
const canvas = document.getElementById("canvasImg");
const ctx = canvas.getContext("2d");
const btnSave = document.getElementById("btn-save");
filesUploader.addEventListener("change", function (e) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const imgObj = new Image();
    imgObj.onload = function (e) {
      canvas.width = imgObj.width;
      canvas.height = imgObj.height;
      const x = 0;
      const y = 0;
      ctx.drawImage(imgObj, x, y, canvas.width, canvas.height);
    };
    imgObj.src = e.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

btnSave.addEventListener("click", function () {
  var image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  downloadImg(image, "manny-image.png");
});

function downloadImg(data, filename) {
  const a = document.createElement("a");
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}

// select, show and hide
const tab = `
<ul class="tabs" role="tablist">
  <li>
    <input type="radio" name="tabs" id="tab1" checked />
    <label
      for="tab1"
      role="tab"
      aria-selected="true"
      aria-controls="panel1"
      tabindex="0"
      >Main</label
    >
    <div
      id="tab-content1"
      class="tab-content"
      role="tabpanel"
      aria-labelledby="description"
      aria-hidden="false"
    >
    </div>
  </li>

  <li>
    <input type="radio" name="tabs" id="tab2" />
    <label
      for="tab2"
      role="tab"
      aria-selected="false"
      aria-controls="panel2"
      tabindex="0"
      >Accent</label
    >
    <div
      id="tab-content2"
      class="tab-content"
      role="tabpanel"
      aria-labelledby="specification"
      aria-hidden="true"
    >
 
    </div>
  </li>
</ul>
<div class="orientation">Orientation</div>
<button id="btn-save">Save</button>

`;

const sel = document.getElementById("sel");
function getSelectedOption(sel) {
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}

sel.addEventListener("change", function () {
  const opt = getSelectedOption(sel);
  switch (opt.value) {
    case "bonLe":
      let y = document.getElementById("createTab");
      y.innerHTML = tab;

      fetch("app/bonded.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendData(data);
        })
        .catch(function (err) {
          console.log("error: " + err);
        });

      function appendData(data) {
        let main = document.getElementById("tab-content1");
        let accent = document.getElementById("tab-content2");
        for (let i = 0; i < data.length; i++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                  <div style="background-color: ${data[i].color}"></div>
                  <div class="code"> ${data[i].code}</div>
              `;
          main.appendChild(div);
        }
        for (let j = 0; j < data.length; j++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                        <div style="background-color: ${data[j].color}"></div>
                        <div class="code"> ${data[j].code}</div>
                    `;
          accent.appendChild(div);
        }
      }

      break;
    case "genLe":
      console.log("2");
      let yx = document.getElementById("createTab");
      yx.innerHTML = tab;

      fetch("app/genuine.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendDataGen(data);
        })
        .catch(function (err) {
          console.log("error: " + err);
        });

      function appendDataGen(data) {
        let main = document.getElementById("tab-content1");
        let accent = document.getElementById("tab-content2");
        for (let i = 0; i < data.length; i++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                  <div style="background-color: ${data[i].color}"></div>
                  <div class="code"> ${data[i].code}</div>
              `;
          main.appendChild(div);
        }
        for (let j = 0; j < data.length; j++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                        <div style="background-color: ${data[j].color}"></div>
                        <div class="code"> ${data[j].code}</div>
                    `;
          accent.appendChild(div);
        }
      }
      break;
    case "itaLe":
      console.log("3");
      let xy = document.getElementById("createTab");
      xy.innerHTML = tab;

      fetch("app/italian.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendDataIta(data);
        })
        .catch(function (err) {
          console.log("error: " + err);
        });

      function appendDataIta(data) {
        let main = document.getElementById("tab-content1");
        let accent = document.getElementById("tab-content2");
        for (let i = 0; i < data.length; i++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                  <div style="background-color: ${data[i].color}"></div>
                  <div class="code"> ${data[i].code}</div>
              `;
          main.appendChild(div);
        }
        for (let j = 0; j < data.length; j++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                        <div style="background-color: ${data[j].color}"></div>
                        <div class="code"> ${data[j].code}</div>
                    `;
          accent.appendChild(div);
        }
      }
      break;
    case "puLe":
      console.log("4");
      let yz = document.getElementById("createTab");
      yz.innerHTML = tab;

      fetch("app/pu.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendDataPu(data);
        })
        .catch(function (err) {
          console.log("error: " + err);
        });

      function appendDataPu(data) {
        let main = document.getElementById("tab-content1");
        let accent = document.getElementById("tab-content2");
        for (let i = 0; i < data.length; i++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                  <div style="background-color: ${data[i].color}"></div>
                  <div class="code"> ${data[i].code}</div>
              `;
          main.appendChild(div);
        }
        for (let j = 0; j < data.length; j++) {
          let div = document.createElement("div");
          div.className = "leColor";
          div.innerHTML = `
                        <div style="background-color: ${data[j].color}"></div>
                        <div class="code"> ${data[j].code}</div>
                    `;
          accent.appendChild(div);
        }
      }
      break;
  }
});
