// function getCookie() {
//   const allCookies = document.cookie; //하나의 문자열로 리턴
//   console.log(typeof allCookies);

//   if (allCookies != "")
//     alert("저장된 쿠키의 값은 : " + allCookies + "(다시 방문 해주세요)");
//   else alert("저장된 쿠키가 없습니다 (첫 방문을 환영합니다)");
// }

// function setCookie() {
//   //   let nowDate = new Date();
//   //   console.log(typeof nowDate);
//   //   let expiration = nowDate.getDate() + 10;
//   //console.log(typeof expiration); //19

//   let expiration = new Date();
//   expiration.setDate(expiration.getDate() + 7);
//   console.log(expiration);

//   console.log(expiration.toUTCString());
//   //쿠키생성
//   let cookies = "";
//   cookies = "userid=superman; expires=" + expiration.toUTCString();
//   console.log(cookies);
//   //쿠키저장
//   document.cookie = cookies;
//   alert("쿠키를 생성");
// }

// function delCookie() {
// //   document.cookie = "username=book"; //쿠키생성
// //   document.cookie = "username=hong"; //쿠키수정
// //   document.cookie = "username=changwoon"; //쿠키삭제
//   document.cookie = "userid=changwoon"; //쿠키삭제
//   alert("쿠키삭제");
// }

const getCookie = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
  if (allCookies != "") alert("저장된 쿠키의 값은 : " + allCookies);
  else alert("저장된 쿠기가 없습니다");
};

const setCookie = function (cname, cvalue, cexpire) {
  event.preventDefault();
  if (document.getElementById("cname").value != "") {
    cname = document.getElementById("cname").value;
    cvalue = document.getElementById("cvalue").value;
    cexpire = document.getElementById("cexpire").value;
  }
  console.log("cname = " + cname);
  console.log("cvalue = " + cvalue);
  console.log("cexpire = " + cexpire);
  console.log(typeof cexpire);

  let expiration = new Date();
  console.log(expiration);
  expiration.setDate(expiration.getDate() + parseInt(cexpire));
  console.log(expiration);

  console.log(expiration.toGMTString());

  let cookies = "";
  cookies += `${cname}=${cvalue}`;
  cookies += `expires=${expiration.toGMTString()}`;
  console.log(cookies);

  document.cookie = cookies;
  // document.getElementById("cname").value = "";
  // document.getElementById("cname").focus();
  document.getElementById("form").reset();
  alert("쿠키생성");
};

//쿠키삭제
const delCookie = function (cname) {
  console.log(cname);
  setCookie(cname, "", 0);
  alert("쿠키를 삭제");
};

const form = document.getElementById("form");
form.addEventListener("submit", setCookie);

//쿠키전체삭제
const allDelCookie = function (domain, path) {
  (domain = domain || document.domain), (path = path || "/");
  const cookies = document.cookie.split("; ");
  const expiration = "Sat, 01 Jan 1972 00:00:00 GMT";

  for (let i = 0; i < cookies.length; i++) {
    document.cookie = cookies[i].split("=")[0] + "=; expires=" + expiration;
  }
  alert("쿠키모두삭제");
};
