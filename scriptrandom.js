// Your JS goes here

function randomColor(){
  let color = '#';
  for (let i = 0; i < 3; i++){
    color += ("0" + (Math.floor(Math.random()*256)).toString(16)).substr(-2);
  }
  return color;
}

for (var i =0; i < 63; i++){
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = '11.1%';
  div.style.float = 'left';
  div.style.paddingBottom = '11.1%';
  div.style.backgroundColor = randomColor();
  console.log(document.body);
}
