import axios from "axios";


export default class postServices {
	static async getPosts(sortProperty, currentPage) {
		// const responce = await fetch('http://localhost:3000/posts', {
		// 	method: 'GET',
		// 	headers: { "Accept": "application/json" }
		// });

		const responce = await axios.get('http://localhost:3000/posts', {
			params: {
				_page: currentPage,
				_per_page: 10,
				_sort: sortProperty
			}
		});
		console.log('getted Data', responce.data)
		return await responce.data;
	}
	static async deletePost(id) {
		console.log('deleteId', id)
		await fetch(`http://localhost:3000/posts/${id}`, { method: 'Delete' });
	}
	static async setPost(postData) {
		await fetch(`http://localhost:3000/posts`, { method: 'Post', body: postData });
	}
	static async searchPost(searchQuery) {
		const responce = await fetch(`http://localhost:3000/posts?q=${searchQuery}`, { method: 'GET' });
		return await responce.json();
	}
}