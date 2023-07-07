import * as React from "react";
import styled from "./authPage.module.scss";
import { toast } from "react-toastify";
import { login } from "../../helpers/auth.helper";

export default function AuthPage() {
	const [value, setValue] = React.useState({
		email: "",
		password: "",
	});

	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleLogin = () => {
		const data = {
			email: value.email,
			password: value.password,
		};
		login(data, (status, res) => {
			if (status) {
				localStorage.setItem("auth_token", res);
				toast.success("Berhasil");
				window.location.href = "/apps/home";
			} else {
				toast.error("gagal");
			}
		});
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
