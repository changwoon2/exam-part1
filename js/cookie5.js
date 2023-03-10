Cookies.set("userid", "superman1004");

// [2]js-cookie 기본적인 생성법 + 만료일 지정

Cookies.set("username", "batman", { expires: 7 });

// [3]js-cookie 생성 + 만료일 + 패스
Cookies.set("cname", "antman", { expires: 7, path: "/" });

//[4]js-cookie 읽기
const cookie_userid = Cookies.get("userid");
console.log(cookie_userid);

//[5]js-cookie 모두 읽기
const allCookies = Cookies.get();
console.log(allCookies);
console.log(typeof allCookies); //object

//[6]js-cookie 삭제
// Cookies.remove("userid");
// const allCookies2 = Cookies.get();
// console.log(allCookies2);

//쿠키 삭제 함수
const delCookie = function (cname) {
  event.preventDefault();
  cname = document.getElementById("cname");
  let cval = cname.value;
  console.log(cval);

  Cookies.remove(cval);
  cname.value = "";
  cname.focus();
  alert(`${cval} 쿠키를 삭제`);
};

const form = document.getElementById("form");
form.addEventListener("submit", delCookie);

// [6-1] 쿠키 생성시 옵션 지정과 함께 생성되었다면 삭제시에도 똑같이 필요
console.clear();
// Cookies.set("dogid", "dog1004", { expires: 7, path: "/" });
// Cookies.remove("dogid", { path: "/" });

Cookies.set("catid", "cat1004", {
  expires: 7,
  path: "/Users/omg/Documents/GitHub/exam-part1/",
});
Cookies.remove("catid", {
  path: "/Users/omg/Documents/GitHub/exam-part1/",
});

// [7]js-cookie 전체삭제
console.clear();
console.log(Object.keys(Cookies.get()));

function allDelCookies() {
  Object.keys(Cookies.get()).forEach(function (cName) {
    let neededOptions = {
      // domain: "test.com",
      // domain: "localhost",
    };
    Cookies.remove(cName, neededOptions);
  });
  alert("쿠키가 전체 삭제되어 입니다");
}

// [8]userGetCookie 함수만들기 - 일반적인 for 반복문으로 순회하면서 처리
console.clear();
console.log(document.cookie);

//쿠키 읽기
const userGetCookie = function (cname) {
  let name = cname + "=";
  console.log(name);
  let allCookie = decodeURIComponent(document.cookie).split(";");
  console.log(allCookie);
  let cval = [];
  for (let i = 0; i < allCookie.length; i++) {
    console.log(allCookie[i].trim().indexOf(name));
    if (allCookie[i].trim().indexOf(name) == 0) {
      cval = allCookie[i].trim().split("=");
      console.log(cval);
      ["userid", "superman1004"];
      console.log(cval[1]);
      console.log(cval.length);
    }
    return cval.length > 0 ? cval[1] : "nothing";
  }
};
console.log("userGetCookie 함수로 리턴된값은 = " + userGetCookie("userid"));

const oneGetCookie = function (cname) {
  let name = cname + "=";
  let allCookie = decodeURIComponent(document.cookie).split(";");

  let cval = [];
  for (let i = 0; i < allCookie.length; i++) {
    if (allCookie[i].trim().indexOf(name) == 0) {
      cval = allCookie[i].trim().split("=");
    }
  }
  return cval.length > 0 ? cval[1] : "no result";
};
console.clear();
console.log("oneGetCookie 함수로 리턴되는 값은 = " + oneGetCookie("cname"));

console.clear();
console.log(document.cookie);

const userGetCookie2 = function (cname) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    // el = el.trim(); 위에서 공백 제거를 처리하지 않고 여기서 한다면
    // console.log(el);
    let [k, v] = el.split("=");
    // console.log(k);
    console.log(k.trim());
    cookie[k.trim()] = v;
    console.log(cookie);
  });
  return cookie[cname] != undefined ? cookie[cname] : "no result";
};

console.log("userGetCookie2 함수로 리턴된 값은 = " + userGetCookie2("userid"));

// [9] foreEach 메서드를 이용한 userGetCookie2 함수만들기

console.clear();
console.log(document.cookie);

// 1 객체 변수 선언
const userGetCookie3 = function (cname) {
  let cookie = {};
  // 2반복처리 - forEach
  document.cookie.split(";").forEach(function (el) {
    // 할일처리
    // el = el.trim();
    // console.log(el);
    let [k, v] = el.split("=");
    // console.log(k);
    console.log(k.trim());
    cookie[k.trim()] = v;
    console.log(cookie);
  });
  // return cookie["cname"];
  return cookie[cname] != undefined ? cookie[cname] : "no result";
};

console.log("userGetCookie3 = " + userGetCookie3("userid"));

// [10] es6 버전으로 userGetCookie4
console.clear();
console.log(document.cookie);

const userGetCookie4 = function (cname) {
  cname = cname + "=";
  const str = document.cookie;
  const isCookieldx = str.indexOf(cname);
  console.log(isCookieldx);
  let result = "no result";
  if (isCookieldx >= 0) {
    result = document.cookie
      .split(";")
      .find((item) => item.startsWith(cname))
      .split("=")[1];
  }
  return result;
  ``;
};

console.log("userGetCookie3 함수로 리턴된 값은 = " + userGetCookie3("cname"));

function showCval(cname) {
  const rst = document.getElementById("cval");
  rst.value = userGetCookie3(cname);
}

function clearCval() {
  const rst = document.getElementById("cval");
  rst.value = "";
}

console.clear();
const str = "큰그림";

console.log(str.startsWith("빅토르"));
console.log(str.startsWith("빅토르"));
console.log(str.startsWith("빅토르", 10));
console.log(str.startsWith("간장"));
console.log(str.startsWith("강공장장", 11));

console.clear();
const ar = "dog=5; cat=7; hippo=9; lion=4; tiger=2";
console.log(typeof ar);

const ar2 = ar.split(";");
console.log(ar2);

const ar3 = ar2.find((item) => item.startsWith("hippo=")); // 주어진 조건의 함수를 만족하는 첫 번째 요소의 값을 반환. 그런게 없다면 undefined 반환.
console.log(ar3);

const ar4 = ar3.split("=");
console.log(ar4); // [ "hippo", "9" ]

console.log(ar4[1]);
console.log(ar3.split("=")[1]);

const ar5 = ar.findIndex((item) => item.startsWith("cat="));
console.log(ar5);
