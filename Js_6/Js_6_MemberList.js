
function memeberlistprinter(){
  // var memberlist = {
  //   "A_Team":"A-1",
  //   "A_Team":"A-2",
  //   "A_Team":"A-3",
  //   "A_Team":"A-4",
  //   "B_Team":"B-1",
  //   "B_Team":"B-2",
  //   "B_Team":"B-3"
  // };
// 객체에서 활용되는 배열 속에는 id값이 중복사용이 불가능하다.
// 만일 중복되었을 경우 출력함수는 중복된 id값중 가장 최근에 추가된 값을 불러온다.
// Ex) 위 내용에서 A_Team 이라는 id를 불러오면 A_Team: A-3가 출력되고 나머진 무시된다.
  let memberlist = [
    {id: 1, team:"A_team", name:  "Fabaneon"},
    {id: 2, team:"A_team", name:  "NejukMaster"},
    {id: 3, team:"A_team", name:  "2001GopnikGuy"},
    {id: 4, team:"A_team", name:  "Tanso5607"},
    {id: 5, team:"B_team", name:  "Denver"},
    {id: 6, team:"B_team", name:  "GodorHuman"},
    {id: 7, team:"B_team", name:  "Clonejhs"}
  ];

  console.log(memberlist);
  let lis = '';
  for (var i = 0; i < memberlist.length; i++){
    lis += "<li>" + memberlist[i].team + ' : ' + memberlist[i].name + "</li>" ;
  }
  console.log(lis);
  document.write(lis);
  //
  //
  // let lisA = '';
  //
  // for (var i = 0; i < memberlist.length; i++){
  //   if (memberlist[i].team ==="A_team") {
  //     lisA += "<li>" + memberlist[i].team + ' : ' + memberlist[i].name + "</li>" ;
  //   }
  //   else {}
  // }
  // document.write(lisA);
  // console.log("lisA : " + lisA);
}

// 시간관계상 아직 미완성
// 객체 활용에 대한 심화 학습이 필요할것같다.
