import * as React from "react";
import styled from "./authPage.module.scss";
import { toast } from "react-toastify";
import axios from "../../utils/axios";

export default function AuthPage() {
	const [value, setValue] = React.useState({
		email: "",
		password: "",
	});

	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleLogin = async () => {
		try {
			const { data } = await axios.post("/auth/login", {
				email: value.email,
				password: value.password,
			});
			localStorage.setItem("_q", data.auth_token);
			window.location.pathname("/apps/home");
		} catch (error) {
			toast.error("login error");
		}
	};
	return (
		<div className={styled.authPage}>
			<div className={styled.formContainer}>
				<div className={styled.form}>
					<input
						className={styled.input}
						placeholder="Email"
						type="text"
						onChange={handleChange("email")}
					/>
					<input
						className={styled.input}
						placeholder="Password"
						type="password"
						onChange={handleChange("password")}
					/>
					<button onClick={handleLogin} className={styled.submit} type="submit">
						Login
					</button>
					<p className={styled.registerPlace}>
						Don't have a Account?{" "}
						<a className={styled.registerClick} href="/auth/register">
							Register Here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
