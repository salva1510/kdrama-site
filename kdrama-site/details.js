const API_KEY = "4c918f6f";

document.addEventListener("DOMContentLoaded", () => {
  const detail = document.getElementById("detail");
  const video = document.getElementById("video");

  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  if (!title) return;

  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&plot=full&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        detail.innerHTML = `
          <img src="${data.Poster}">
          <h1>${data.Title}</h1>
          <p>⭐ ${data.imdbRating}</p>
          <p>${data.Genre}</p>
          <p>${data.Plot}</p>
        `;

        // 🔥 YouTube trailer embed (search-based)
        video.innerHTML = `
          <h2>🎬 Trailer</h2>
          <iframe 
            src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(data.Title + ' official trailer')}"
            frameborder="0"
            allowfullscreen>
          </iframe>
        `;
      }
    });
});
