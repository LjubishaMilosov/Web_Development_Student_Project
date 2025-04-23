const productGrid = document.querySelector(".product-grid");

// Fetch product data from products.json
fetch("../assets/products.json")
    .then((response) => response.json())
    .then((data) => {
        const products = data.products;

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            // Add badge if the product has a discount or is new
            let badgeHTML = "";
            if (product.discount) {
                const discountPercentage = Math.round(
                    ((parseFloat(product.discount.replace(/[^0-9.-]+/g, "")) -
                        parseFloat(product.price.replace(/[^0-9.-]+/g, ""))) /
                        parseFloat(product.discount.replace(/[^0-9.-]+/g, ""))) *
                        100
                );
                badgeHTML = `<div class="product-badge discount">${discountPercentage}%</div>`;
            } else {
                badgeHTML = `<div class="product-badge new">New</div>`;
            }

            productCard.innerHTML = `
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <p class="product-name">${product.name}</p>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">
                        ${product.price}
                        ${
                            product.discount
                                ? `<span class="product-discount">${product.discount}</span>`
                                : ""
                        }
                    </p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
                <div class="product-links">
                    <a href="#" class="product-link">
                        <img src="../assets/images/living-room/Frame 11.png" alt="Share" class="product-icon">
                    </a>
                    <a href="#" class="product-link">
                        <img src="../assets/images/living-room/Frame 12.png" alt="Compare" class="product-icon">
                    </a>
                    <a href="#" class="product-link">
                        <img src="../assets/images/living-room/Frame 10.png" alt="Like" class="product-icon">
                    </a>
                </div>
            `;

            productGrid.appendChild(productCard);
        });
    })
    .catch((error) => console.error("Error fetching product data:", error));