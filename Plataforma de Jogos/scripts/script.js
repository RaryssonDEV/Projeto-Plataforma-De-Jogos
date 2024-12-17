document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      image: "images/cyberpunk2.jpg",
      description: "Explore Night City em um mundo aberto futurista.",
      detailsPage: "pages games/detalhesCyberpunk.html",
      price: "R$ 199,99" 
    },
    {
      id: 2,
      title: "The Last Of Us Parte II Remastered",
      image: "images/tlou2.avif",
      description:"Um jogo de ação e aventura que se passa em um mundo pós-apocalíptico.",
      detailsPage: "pages games/tlou2.html",
      price: "R$ 249,99"
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      image: "images/god.avif",
      description: "Kratos e Atreus enfrentam desafios épicos na mitologia nórdica.",
      detailsPage: "pages games/god.html",
      price: "R$ 279,99" 
    },
    {
      id: 4,
      title: "Red Dead Redemption II",
      image: "images/rdr2.avif",
      description: "Arthur Morgan e a gangue de Van der Linde enfrentam desafios no Velho Oeste, lidando com a lei, traições e a luta pela sobrevivência.",
      detailsPage: "pages games/rdr2.html",
      price: "R$ 199,99" 
    },
    {
      id: 5,
      title: "Horizon Forbidden West",
      image: "images/horizon.webp",
      description: "Aloy explora um vasto e perigoso mundo pós-apocalíptico, enfrentando máquinas e descobrindo segredos antigos para salvar o futuro da humanidade.",
      detailsPage: "pages games/horizon.html",
      price: "R$ 239,99" 
    },
    {
      id: 6,
      title: "Elden Ring",
      image: "images/elden.avif",
      description: "O Tarnished explora o vasto e misterioso Reino das Terras Interditas, enfrentando inimigos poderosos e desvendando segredos para restaurar a Elden Ring e alcançar a grandeza.",
      detailsPage: "pages games/elden.html",
      price: "R$ 289,99"
    },
    {
      id: 7,
      title: "Assassin's Creed Valhalla",
      image: "images/valhalla.avif",
      description: "Eivor, um viking, explora a Inglaterra medieval, lutando por terras, honra e seu destino enquanto enfrenta inimigos e descobre segredos antigos.",
      detailsPage: "pages games/acvalhalla.html",
      price: "R$ 229,99" 
    }
  ];

  const gameListContainer = document.getElementById("game-list");

  // Gerar HTML para cada jogo
  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("col-md-4", "mb-4");

    gameCard.innerHTML = `
      <div class="card h-100">
        <img src="${game.image}" class="card-img-top" alt="${game.title}">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text">${game.description}</p>
          <p class="card-price">Preço: ${game.price}</p> <!-- Exibindo o preço -->
          <a href="${game.detailsPage}" class="btn btn-primary">Detalhes</a>
        </div>
      </div>
    `;

    gameListContainer.appendChild(gameCard);
  });
});
