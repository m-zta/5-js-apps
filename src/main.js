document.addEventListener("DOMContentLoaded", () => {
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

  const navList = document.getElementById("app-list");

  // Generate the list items dynamically
  apps.forEach((app) => {
    // Create the list item and link elements
    const listItem = document.createElement("li"); // is like <li>...</li>
    const link = document.createElement("a"); // is like <a>...</a>

    // Set the attributes and classes
    link.href = app.path; // is like < href="...">...</a>
    link.textContent = app.name; // is like <a href="...">App Name</a>
    link.classList.add("nav-link"); // is like <a class="nav-link" href="...">...</a>

    // Append the link to the list item and the list item to the list
    listItem.appendChild(link); // is like <li><a href="...">...</a></li>
    navList.appendChild(listItem); // is like <ul><li><a href="...">...</a></li></ul>

    // The code above is equivalent to the following HTML:
    // <li>
    //   < href="..." class="nav-link">App Name</a>
    // </li>
  });
});
