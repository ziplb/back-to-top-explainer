const SCROLL_GAP = 400;

// show/hide button
const backToTopHolderEl = document.getElementById("back-to-top-holder");

function handleWindowScroll() {
  if (document.documentElement.scrollTop > SCROLL_GAP) {
    backToTopHolderEl.classList.add("page--back-to-top_visible");
    return;
  }

  backToTopHolderEl.classList.remove("page--back-to-top_visible");
}

window.addEventListener("scroll", handleWindowScroll);

// scroll to top on button click
const backToTopButtonEl = document.getElementById("back-to-top-button");

function handleButtonBackToTopClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

backToTopButtonEl.addEventListener("click", handleButtonBackToTopClick);
