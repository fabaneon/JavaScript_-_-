
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
var memberlist = {
  "A_Team":"Fabaneon",
  "A_Team2":"NejukMaster",
  "A_Team3":"2001GopnikGuy",
  "A_Team4":"Tanso5607",
  "B_Team1":"Denver",
  "B_Team2":"GodorHuman",
  "B_Team3":"Clonejhs"
};

  var i = 0;
  var print = key+' : ' + memberlist[key] + "<br>";
  document.write(print);
  for( var key in memberlist){
    document.getElementById('#memeberlist').innerHTML = print;
    i++;
  }
}
// 시간관계상 아직 미완성
// 객체 활용에 대한 심화 학습이 필요할것같다.
