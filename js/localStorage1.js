window.onload = () => {
  const btnAllView = document.querySelector(".btnAllView");
  console.log(btnAllView);

  btnAllView.addEventListener("click", () => {
    const getData = localStorage.getItem("background-color");
    console.log(getData);
    console.log(localStorage.key(0));
    console.log(localStorage.key(1));
    console.log(localStorage.key(2));
    console.log(localStorage.key(3));
    console.log(localStorage.key(4));
    console.log(localStorage.length);

    let result = "";
    result += "<tr>";
    result +=
      "<td class='align-middle' width='30%'>" + localStorage.key(2) + "</td>";
    result +=
      "<td class='align-middle' width='30%'>" +
      localStorage.getItem(localStorage.key(2)) +
      "</td>";
    result += "<td><button class='btnRemove btn'>Remove</button></td>";
    result += "</tr>";
    console.log(result);
    let hTbody = document.getElementById("htmlTbody");
    hTbody.innerHTML = result;

    console.log("로컬 스트리지 길이 =" + localStorage.length);
    let ar = new Array();
    let result2 = "";
    for (let i = 0; i < localStorage.length; i++) {
      localStorage.key(i);
      console.log(`${key}:${localStorage.getItem(key)}`);
      result2 += "<tr>";
      result2 += "<td class='align-middle' width='30%'>" + key + "</td>";
      result2 +=
        "<td class='align-middle'>" + localStorage.getItem(key) + "</td>";
      result2 += "<td><button class='btnRemove btn'></button></td>";
      result2 += "</tr>";

      ar.push(result2);
    }
    console.log(ar);

    $("#htmlTbody").empty();
    $("#htmlTbody").append(result2);
    // let ar = new Array();
    // let result = "";
    // ar.push({
    //   name: "홍길동",
    //   email: "hong@hong.com",
    //   age: 25,
    //   pastime: "밥먹기",
    // });
    // ar.push({
    //   name: "홍길동",
    //   email: "hong@hong.com",
    //   age: 25,
    //   pastime: "걷기",
    // });
    // ar.push({
    //   name: "홍길동",
    //   email: "hong@hong.com",
    //   age: 25,
    //   pastime: "영화보기",
    // });
    // ar.push({
    //   name: "홍길동",
    //   email: "hong@hong.com",
    //   age: 25,
    //   pastime: "음악감상",
    // });
    // ar.push({
    //   name: "홍길동",
    //   email: "hong@hong.com",
    //   age: 25,
    //   pastime: "독서하기",
    // });
    // console.log(ar[0].name);
    // console.log(ar[0].email);
    // console.log(ar[0].age);
    // console.log(ar[0].pastime);

    // for (const i in ar) {
    //   result += "<tr>";
    //   result += "<td>" + ar[i].name + "</td>";
    //   result += "<td>" + ar[i].email + "</td>";
    //   result += "<td>" + ar[i].age + "</td>";
    //   result += "<td>" + ar[i].pastime + "</td>";
    //   result += "</tr>";
    // }
    // console.log(result);

    // $("#htmlTbody").empty();
    // $("#htmlTbody").append(result);
  });
};
