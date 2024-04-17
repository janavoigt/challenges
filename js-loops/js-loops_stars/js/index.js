console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const stars = document.createElement("img");

    if (filledStars >= i) {
      stars.setAttribute("src", "./assets/star-filled.svg");
      stars.setAttribute("alt", "stars-foto");
    } else {
      stars.setAttribute("src", "./assets/star-empty.svg");
      stars.setAttribute("alt", "stars-foto");
    }
    stars.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(stars);
  }
}
//--^-- your code here --^--

renderStars(0);
