var _a, _b;
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// GitHub Pages serves project sites at https://<user>.github.io/<repo-name>/
var repositoryName = (_b = (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0 ? void 0 : _a.split("/")[1]) !== null && _b !== void 0 ? _b : "didi-wedding";
export default defineConfig({
    plugins: [react()],
    base: repositoryName ? "/".concat(repositoryName, "/") : "/"
});
