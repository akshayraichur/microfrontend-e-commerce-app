const App = async () => {
  let products = await fetch("https://dummyjson.com/products");
  products = await products.json();
  products = products?.products;

  const productsContainer = document.querySelector(".products-container");

  products.forEach((product, index) => {
    if (index < 10) {
      const productContainer = document.createElement("div");
      productContainer.classList.add("product-container");
      productContainer.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <hr />
    `;

      productsContainer.append(productContainer);
    }
  });
};

App();
