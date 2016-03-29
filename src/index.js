import Toggle from './dom-toggle'
import request from './request'

document.getElementById("get").onclick = (e) => {
  return request({
    method: "GET",
    url: "/api/profile",
    headers: {Authorization: "asdf-asdf-asdf-asdf"}
  })
  .then(x => {
    document.getElementById("display").innerHTML = x;
  })
  .catch(x => console.error(x))
}

const slice = (n) => [].slice.call(n)

const collect = (name, value) => {
  return request({
    method: "PUT",
    url: "/api/profile",
    body: JSON.stringify({
      name,
      value
    }),
    headers: {Authorization: "asdf-asdf-asdf-asdf"}
  })
  .catch(x => console.error(x))
}

let root = document.getElementById("root")
slice(root.children).map(x => Toggle(x, collect))

