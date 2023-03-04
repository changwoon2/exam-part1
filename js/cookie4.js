const getCookie = function () {
  const allCookies = document.cookie;
  console.log(allCookies);

  if (allCookies != "") alert("저장된 쿠키의 값은" + allCookies);
  else alert("저장된 쿠키가 없습니다");
};

$.cookie("userid", "superman1004");

// [2]쿠키생성 --> 만료일지정

$.cookie("username", "batman", { expires: 7 });

// [3]쿠키생성 --> 만료일 지정 및 패스 지정 --> '/' 지정시 사이트 전체에서 쿠킹유효

$.cookie("uid", "antman", { expires: 7, path: "/" }); //주의1--> 삭제시에도 패스 지정 필요

// [4]쿠키 읽기
console.log($.cookie("userid")); //superman1004
console.log($.cookie("asdf")); //superman1004

//[5]모든 쿠키 객체형태로출력
console.log($.cookie());

// [6]쿠키삭제
console.log($.removeCookie("userid")); //true
console.log($.removeCookie("asdf")); //false
console.log($.cookie());

//[7]쿠키 생성시 domain,path 지정과 함께 생성되었다면 삭제시에도 --> 똑같이필요
console.clear();
$.cookie("dogid", "apple", { expires: 7, path: "/" });
console.log($.removeCookie("dogid"));
console.log($.removeCookie("dogid", { path: "/" }));
