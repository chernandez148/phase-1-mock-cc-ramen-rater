const ramenData = "http://localhost:3000/ramens";
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const img = document.querySelector(".detail-image");
const h2 = document.querySelector(".name");
const h3 = document.querySelector(".restaurant");
const rating = document.querySelector("#rating-display");
const comment = document.querySelector("#comment-display");
const newRamen = document.querySelector("#new-ramen");

document.addEventListener("DOMContentLoaded", () => {
  fetch(ramenData)
    .then((resp) => resp.json())
    .then((data) => data.forEach(renderRamen));
});

renderRamen = (ramenImg) => {
  const img = document.createElement("img");
  img.src = ramenImg.image;
  ramenMenu.append(img);

  img.addEventListener("click", () => {
    const imgRamen = document.createElement("img");
    ramenDetail.innerHTML = "";

    imgRamen.src = ramenImg.image;
    h2.textContent = ramenImg.name;
    h3.textContent = ramenImg.restaurant;
    rating.textContent = ramenImg.rating;
    comment.textContent = ramenImg.comment;

    ramenDetail.append(imgRamen, h2, h3);
  });
};

newRamen.addEventListener("submit", (e) => {
  e.preventDefault();

  const ramenValues = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    new_comment: e.target.new_comment.value,
  };
  renderRamen(ramenValues);
});
