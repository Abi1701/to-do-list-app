import axios from "axios";

export const getToDo = () => {
	axios
		.get("https://todo-api-18-140-52-65.rakamin.com/todos")
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const postToDo = (data) => {
	axios
		.post("https://todo-api-18-140-52-65.rakamin.com/todos", data)
		.then((res) => {
			localStorage.setItem("_q", data.accessToken);
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getListItems = () => {
	axios
		.get("https://todo-api-18-140-52-65.rakamin.com/todos/2/items")
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const createItems = () => {
	axios
		.post("https://todo-api-18-140-52-65.rakamin.com/todos/1/items")
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const updateItems = () => {
	axios
		.patch("https://todo-api-18-140-52-65.rakamin.com/todos/1/items/2")
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteItems = () => {
	axios
		.delete("https://todo-api-18-140-52-65.rakamin.com/todos/2/items/2")
		.then.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
