const API_KEY = "4c918f6f";

const dramaTitles = [
  "Crash Landing on You",
  "Goblin",
  "Itaewon Class"
];

const container = document.getElementById("dramas");

async function loadDramas() {
  for (const title of dramaTitles) {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    const data = await res.json();

    if (data.Response === "True") {
      const div = document.createElement("div");
      div.className = "drama";
      div.innerHTML = `
        <img src="${data.Poster}" width="150"><br>
        <h3>${data.Title}</h3>
        <p>⭐ IMDb: ${data.imdbRating}</p>
        <p>${data.Year}</p>
      `;
      container.appendChild(createDramaCard(data))
    }
  }
}

if (container) loadDramas();
async function fetchDramaData(title) {
  container.innerHTML = "<p>Loading...</p>";

  const res = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
  const data = await res.json();

  container.innerHTML = "";

  if (data.Response === "True") {
    const div = document.createElement("div");
    div.className = "drama";
    div.innerHTML = `
      <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/180x270"}">
      <h3>${data.Title}</h3>
      <p>⭐ ${data.imdbRating}</p>
      <p>${data.Year}</p>
    `;
    container.appendChild(div);
  } else {
    container.innerHTML = "<p>No drama found 😢</p>";
  }
}
