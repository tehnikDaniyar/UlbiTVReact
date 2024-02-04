const functions = {
	getManyPosts: (counterPosts) => {

		let arr = [];
		let alf = 'abcdefghigklmnopqrstuvwxyz';

		for (let i = 0; i < counterPosts; i++) {
			arr.push({
				"id": `${i + 1}`,
				"title": `${i + 1}`,
				"description": `${alf[i] ? alf[i] : alf[i % alf.length]}`
			})
		};

		return JSON.stringify(arr);
	},
	getArrOfNumbers: (amountNumbers) => {
		let arr = [];
		for (let i = 1; i <= amountNumbers; i++) {
			arr.push(i)
		};

		return arr;
	}
}


export const { getManyPosts, getArrOfNumbers } = functions;