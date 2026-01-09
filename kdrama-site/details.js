const API_KEY = "4c918f6f";

document.addEventListener("DOMContentLoaded", () => {
  const detail = document.getElementById("detail");

  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  if (!title) {
    detail.innerHTML = "<p>No drama selected</p>";
    return;
  }

  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&plot=full&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        detail.innerHTML = `
          <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/250x350"}">
          <h1>${data.Title}</h1>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Rating:</strong> ⭐ ${data.imdbRating}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
        `;
      } else {
        detail.innerHTML = "<p>Drama not found 😢</p>";
      }
    })
    .catch(() => {
      detail.innerHTML = "<p>Error loading drama</p>";
    });
});
