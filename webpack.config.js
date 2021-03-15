// in ./src/index.js out ./dist/hogehoge.jsとなっている
// in ./src/index.js out ./dist/main.jsとなっている
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js'
	}
}