const body = {
  setColor:function(color){
   document.querySelector('body').style.color = color;
  },
  setbackgroundColor:function(color){
   document.querySelector('body').style.backgroundColor = color;
  }
};

let title = {
  setColor:function(color){
    var title_color = document.querySelectorAll('#title');
    var i = 0;
    while(true){

      title_color[i].style.color = color;
      i++;
      if(i >= title_color.length){
        i = 0;
        break;
      }
    }
  },
  setbackgroundColor:function(color){
    var title_bgcolor = document.querySelectorAll('#title');
    var i = 0;
    while(true){

      title_bgcolor[i].style.backgroundColor = color;
      i++;
      if(i >= title_bgcolor.length){
        i = 0;
        break;
      }
    }
  }
};

let important = {
  setColor:function(color){
    var important_color = document.querySelectorAll('#important');
    var i = 0;
    while(true){

      important_color[i].style.color = color;
      i++;
      if(i >= important_color.length){
        i = 0;
        break;
      }
    }
  },
  setbackgroundColor:function(color){
    var important_bgcolor = document.querySelectorAll('#important');
    var i = 0;
    while(true){

      important_bgcolor[i].style.backgroundColor = color;
      i++;
      if(i >= important_bgcolor.length){
        i = 0;
        break;
      }
    }
  }
};
