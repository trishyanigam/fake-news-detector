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


// const NEWS_API_KEY = "106c3cf1de9d41c5ba21bf2105d6b543";

// async function fetchSimilarNews(query) {
//     try {
//         const res = await fetch(
//             `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=5&sortBy=relevancy&apiKey=${NEWS_API_KEY}`
//         );

//         const data = await res.json();
//         return data.articles || [];
//     } catch (error) {
//         console.error("NewsAPI error:", error);
//         return [];
//     }
// }