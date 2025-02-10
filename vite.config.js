import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: "index.html", // Homepage
        color_flipper: "src/apps/color-flipper/index.html",
        palindrome_checker: "src/apps/palindrome-checker/index.html",
        quote_generator: "src/apps/quote-generator/index.html",
        stop_watch: "src/apps/stop-watch/index.html",
        todo_list: "src/apps/todo-list/index.html",
      },
    },
  },
  server: {
    open: "/",
  },
});
