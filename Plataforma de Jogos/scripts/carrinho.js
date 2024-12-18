document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Renderizar itens no carrinho
    const renderCart = () => {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price;
  
        const itemCard = document.createElement("div");
        itemCard.classList.add("col-md-4", "mb-4");
  
        itemCard.innerHTML = `
          <div class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-price">Preço: R$ ${item.price.toFixed(2)}</p>
              <button class="btn btn-danger remove-btn" data-index="${index}">Remover</button>
            </div>
          </div>
        `;
  
        cartItemsContainer.appendChild(itemCard);
      });
  
      totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  
      // Evento de clique para remover itens
      document.querySelectorAll(".remove-btn").forEach((button) =>
        button.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        })
      );
    };
  
    renderCart();
  
    // Finalizar Compra
    document.getElementById("finalizar-compra").addEventListener("click", () => {
      alert("Compra finalizada com sucesso!");
      localStorage.removeItem("cart");
      renderCart();
    });
  });
