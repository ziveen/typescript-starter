import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	shims: false,
	dts: true,
});
