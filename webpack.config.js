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
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js'
	}
}