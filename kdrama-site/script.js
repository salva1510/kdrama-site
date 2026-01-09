const dramas = [
  { title: "Crash Landing on You", year: "2019" },
  { title: "Goblin", year: "2016" },
  { title: "Itaewon Class", year: "2020" }
];

const container = document.getElementById("dramas");

if (container) {
  dramas.forEach(d => {
    const div = document.createElement("div");
    div.className = "drama";
    div.innerHTML = `<h3>${d.title}</h3><p>${d.year}</p>`;
    container.appendChild(div);
  });
}


