// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { devPlugin, getReplacer } from "./plugins/devPlugin";
import { buildPlugin } from "./plugins/buildPlugin";
import optimizer from "vite-plugin-optimizer";

export default defineConfig({
  plugins: [optimizer(getReplacer()), devPlugin(), vue(), buildPlugin()],
});
