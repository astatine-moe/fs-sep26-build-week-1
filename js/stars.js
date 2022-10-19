const stars = document.querySelectorAll(".star");
let starsSelected = 1;

//when star is hovered, hover all ones before it, each star has #star1, #star2, etc
console.log(stars);
stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
        //hide all stars
        stars.forEach((star) => {
            star.classList.remove("active");
        });

        let starNum = parseInt(star.id.slice(4));
        starsSelected = starNum;

        for (let i = 1; i <= starNum; i++) {
            document.querySelector(`#star${i}`).classList.add("active");
        }
    });

    star.addEventListener("click", () => {
        alert(`You rated ${starsSelected} stars`);
    });
});
