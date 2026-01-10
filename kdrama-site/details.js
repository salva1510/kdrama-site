const API_KEY = "4c918f6f";

document.addEventListener("DOMContentLoaded", async () => {
  const detail = document.getElementById("detail");
  const video = document.getElementById("video");

  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  if (!title) return;

  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&plot=full&apikey=${API_KEY}`
  );
  const data = await res.json();

  if (data.Response === "True") {
    detail.innerHTML = `
      <img src="${data.Poster}">
      <h1>${data.Title}</h1>
      <p>⭐ ${data.imdbRating}</p>
      <p>${data.Genre}</p>
      <p>${data.Plot}</p>
    `;

    // ✅ FREE & LEGAL YouTube trailer embed
    video.innerHTML = `
      <h2>🎬 Official Trailer</h2>
      <iframe
        src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
          data.Title + " official trailer"
        )}"
        allowfullscreen
        loading="lazy">
      </iframe>
    `;
  }
});
