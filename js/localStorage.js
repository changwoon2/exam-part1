window.onload = () => {
  const btnSLD = document.querySelector(".btnSetLocalData");
  console.log(btnSLD);

  const input = document.querySelector("input");

  btnSLD.addEventListener("click", () => {
    const inputValue = input.value;
    console.log(inputValue);

    localStorage.setItem("userid", inputValue);
    input.value = "";
  });
  const btnGLD = document.querySelector(".btnGetLocalData");
  console.log(btnGLD);

  btnGLD.addEventListener("click", () => {
    const getData = localStorage.getItem("userid");
    if (!getData) alert("해당 키로 로컬에 저장된 데이터가 없네요~");
    else input.value = getData;
  });
  const btnRLD = document.querySelector(".btnRemoveLocalData");
  btnRLD.addEventListener("click", () => {
    localStorage.removeItem("userid");
  });
};
