function test() {
	const data = {
		hoge: 'aaaa',
		huga: 'iiii'
	}

	const { hoge, ...other } = data;

	console.log(hoge, other);

	console.log(data?.huga);
}

export { test };