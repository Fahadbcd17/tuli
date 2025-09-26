// Product data
const products = [
  {
    title:
      "Women's 2025 new mobile phone bag sweet temperament shoulder messenger bag fashionable all-match sequin chain handbag",
    code: "SP01",
    weight: "330g",
    size: "21cm (L) × 8cm (W) × 14cm (H)",
    quality:
      "এই ব্যাগটি উচ্চমানের PU (synthetic leather) চামড়া, উচ্চমানের কাপড় এবং উচ্চমানের হার্ডওয়্যার দিয়ে তৈরি।",
    price: "800",
    selling_price: "949", //1300
    color: "Black, White, Red",
    available: "Black-2, White-2",
    image: "./assets/SP01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1EW5_Is8lKWeA7l3PkSWwllPpO_IYm_IG?usp=drive_link",
  },
  {
    title:
      "Taizhou bright leather stone pattern ladies bag small square bag pu women's bag solid color handbag messenger bag shoulder bag",
    code: "MP01",
    weight: "550g",
    size: "26cm (L) × 11cm (W) × 18cm (H)",
    quality: "PU synthetic leather",
    price: "1550",
    selling_price: "1799", //3450
    color: "Black, White, Wine Red, Earthly Yellow, Green",
    available: "Black-1, White-1, Earthly Yellow-1",
    image: "./assets/MP01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1gdvJ1-QBuzEuKf_rAZG_93dBk7d-HXZ2?usp=drive_link",
  },
  {
    title:
      "Large capacity texture large bag women 2025 new style high-end spring and autumn shoulder bag versatile net celebrity tote bag",
    code: "HB01",
    weight: "305g",
    size: "28cm (L) × 11cm (W) × 23cm (H),300g",
    quality: "synthetic leather",
    price: "750",
    selling_price: "949", //1700
    color: "Black, White, Coffee, Khaki",
    available: "Black-2, White-2, Coffee-2, Khaki-1",
    image: "./assets/HB01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/10gyVh549HiBadl8sfc31uILViNCaPGCU?usp=drive_link",
  },
  {
    title:
      "New macaron three-piece set fashion handbag Western style simple large capacity shoulder bag high value crossbody women's bag",
    code: "BP01",
    weight: "1085g",
    size: "Length 29cm, Width 14cm, Height 22cm",
    quality: "PU synthetic leather",
    price: "2050",
    selling_price: "2699", //4350
    color: "Black, White, Pink, Yellow, Green, Earthly Yellow, Red, Khaki",
    available: "Black-2, Pink-3, Yellow-2",
    image: "./assets/BP01.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/1V_HePoBuhhYeDsbCzKFYQ2TeHJYktPFD?usp=drive_link",
  },
  // {
  //   title:
  //     "Advanced texture large-capacity bucket bag women's 2024 summer new fashion messenger bag niche commuter shoulder bag",
  //   code: "BP02",
  //   weight: "310g",
  //   size: "",
  //   price: "700",
  //   selling_price: "",
  //   color: "White",
  //   available: "White",
  //   image: "./assets/BP02.jpg",
  //   driveLink:
  //     "https://drive.google.com/drive/folders/19DUnCC7ChFfA8JVWLXwCLwA3F0-4PlRa?usp=drive_link",
  // },
  {
    title:
      "Brand Atmospheric Leather Ladies Handbag Premium Bag 2025 New Women's Bag Fashion Send Mom Bag Middle Age",
    code: "BP03",
    weight: "735g",
    size: "29cm (L) × 12cm (W) × 23cm (H)",
    quality: "synthetic leather",
    price: "1800",
    selling_price: "2249", //2800
    color: "Blue, Rice White, Black, Yellow, Green",
    available: "Blue-1, White-1",
    image: "./assets/BP03.jpg",
    driveLink:
      "https://drive.google.com/drive/folders/19CpCFMDVBXZLpip-fscY3Ci-KHC8wreo?usp=drive_link",
  },
];

// DOM elements
const productGrid = document.getElementById("productGrid");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");

// Render product cards
function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="view-larger-btn" data-image="${product.image}" data-title="${product.title}">
                    <span class="view-larger-text">View Larger</span>
                </button>
            </div>
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <div class="product-info">
                    <p><span class="info-label">Code:</span> ${product.code}</p>
                    <p><span class="info-label">Weight:</span> ${product.weight}</p>
                    <p><span class="info-label">Size:</span> ${product.size}</p>
                    <p><span class="info-label">Quality:</span> ${product.quality}</p>
                    <p><span class="info-label">Selling Price:</span> ${product.selling_price}</p>
                    <p><span class="info-label">Color:</span> ${product.color}</p>
                    <p><span class="info-label">Available:</span> ${product.available}</p>
                </div>
                <a href="${product.driveLink}" target="_blank" rel="noopener noreferrer" class="drive-btn">
                    <svg class="drive-icon" viewBox="0 0 24 24">
                        <path d="M7.5 3.75H3.75v3.75H7.5zm1.5 0v3.75h3.75V3.75zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V5.25zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V6.75z"/>
                    </svg>
                    View on Drive
                </a>
            </div>
        </div>
    `
    )
    .join("");

  // Add event listeners to all view buttons
  document.querySelectorAll(".view-larger-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const imageSrc = this.getAttribute("data-image");
      const imageAlt = this.getAttribute("data-title");
      openModal(imageSrc, imageAlt);
    });
  });
}

// Modal functions
function openModal(imageSrc, imageAlt) {
  console.log("Opening modal with:", imageSrc);
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  imageModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners
closeModalBtn.addEventListener("click", closeModal);
imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    closeModal();
  }
});

// Initialize
document.addEventListener("DOMContentLoaded", renderProducts);
