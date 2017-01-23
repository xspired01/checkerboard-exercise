//make checkerboard using only javascript

for (var i =0; i < 63; i++){
  if (i%2===0){
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = '11.1%';
  div.style.float = 'left';
  div.style.paddingBottom = '11.1%';
  div.style.backgroundColor = "red";
  } else {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = '11.1%';
  div.style.float = 'left';
  div.style.paddingBottom = '11.1%';
  div.style.backgroundColor = "black";
  }
  // console.log(document.body);

}
