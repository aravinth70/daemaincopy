/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  importOrder: [
    "^react",
    "^next",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^@context/(.*)$",
    "^@hooks/(.*)$",
    "^@utils/(.*)$",
    "^@cms/(.*)$",
    "",
    "^@layout/(.*)$",
    "^@components/(.*)$",
    "^[./]",
    "",
    "<TYPES>",
    "",
    "<TYPES>^[./]",
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
