import * as React from "react";
import styled from "./header.module.scss";
import Plus from "../../assets/plus.svg";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		display: "flex",
		flexDirection: "Column",
		justifyContent: "Center",
		width: "420px",
		height: "369px",
		gap: "50px",
	},
};
export default function HeaderApp() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [value, setValue] = React.useState({
		title: "",
		description: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const handlePostCard = async () => {
		try {
			const { data } = await axios.post(
				"https://todo-api-18-140-52-65.rakamin.com/todos",
				{
					title: value.title,
					description: value.description,
				}
			);
			localStorage.setItem(data.Token);
			window.location.reload();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className={styled.header}>
			<ul className={styled.headerContainer}>
				<li className={styled.headerList}>
					<h1 className={styled.HeaderContent}>Product Roadmap</h1>
				</li>
				<li className={styled.headerList}>
					<button onClick={openModal} className={styled.addButton}>
						<img src={Plus} alt="plus" />
						Add New Group
					</button>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Example Modal">
						<div className={styled.modalTittle}>Add New Group</div>
						<form className={styled.modalForm}>
							<label className={styled.modalLabel}>Tittle</label>
							<input
								onChange={handleChange("title")}
								name="title"
								className={styled.modalInput}
								placeholder="Placeholder"
								type="text"
							/>
							<label className={styled.modalLabel}>Description</label>
							<input
								onChange={handleChange("desctiption")}
								name="description"
								className={styled.modalInput2}
								placeholder="Placeholder"
								type="text"
							/>
						</form>
						<div className={styled.buttonContainer}>
							<button onClick={closeModal} className={styled.buttonModalCancel}>
								Cancel
							</button>
							<button
								onClick={handlePostCard}
								className={styled.buttonModalSubmit}>
								Submit
							</button>
						</div>
					</Modal>
				</li>
			</ul>
		</nav>
	);
}
