import axios from "axios";

export const login = (data, callback) => {
	axios
		.post("https://todo-api-18-140-52-65.rakamin.com/auth/login", data)
		.then((res) => {
			callback(true, res.auth_token);
		})
		.catch((err) => {
			callback(false, err);
		});
};
