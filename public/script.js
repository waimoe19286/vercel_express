const fetchData = async () => {
  const url = localStorage.getItem("apiUrl");
  if (url) {
    const response = await fetch(`${url}/user`);
    const data = await response;
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();
