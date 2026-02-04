
const data = JSON.parse(localStorage.getItem("analysisInput"));

if (!data) {
  alert("No analysis data found. Please analyze news first.");
  window.location.href = "analyze.html";
}

document.getElementById("resultTitle").innerText = data.title;
document.getElementById("verdict").innerText = "Analyzing...";
document.getElementById("score").innerText = "0%";

const clickbaitWords = [
  "shocking",
  "breaking",
  "you won't believe",
  "exposed",
  "viral",
  "unbelievable"
];

let score = 70;
let reasons = [];

if (
  data.content &&
  clickbaitWords.some(word =>
    data.content.toLowerCase().includes(word)
  )
) {
  score -= 20;
  reasons.push("⚠️ Sensational or clickbait language detected");
} else {
  reasons.push("✅ Neutral and factual language observed");
}

fetchSimilarNews(data.title).then(articles => {

  localStorage.setItem("similarArticles", JSON.stringify(articles));

  const trustedSources = [
    "reuters",
    "bbc",
    "associated press",
    "ap news",
    "the hindu",
    "ndtv",
    "cnn",
    "the guardian"
  ];

  const trusted = articles.some(article =>
    trustedSources.some(src =>
      article.source.name.toLowerCase().includes(src)
    )
  );

  if (trusted) {
    score += 20;
    reasons.push("✅ Trusted news source verification passed");
  } else if (articles.length > 0) {
    score += 10;
    reasons.push("ℹ️ Multiple independent news sources found");
  } else {
    reasons.push("⚠️ No similar articles found for verification");
  }

  score = Math.max(0, Math.min(100, score));

  let verdict =
    score >= 75
      ? "Likely Real"
      : score >= 45
      ? "Possibly Fake"
      : "Highly Suspicious";

  document.getElementById("verdict").innerText = verdict;

  const reasonList = document.getElementById("reasons");
  reasonList.innerHTML = "";

  reasons.forEach(reason => {
    const li = document.createElement("li");
    li.innerText = reason;
    reasonList.appendChild(li);
  });

  const circle = document.getElementById("progressCircle");
  const scoreText = document.getElementById("score");

  const circumference = 440;
  const offset = circumference - (score / 100) * circumference;

  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
    scoreText.innerText = score + "%";
  }, 300);
});
