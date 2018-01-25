insertCode = function () {
  var link = document.createElement("link");
  link.href = "file:///C:/Users/Guilherme/Documents/nubank/main.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  var script = document.createElement('script');
  script.setAttribute('src', 'file:///C:/Users/Guilherme/Documents/nubank/main.js');
  script.setAttribute('type', 'text/javascript');

  document.getElementsByTagName("head")[0].appendChild(link);
  document.getElementsByTagName("head")[0].appendChild(script);

alert('asdasd')
}

