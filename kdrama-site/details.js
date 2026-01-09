const API_KEY = "4c918f6f";
const detail = document.getElementById("detail");

const params = new URLSearchParams(window.location.search);
const title = params.get("title");

async function loadDrama() {
  if (!title) return;

  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
  const data = await res.json();

  if (data.Response === "True") {
    detail.innerHTML = `
      <img src="${data.Poster}" style="max-width:250px;border-radius:10px;">
      <h1>${data.Title}</h1>
      <p><strong>Year:</strong> ${data.Year}</p>
      <p><strong>Rating:</strong> ⭐ ${data.imdbRating}</p>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
    `;
  } else {
    detail.innerHTML = "<p>Drama not found</p>";
  }
}

loadDrama();
