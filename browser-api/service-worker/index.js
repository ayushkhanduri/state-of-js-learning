let userData = {
  data: []
};

let proxy = new Proxy(userData, {
  set(target, p, newValue, _receiver) {
    target[p] = newValue;
    paintNewValue(newValue);
    return true;
  }
})

const getApiData = async () => {
  const data = await fetch('http://localhost:3000/getData').then(data => data.json());
  proxy.data = data.data;
}

const deleteElement = (elementId) => {
  proxy.data = proxy.data.filter(item => item.id !== elementId);
}
const paintNewValue = (userList) => {
  let ul = "<ul>";
  userList.forEach(element => {
    ul += `<li>${element.first_name} ${element.last_name} <button onclick="deleteElement('${element.id}')">x</button></li>`;
  });
  ul += "</ul>";
  document.getElementById('user-list').innerHTML = ul;
}
