const apps = [
  { name: "🎨 Color Flipper", path: "/src/apps/color-flipper/index.html" },
  {
    name: "🔁 Palindrome Checker",
    path: "/src/apps/palindrome-checker/index.html",
  },
  {
    name: "📝 Quote Generator",
    path: "/src/apps/quote-generator/index.html",
  },
  { name: "⏱️ Stop Watch", path: "/src/apps/stop-watch/index.html" },
  { name: "✅ To-Do List", path: "/src/apps/todo-list/index.html" },
];

function generateAppList() {
  // get the <ul> element with the id "app-list" or log an error
  const navList = document.getElementById("app-list");
  if (!navList) {
    console.error("No <ul> element with the id 'app-list' found.");
    return;
  }

  // Read more on DocumentFragment:
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
  // https://stackoverflow.com/questions/3397161/should-i-use-document-createdocumentfragment-or-document-createelement
  const fragment = document.createDocumentFragment();

  // Generate the list items dynamically
  apps.forEach((app) => {
    // Create the list item and link elements
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    // Set the attributes and classes
    link.href = app.path;
    link.textContent = app.name;
    link.classList.add("nav-link");

    listItem.appendChild(link);
    fragment.appendChild(listItem);
  });

  // Append the fragment to the <ul> element
  navList.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", generateAppList);