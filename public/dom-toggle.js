function button (text) {
  var el = document.createElement("input");
  el.type = "button";
  el.value= text;
  return el;
}

function Toggle (node, onChange) {
  var parent = node.parentNode;
  var name = node.name;
  var placeholder = node.placeholder || node.name;
  var value = node.value;
  
  var container = document.createElement("div");
  container.className = "js-toggle-container";
  parent.replaceChild(container, node); 

  var ok = button(" ok ");
  ok.className = "accept";
  var cancel = button(" x ");
  cancel.className = "cancel";
  var textel = document.createElement("a");

  ok.onclick = function (e) {
    e.preventDefault();
    if (node.value !== value) {
      value = node.value; 
      onChange(name, value);
    }
    showText();
  }

  cancel.onclick = function (e) {
    e.preventDefault();
    node.value = value;
    showText();
  }

  function showText () {
    container.innerHTML = "";
    textel.innerHTML = value || placeholder;
    container.appendChild(textel);
  }

  function showInput () {
    container.innerHTML = "";
    container.appendChild(node);
    container.appendChild(ok);
    container.appendChild(cancel);
  }

  textel.onclick = showInput;
  showText();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Toggle;
}
