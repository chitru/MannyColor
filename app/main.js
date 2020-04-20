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
