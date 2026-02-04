function analyzeNews() {
  const title = document.getElementById("newsTitle").value.trim();
  const content = document.getElementById("newsContent").value.trim();
  const url = document.getElementById("newsUrl").value.trim();

  if (!title && !content && !url) {
    alert("Please enter headline, content, or URL");
    return;
  }

  const data = {
    title: title || "No headline provided",
    content,
    url
  };

  // Save user input
  localStorage.setItem("analysisInput", JSON.stringify(data));

  // Redirect to result page
  window.location.href = "result.html";
}



