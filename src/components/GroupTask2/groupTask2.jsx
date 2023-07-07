import React from "react";
import styled from "./groupTask2.module.scss";
import PlusCircle from "../../assets/plusCircle.svg";
import Modal from "react-modal";
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

export default function GroupTask2() {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className={styled.groupTask2}>
			<div className={styled.groupTaskContainer}>
				<div className={styled.tittleTask}>Group Task 2</div>
				<p className={styled.monthTask}>April - June</p>
				<button onClick={openModal} className={styled.buttonNewTask}>
					<img src={PlusCircle} alt="plusCircle" /> New Task
				</button>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal">
					<div className={styled.modalTittle}>Create Task</div>
					<form className={styled.modalForm}>
						<label className={styled.modalLabel}>Task Name</label>
						<input
							className={styled.modalInput}
							placeholder="Type Your Task"
							type="text"
						/>
						<label className={styled.modalLabel}>Progress</label>
						<input
							className={styled.modalInput2}
							placeholder="Progress"
							type="text"
						/>
					</form>
					<div className={styled.buttonContainer}>
						<button onClick={closeModal} className={styled.buttonModalCancel}>
							Cancel
						</button>
						<button className={styled.buttonModalSubmit}>Submit</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}
