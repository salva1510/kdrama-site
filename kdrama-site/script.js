const API_KEY = "4c918f6f";

const container = document.getElementById("dramas");
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");

function createDramaCard(data) {
  const div = document.createElement("div");
  div.className = "drama";

  div.innerHTML = `
    <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/180x270"}">
    <h3>${data.Title}</h3>
    <p>⭐ ${data.imdbRating !== "N/A" ? data.imdbRating : "No rating"}</p>
    <p>${data.Year}</p>
  `;

  div.onclick = () => {
    window.location.href = `drama.html?title=${encodeURIComponent(data.Title)}`;
  };

  return div;
}

async function searchDrama() {
  const query = searchBox.value.trim();
  if (!query) return;

  container.innerHTML = "<p>Loading...</p>";

  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await res.json();

  container.innerHTML = "";

  if (data.Response === "True") {
    container.appendChild(createDramaCard(data));
  } else {
    container.innerHTML = "<p>No drama found 😢</p>";
  }
}

searchButton.addEventListener("click", searchDrama);
searchBox.addEventListener("keyup", e => {
  if (e.key === "Enter") searchDrama();
});
