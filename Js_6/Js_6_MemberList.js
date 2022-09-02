
function memeberlistprinter(){
  var memberlist = {
    "A_Team" : "A-1"
    "A_Team" : "A-2"
    "A_Team" : "A-3"
    "A_Team" : "A-4"
    "B_Team" : "B-1"
    "B_Team" : "B-2"
    "B_Team" : "B-3"
  };

  var i = 0;
  var result;

  while(true){
    result.push("<li>A_Team :"+memberlist.A_Team+" </li><br> ");
    i++;
    if ( i >= memberlist.A_Team.length ) {
      i = 0;
      while (true) {
        result.push("<li>B_Team :"+memberlist.B_Team+" </li><br> ");
        i++;
        if ( i >= memberlist.B_Team.length ) {
          i = 0;
          break;
        }
      }
      break;
    }
  }
}
// 시간관계상 아직 미완성
