window.onload = () => {
  const panelFaqContainer = document.querySelectorAll(".panel-faq-container");
  console.log(panelFaqContainer);

  let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");
  console.log(panelFaqAnswer);

  const btnAllClose = document.getElementById("btn-all-close");
  console.log(btnAllClose);

  for (let i = 0; i < panelFaqContainer.length; i++) {
    panelFaqContainer[i].addEventListener("click", function () {
      // this.classList.add("active");
      panelFaqAnswer[i].classList.add("active");
    });
  }
  btnAllClose.addEventListener("click", function () {
    console.log("모두 닫기 버튼 클릭");
    for (let i = 0; i < panelFaqAnswer.length; i++) {
      panelFaqAnswer[i].classList.remove("active");
    }
  });
};
