function create(element, content){
  var ele = document.createElement(element);
  ele.innerHTML = content;
  document.body.appendChild(ele);
  return ele;
}

let H1 = create("h1", "Hello world!"),body = document.body;
H1.style.color = "#fff";
H1.style.fontFamily = "Arial";
H1.style.position = "absolute";
H1.style.left = "50%";
H1.style.top = "50%";
H1.style.transform = "translate(-50%,-50%)";
body.style.background = "#333";
