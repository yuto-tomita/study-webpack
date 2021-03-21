const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // webpack --watchコマンドを実行する
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        // tsxを対象に含める
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    // importで拡張子を省略するためのもの、設定値は上書きされるため、省略したい拡張子は全部列挙しないといけない
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // src/html配下のHTMLのテンプレートを読み込んでdist配下にindex.htmlを出力する
      publicPath: 'dist',
      filename: 'index.html',
      template: 'src/html/index.html',
    }),
  ],
}

// ハマったところ
// errorno2でずっとはまった
// 結局のところbabelの設定ファイルをちゃんと分けて記述することでエラーの回避に成功
// useのところ配列形式で書くとエラーが起きる
