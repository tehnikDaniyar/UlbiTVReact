

let arr = [];
let alf = 'abcdefghigklmnopqrstuvwxyz';

for (let i = 1; i <= 100; i++) {
	arr.push({
		"id": `${i}`,
		"title": `${i}`,
		"description": `${alf[i] ? alf[i] : alf[i % alf.length]}`
	})
}

export default JSON.stringify(arr);