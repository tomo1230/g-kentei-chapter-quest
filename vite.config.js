import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName?.endsWith(".github.io");

export default defineConfig({
  base: isGitHubPages && repositoryName && !isUserOrOrgPage ? `/${repositoryName}/` : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
