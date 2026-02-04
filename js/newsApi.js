async function fetchSimilarNews(query) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&pageSize=5&sortBy=relevancy&apiKey=${NEWS_API_KEY}`
    );

    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("NewsAPI error:", error);
    return [];
  }
}

