let list = document.querySelector(".list");
let API = "https://rickandmortyapi.com/api/character";
async function get(obj) {
  await fetch("http://localhost:8011/characters", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
}

async function render() {
  let products = await fetch(API)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(products.results);

  list.innerHTML = "";
  products.results.forEach((item) => {
    get(item);
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `
      <div class="card m-5" style="width: 18rem;">
    <img src=${item.image} class="card-img-top" alt="product">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
    </div>
  </div>
      `;
    list.append(newElem);
  });
}
render();
// console.log(products)

let list2 = document.querySelector(".list2");
async function render2() {
  let products = await fetch("http://localhost:8011/characters")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(products);

  list2.innerHTML = "";
  products.forEach((item) => {
    // get(item)
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `
      <div class="card m-5" style="width: 18rem;">
    <img src=${item.image} class="card-img-top" alt="product">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
    </div>
  </div>
      `;
    list2.append(newElem);
  });
}
render2();
