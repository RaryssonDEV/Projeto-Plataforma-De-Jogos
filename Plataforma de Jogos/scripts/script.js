document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      image: "images/cyberpunk2.jpg",
      description: "Explore Night City em um mundo aberto futurista.",
      detailsPage: "pages games/detalhesCyberpunk.html",
      price: 199.99,
    },
    {
      id: 2,
      title: "The Last Of Us Parte II Remastered",
      image: "images/tlou2.avif",
      description: "Um jogo de ação e aventura que se passa em um mundo pós-apocalíptico.",
      detailsPage: "pages games/tlou2.html",
      price: 249.99,
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      image: "images/god.avif",
      description: "Kratos e Atreus enfrentam desafios épicos na mitologia nórdica.",
      detailsPage: "pages games/god.html",
      price: 279.99,
    },
    {
      id: 4,
      title: "Red Dead Redemption II",
      image: "images/rdr2.avif",
      description: "Arthur Morgan e a gangue de Van der Linde enfrentam desafios no Velho Oeste, lidando com a lei, traições e a luta pela sobrevivência.",
      detailsPage: "pages games/rdr2.html",
      price: 199.99,
    },
    {
      id: 5,
      title: "Horizon Forbidden West",
      image: "images/horizon.webp",
      description: "Aloy explora um vasto e perigoso mundo pós-apocalíptico, enfrentando máquinas e descobrindo segredos antigos para salvar o futuro da humanidade.",
      detailsPage: "pages games/horizon.html",
      price: 239.99,
    },
    {
      id: 6,
      title: "Elden Ring",
      image: "images/elden.avif",
      description: "O Tarnished explora o vasto e misterioso Reino das Terras Interditas, enfrentando inimigos poderosos e desvendando segredos para restaurar a Elden Ring e alcançar a grandeza.",
      detailsPage: "pages games/elden.html",
      price: 289.99,
    },
    {
      id: 7,
      title: "Assassin's Creed Valhalla",
      image: "images/valhalla.avif",
      description: "Eivor, um viking, explora a Inglaterra medieval, lutando por terras, honra e seu destino enquanto enfrenta inimigos e descobre segredos antigos.",
      detailsPage: "pages games/acvalhalla.html",
      price: 229.99,
    },
    {
      id: 7,
      title: "Life Is Strange",
      image: "images/life.jfif",
      description: "Max Caulfield, uma estudante de fotografia, descobre que possui o poder de voltar no tempo, e usa essa habilidade para desvendar mistérios, enfrentar escolhas difíceis e lutar para salvar sua cidade enquanto lida com as consequências de suas ações.",
      detailsPage: "pages games/life.html",
      price: 200.00,
    }
  ];

  const gameListContainer = document.getElementById("game-list");

  // Função para adicionar item ao carrinho
  const addToCart = (game) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id: game.id,
      title: game.title,
      image: game.image,
      price: game.price,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${game.title} foi adicionado ao carrinho!`);
  };

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
          <p class="card-price">Preço: R$ ${game.price.toFixed(2)}</p>
          <a href="${game.detailsPage}" class="btn btn-primary">Detalhes</a>
          <button class="btn btn-success mt-2 add-to-cart-btn">Adicionar ao Carrinho</button>
        </div>
      </div>
    `;

    // Adicionar evento de clique para o botão de "Adicionar ao Carrinho"
    gameCard.querySelector(".add-to-cart-btn").addEventListener("click", () => addToCart(game));

    gameListContainer.appendChild(gameCard);
  });
});
