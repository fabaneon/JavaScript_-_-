function daynightHandler(self){
  if(self.value === 'DayMode'){
    self.value = 'Nightmode';
    body.style.color = 'black';
    body.style.backgroundColor = 'white';

    var i = 0;
    while(true){
      title[i].style.color = 'white';
      title[i].style.backgroundColor = 'grey';
      i++;
      if(i >= title.length){
        i = 0;
        break;
      }
    }
    while(true){
      important[i].style.color = 'indianred';
      i++;
      if(i >= important.length){
        i = 0;
        break;
      }
    }
  }


  else{
    self.value = 'DayMode';
    body.style.color = 'white';
    body.style.backgroundColor = 'black';

    var i = 0;

    while(true){

      title[i].style.color = 'yellow';
      title[i].style.backgroundColor = 'black';
      i++;
      if(i >= title.length){
        i = 0;
        break;
      }
    }
    i = 0;
    while(true){
      important[i].style.color = 'powderblue';
      i++;
      if(i >= important.length){
        i = 0;
        break;
      }
    }
  }
}
