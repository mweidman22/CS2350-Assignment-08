//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import {sports_cars} from './sport_cars'
for (let g of sports_cars) {
    let g_thumb = document.getElementById('g' + g.id)
    g_thumb.innerHTML = `<img src="${g.URI}" alt="${g.title}" class="img-thumbnail"/>`



    g_thumb.onclick = function () {
        displayCar(g)

    }
}
let featured_car = document.querySelector(".featured")
function displayCar(sports_cars){
    featured_car.innerHTML= `
    <div class="card" style="width: 18rem;">
  <img src="${sports_cars.URI}" class="card-img-top" alt="${sports_cars.title}">
  <div class="card-body">
    <h5 class="card-title">${sports_cars.title}</h5>
    <p class="card-text">${sports_cars.Description}</p>
  </div>
</div>
    `
}