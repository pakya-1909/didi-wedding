import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites at https://<user>.github.io/<repo-name>/
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "didi-wedding";

export default defineConfig({
  plugins: [react()],
  base: repositoryName ? `/${repositoryName}/` : "/"
});
