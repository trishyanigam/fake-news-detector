const container = document.getElementById("similarContainer");

const articles =
  JSON.parse(localStorage.getItem("similarArticles")) || [];

if (articles.length === 0) {
  container.innerHTML =
    "<p style='text-align:center;'>No similar articles found.</p>";
} else {
  articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "similar-card";

    card.innerHTML = `
      <div class="similar-top">
        <h3>${article.title}</h3>
        <span class="match high">Match</span>
      </div>

      <p class="meta">
        Source: <strong>${article.source.name}</strong>
      </p>

      <p class="desc">
        ${article.description || "No description available."}
      </p>

      <a href="${article.url}" class="read-link" target="_blank">
        Read Original Article →
      </a>
    `;

    container.appendChild(card);
  });
}
