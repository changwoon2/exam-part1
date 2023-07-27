// js-cookie 라이브러리
// 각요소들가져오기
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".banner .btnClose");
const btnConcealWindowToday = document.querySelector(
  ".banner .btnConcealWindowToday"
);

// 페이지 최초 접속시 팝업 창 띄우기 -->주의 --> 쿠키유무에따라노출/비노출 되게끔 처리.
const popupCookie = Cookies.get("popupCookie");
console.log(popupCookie);

//popupCookie 값 유무에 따라 없으면 --> showPopup()호출해서 팝업창 띄우기
if (popupCookie == undefined) showPopup();

//팝업 창 띄우기
function showPopup() {
  popup.style.display = "block";
}

//[닫기] 버튼 클릭시
btnClose.addEventListener("click", function () {
  //할일처리
  concealPopup(0);
});

// [오늘 하루 창 닫기] 버튼 클릭시
btnConcealWindowToday.addEventListener("click", function () {
  //할일처리
  concealPopup(1, 1);
});

//팝업 창 감추기
function concealPopup(number, expiration) {
  console.log(number + "," + expiration);

  // [닫기] 버튼 클릭시
  popup.style.display = "none";

  // [오늘 하루 창 닫기] 버튼 클릭시 --> 1
  if (number === 1) {
    //popupCookie 값체크
    if (Cookies.get("popupCookie") == undefined) {
      // 쿠키가 없는 경우 --> popupCookie 라는 이름의 쿠키를 추가
      Cookies.set("popupCookie", "yes", { expires: expiration, pash: "/" });
    }
  }
}

//한 개 쿠키 삭제
const oneDelCookie = function (cname) {
  event.preventDefault();
  //할일처리
  cname = document.getElementById("cname");
  let cval = cname.value;
  console.log(cval);

  Cookies.remove(cval);
  cname.value = "";
  cname.focus();
  alert(`${cval}쿠키삭제`);
};

const form = document.getElementById("form");
form.addEventListener("submit", oneDelCookie);
