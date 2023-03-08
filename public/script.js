const fetchData = async () => {
  const url = localStorage.getItem("apiUrl");
  if (url) {
    const response = await fetch(`${url}/user`);
    // const data = await response;
    console.log(response.json());
  } else {
    window.location.href = "/api";
  }
};

fetchData();
