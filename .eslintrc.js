// qinfeng

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  // 对Babel解析器的包装使其与 ESLint 兼容。
  parser: 'babel-eslint',
  parserOptions: {
    // 代码是 ECMAScript 模块
    sourceType: 'module'
  },
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
  },
  plugins: ['vuefix'],
  extends: 'eslint:recommended',
  'rules': {

    // allow paren-less arrow functions
    'arrow-parens': 0,
    "arrow-spacing": 2,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': PROD ? 2 : 0,

    'no-mixed-spaces-and-tabs': 0,

    "quotes": 0,
    "space-in-parens": 0,
    "indent": ["warn", 4],
    "no-console": PROD ? 2 : 0,
    "no-unused-vars": [0, {"vars":"all","args":"none"}],// 禁止出现未使用过的变量
    "one-var": 0, //强制变量声明放在一起
    "no-with": 2, //不允许使用with语句
    "eol-last": 2, //文件以换行符结束
    "no-undef": 0, //不允许未声明的变量
    "keyword-spacing": 2, //关键字前后的空格
    "semi": [2, "always"], //强制语句分号结尾
    "strict": [2, "function"], //使用严格模式
    "eqeqeq": 0, //比较的时候使用严格等于
    "space-before-blocks": [2, "always"], //块前的空格
    "no-multiple-empty-lines": [2, {"max": 3}], //空行最多不能超过两行
    
    "object-curly-spacing":0,// 强制在花括号中使用一致的空格
    "key-spacing": PROD ? [2, {"beforeColon":false,"afterColon":true}] : 0,// 强制在对象字面量的属性中键和值之间使用一致的间距
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}], //函数定义时括号前的空格
    "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "ignore",
        "imports": "never",
        "exports": "never",
        "functions": "ignore",
    }]//逗号结尾
  }
}