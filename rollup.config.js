import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

export default [
    {
        input: "./src/index.js",
        output: {
            file: "./dist/index.js",
            format: "cjs",
            sourcemap: true,
            external: [
                "@hyperapp/router"
            ]
        },
        plugins: [
            commonjs(),
        ]
    },
    {
        input: "./src/index.js",
        output: {
            file: "./dist/hyperapp-apollo.js",
            format: "umd",
            name: "hyperappHashRouter",
            sourcemap: false
        },
        plugins: [
            nodeResolve(),
            commonjs(),
        ]
    },
    {
        input: "./src/index.js",
        output: {
            file: "./dist/hyperapp-apollo.min.js",
            format: "umd",
            name: "hyperappHashRouter"
        },
        plugins: [
            nodeResolve(),
            commonjs(),
            uglify(),
        ]
    }
]
