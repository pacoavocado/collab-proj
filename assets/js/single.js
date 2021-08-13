var repoNameEl = document.querySelector("");
var issueContainer = document.querySelector("");
var limitWarningEl = document.querySelector("");

var getRepoName = function () {
  //using BOM Elements
  var queryString = document.location.search;
  var repoName = queryString.split("=")[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    document.location.replace("./index.html");
  }
};
