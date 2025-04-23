const products = [
    {
        name: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2,500,000",
        discount: "Rp 3,500,000",
        image: "../assets/images/living-room/Syltherine.png",
    },
    {
        name: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2,500,000",
        discount: null,
        image: "../assets/images/living-room/Leviosa.png",
    },
    {
        name: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7,000,000",
        discount: "Rp 14,000,000",
        image: "../assets/images/living-room/Lolito.png",
    },
    {
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500,000",
        discount: null,
        image: "../assets/images/living-room/Respira.png",
    },
    {
        name: "Grifo",
        description: "Night lamp",
        price: "Rp 1,500,000",
        discount: null,
        image: "../assets/images/living-room/Grifo.png",
    },
    {
        name: "Muggo",
        description: "Small mug",
        price: "Rp 150,000",
        discount: null,
        image: "../assets/images/living-room/Muggo.png",
    },
    {
        name: "Pingky",
        description: "Cute bed set",
        price: "Rp 7,000,000",
        discount: "Rp 14,000,000",
        image: "../assets/images/living-room/Pingky.png",
    },
    {
        name: "Potty",
        description: "Minimalist flower pot",
        price: "Rp 500,000",
        discount: null,
        image: "../assets/images/living-room/Potty.png",
    },
];

const productGrid = document.querySelector(".product-grid");

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
                ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ""}
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