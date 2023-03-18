const apiUrl = localStorage.getItem("apiUrl");

const fetchData = async () => {
  if (apiUrl) {
    const response = await fetch(`${apiUrl}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();

const fileUpload = async () => {
  const filemoe = document.getElementById("upload");
  const files = [...filemoe.files]; // array ပြောင်းချင်ရင်သုံးတာ
  console.log(files);
  const fromdata = new FormData();
  files.forEach((file) => fromdata.append("files", file));
  const waimoe = await fetch(`${apiUrl}/fileupload`, {
    method: "POST",
    body: fromdata,
  });
  console.log(waimoe);
};
