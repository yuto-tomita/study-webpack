const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// in ./src/index.js out ./dist/hogehoge.jsとなっている
// in ./src/index.js out ./dist/main.jsとなっている
module.exports = {
	// 開発環境
	mode: 'development',
	// 本番環境もある
	// mode: 'production',
	// webpack --watchコマンドを実行する
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				// tsxを対象に含める
				test:/\.ts$|tsx/,
				exclude: /node_modules/,
				use: 'babel-loader'
				// use: [
				// 	{
				// 		// バンドル前にバベル(ex5形式にコンパイル)ためのプラグインとtypescriptを変換するためのプラグイン
				// 		options: {
				// 			// 使用するpresetsはbabel公式を参照
				// 			presets: [
				// 				'@babel/preset-env',
				// 				'@babel/preset-react',
				// 				// '@babel/preset-typescript'
				// 			],
				// 			plugins: ['@babel/plugin-syntax-jsx']
				// 		}
				// 	}
				// ]
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
		// importで拡張子を省略するためのもの、設定値は上書きされるため、省略したい拡張子は全部列挙しないといけない
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			// publicPath: 'dist',
			// filename: 'index.html',
			template: 'src/html/index.html',
		})
	]
}

// ハマったところ
// errorno2でずっとはまった
// 結局のところbabelの設定ファイルをちゃんと分けて記述することでエラーの回避に成功