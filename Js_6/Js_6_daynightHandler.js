function daynightHandler(self){
  if(self.value === 'DayMode'){
    self.value = 'Nightmode';
    body.setColor('black');
    body.setbackgroundColor('white');
    title.setColor('white');
    title.setbackgroundColor('grey');
    important.setColor('indianred');
  }

  else{
    self.value = 'DayMode';
    body.setColor('white');
    body.setbackgroundColor('black');

    title.setColor('yellow');
    title.setbackgroundColor('black');
    important.setColor('green');
  }
}
