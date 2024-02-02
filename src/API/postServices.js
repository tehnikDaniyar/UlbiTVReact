export default class postServices {
	static async getPosts() {
		const responce = await fetch('http://localhost:3000/posts', { method: 'GET' });
		return await responce.json();
	}
	static async deletePost(id) {
		await fetch(`http://localhost:3000/posts/${id}`, { method: 'Delete' });
	}
	static async setPost(postData) {
		await fetch(`http://localhost:3000/posts`, { method: 'Post', body: postData });
	}
	static async sortPosts(property) {
		const responce = await fetch(`http://localhost:3000/posts?_sort=${property}`, { method: 'GET' });
		return await responce.json();
	}
	static async searchPost(searchQuery) {
		const responce = await fetch(`http://localhost:3000/posts?q=${searchQuery}`, { method: 'GET' });
		return await responce.json();
	}
}