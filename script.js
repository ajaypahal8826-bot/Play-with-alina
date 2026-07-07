document.addEventListener("DOMContentLoaded", () => {
  console.log("Play with Alina Loaded!");

  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert("This game will be available soon!");
    });
  });
});
