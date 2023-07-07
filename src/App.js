import * as React from "react";
import Router from "./routes/routes";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isAuth, setIsAuth] = React.useState(false);
	React.useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);
	const routing = useRoutes(Router(isAuth));
	return (
		<div className="App">
			<ToastContainer />
			{routing}
		</div>
	);
}

export default App;
