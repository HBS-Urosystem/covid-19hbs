import markdown from '@jackfranklin/rollup-plugin-markdown'
import glob from 'rollup-plugin-glob'
import alias from '@rollup/plugin-alias'
import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import commonjs from "@rollup/plugin-commonjs"
import svelte from "rollup-plugin-svelte"
import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"
//import yaml from '@rollup/plugin-yaml'
import getPreprocessor from "svelte-preprocess"
import config from "sapper/config/rollup.js"
import path from 'path'
import pkg from "./package.json"
//const { markdown } = require('svelte-preprocess-markdown');

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const aliases = {
	'@': path.resolve(__dirname, 'src')
}

const onwarn = (warning, onwarn) =>
	(warning.code === "CIRCULAR_DEPENDENCY" &&
		/[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

const preprocess = getPreprocessor({
	postcss: true,
	/* markdown: true */
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			glob(),
			markdown({ metadata: true }),
			alias({ entries: aliases }),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				preprocess,
				emitCss: false,
			}),
			resolve({
				browser: true,
				dedupe: ["svelte"],
			}),
			commonjs(),

			legacy &&
				babel({
					extensions: [".js", ".mjs", ".html", ".svelte", ".md"],
					babelHelpers: "runtime",
					exclude: ["node_modules/@babel/**"],
					presets: [
						[
							"@babel/preset-env",
							{
								targets: "> 0.25%, not dead",
							},
						],
					],
					plugins: [
						"@babel/plugin-syntax-dynamic-import",
						[
							"@babel/plugin-transform-runtime",
							{
								useESModules: true,
							},
						],
					],
				}),

			!dev &&
				terser({
					module: true,
				}),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			glob(),
			markdown({ metadata: true }),
			alias({ entries: aliases }),
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				generate: "ssr",
				dev,
				preprocess,
				emitCss: false,
			}),
			resolve({
				dedupe: ["svelte"],
			}),
			commonjs(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require("module").builtinModules ||
				Object.keys(process.binding("natives"))
		),

		preserveEntrySignatures: "strict",
		onwarn,
	},

	/* serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],

		preserveEntrySignatures: false,
		onwarn,
	}, */
};
