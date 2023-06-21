// JavaScript code for dynamically generating artwork cards
const container = document.querySelector(".grid");

function createArtworkCard(artwork) {
  const slide = document.createElement("li");
  slide.classList.add("glide__slide");

  const card = document.createElement("div");
  card.classList.add("bg-white", "p-4", "rounded", "shadow", "relative");

  const image = document.createElement("img");
  image.src = artwork.image;
  image.alt = artwork.title;
  image.classList.add("w-full", "mb-4");
  card.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = artwork.title;
  title.classList.add("text-lg", "font-bold");
  card.appendChild(title);

  const artist = document.createElement("p");
  artist.textContent = artwork.artist;
  artist.classList.add("mb-2");
  card.appendChild(artist);

  const price = document.createElement("p");
  price.textContent = `$${artwork.price}`;
  price.classList.add("text-gray-500");
  card.appendChild(price);

  const buyButton = document.createElement("button");
  buyButton.textContent = "Buy Now";
  buyButton.classList.add(
    "absolute",
    "bottom-4",
    "right-4",
    "px-4",
    "py-2",
    "bg-black",
    "text-white",
    "rounded",
    "hidden"
  );
  card.appendChild(buyButton);

  // Show the buy button on hover
  card.addEventListener("mouseenter", () => {
    buyButton.classList.remove("hidden");
  });

  // Hide the buy button when not hovering
  card.addEventListener("mouseleave", () => {
    buyButton.classList.add("hidden");
  });

  slide.appendChild(card);
  container.appendChild(slide);
}

// Initialize Glide carousel
new Glide(".glide", {
  type: "carousel",
  perView: 3,
  gap: 16,
}).mount();

// Loop through artworks array and create artwork cards
artworks.forEach((artwork) => {
  createArtworkCard(artwork);
});
