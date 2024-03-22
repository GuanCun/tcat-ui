/* eslint-disable */
const { name } = require("./package.json");
const typescript = require("rollup-plugin-typescript2");
const vuePlugin = require("rollup-plugin-vue");
const autoprefixer = require("autoprefixer");
const postcss = require("rollup-plugin-postcss");
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
const nodeResolve = require("@rollup/plugin-node-resolve");
const images = require("@rollup/plugin-image"); // 打包图片
const copy = require("rollup-plugin-copy");

const file = (type) => `dist/${name}.${type}.js`;

module.exports = {
  // 这里将 file 方法 和 name 导出
  file,
  name,
};

const overrides = {
  compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
  exclude: [
    // 排除项
    "node_modules",
    "src/App.vue",
    "src/main.ts",
  ],
};

module.exports = {
  input: "./packages/index.ts",
  output: {
    name: "tcat-ui",
    file: file("common"),
    format: "cjs", // 编译模式
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vuePlugin(),
    postcss({
      plugins: [autoprefixer()],
      extract: "bundle.css",
    }),
    images({ include: ["**/*.png", "**/*.jpg", "**/*.svg"] }),
    copy({
      targets: [
        {
          src: "packages/assets/*",
          dest: "dist/assets",
        },
      ],
    }),
  ],
  external: ["vue"], // 依赖模块
};
