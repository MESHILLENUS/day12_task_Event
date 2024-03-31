const surveyForm = document.querySelector("#surveyForm");
surveyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  surveyForm.reset();
});

const starSpan = document.querySelector("#experience");

for (let index = 0; index < 5; index++) {
  const starSvg = '<img src="star-solid.svg" width="24" height="24"/>';
  starSpan.innerHTML += starSvg + " ";
}