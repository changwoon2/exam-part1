window.onload = () => {
  const btnCrc = document.querySelector(".btnCrc");
  console.log(btnCrc);

  btnCrc.addEventListener("click", () => {
    let hTbody = document.getElementById("htmlTbody");
    console.log(hTbody);

    const newRow0 = hTbody.insertRow();
    // const newRow1 = hTbody.insertRow();
    // const newRow2 = hTbody.insertRow();
    // const newRow3 = hTbody.insertRow();
    // const newRow4 = hTbody.insertRow();

    const newCell0 = newRow0.insertCell();
    const newCell1 = newRow0.insertCell();
    const newCell2 = newRow0.insertCell();
    const newCell3 = newRow0.insertCell();

    // Append 텍스트 노드를 생성한 새롭게 생성한 Cell에 붙이기
    const newText0 = document.createTextNode("임창운");
    newCell0.appendChild(newText0);
    const newText1 = document.createTextNode("changwoon2@naver.com");
    newCell1.appendChild(newText1);
    const newText2 = document.createTextNode("30");
    newCell2.appendChild(newText2);
    const newText3 = document.createTextNode("운동하기");
    newCell3.appendChild(newText3);

    //테이블 row 구하기
    const table = document.getElementById("myTable");
    console.log(table.rows.length - 1);
    console.log(table.rows[0]); //thead
    console.log(table.rows[1]); // tbody --> first row

    // 셀이 몇개인지를 알고싶다면?
    const r = table.rows.length - 1;
    const l = table.rows[0].cells.length;
    console.log(l); //해당 row cell이 몇개인지 출력
    console.log("테이블 row 개수 = " + r);

    //  반복문 순회하면서 각 cell에 정보값을셋팅
    for (let c = 0; c < l; c++) {
      // hTbody.rows[r - 1].cells[c].innerHTML = `Data${c}`;
      hTbody.rows[r - 1].cells[c].innerHTML = `[${r - 1}[${c}]]`;
    }
  });
};
