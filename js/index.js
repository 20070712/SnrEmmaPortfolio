const readMoreBtn = document.getElementById("read-more-btn");
const hiddenContent = document.getElementById("hidden-content");
readMoreBtn.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    readMoreBtn.innerHTML = "Read Less";
  } else {
    hiddenContent.style.display = "none";
    readMoreBtn.innerHTML = "Read More";
  }
});

const about = document.getElementById("about");
const Content = document.getElementById("content");
about.addEventListener("click", function () {
  if (Content.style.display === "none") {
    Content.style.display = "block";
    about.innerHTML = "Read Less";
  } else {
    Content.style.display = "none";
    about.innerHTML = "Read More";
  }
});
