function getCookie() {
  const allCookies = document.cookie; //하나의 문자열로 리턴
  console.log(typeof allCookies);

  if (allCookies != "")
    alert("저장된 쿠키의 값은 : " + allCookies + "(다시 방문 해주세요)");
  else alert("저장된 쿠키가 없습니다 (첫 방문을 환영합니다)");
}

function setCookie() {
  //   let nowDate = new Date();
  //   console.log(typeof nowDate);
  //   let expiration = nowDate.getDate() + 10;
  //console.log(typeof expiration); //19

  let expiration = new Date();
  expiration.setDate(expiration.getDate() + 7);
  console.log(expiration);

  console.log(expiration.toUTCString());
  //쿠키생성
  let cookies = "";
  cookies = "userid=superman; expires=" + expiration.toUTCString();
  console.log(cookies);
  //쿠키저장
  document.cookie = cookies;
  alert("쿠키를 생성");
}

function delCookie() {
//   document.cookie = "username=book"; //쿠키생성
//   document.cookie = "username=hong"; //쿠키수정
//   document.cookie = "username=changwoon"; //쿠키삭제
  document.cookie = "userid=changwoon"; //쿠키삭제
  alert("쿠키삭제");
}
