const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    projectCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.hidden = !isVisible;
    });
  });
});
