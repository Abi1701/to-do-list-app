import * as React from "react";
import styled from "./register.module.scss";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterAuth() {
	const [value, setValue] = React.useState({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleRegister = async () => {
		try {
			await axios.post("https://todo-api-18-140-52-65.rakamin.com/signup", {
				name: value.name,
				email: value.email,
				password: value.password,
				password_confirmation: value.password_confirmation,
			});
			window.location.href("/auth/login");
		} catch (error) {
			toast.error("register error");
		}
	};
	return (
		<div className={styled.register}>
			<div className={styled.registerContainer}>
				<div className={styled.form}>
					<label className={styled.label}>Name</label>
					<input
						className={styled.input}
						type="text"
						placeholder="Name"
						name="name"
						id="name"
						onChange={handleChange("name")}
					/>
					<label className={styled.label}>Email</label>
					<input
						className={styled.input}
						type="text"
						placeholder="Email"
						name="email"
						id="email"
						onChange={handleChange("email")}
					/>
					<label className={styled.label}>Password</label>
					<input
						className={styled.input}
						type="password"
						name="password"
						placeholder="Password"
						id="password"
						onChange={handleChange("password")}
					/>
					<label className={styled.label}>Password Confirmation</label>
					<input
						className={styled.input}
						type="password"
						placeholder="Password Confirmation"
						name="password"
						id="confirm_password"
						onChange={handleChange("password_confirmation")}
					/>
					<button onClick={handleRegister} className={styled.submit}>
						Register
					</button>
				</div>
				<p className={styled.registerPlace}>
					You have a Account?{" "}
					<a className={styled.registerClick} href="/auth/login">
						Login Here
					</a>
				</p>
			</div>
		</div>
	);
}
