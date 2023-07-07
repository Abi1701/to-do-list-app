import * as React from "react";
import styled from "./toDo.module.scss";
import Line from "../../assets/Line1.svg";
import PlusCircle from "../../assets/plusCircle.svg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import LeftArrow from "../../assets/arrow-left.svg";
import RightArrow from "../../assets/arrow-right.svg";
import Edit from "../../assets/edit.svg";
import Trash from "../../assets/trash.svg";
import Modal from "react-modal";
import Close from "../../assets/close.svg";
import Exclamation from "../../assets/Exclamation.svg";

const progressBar = {
	width: "216px",
	height: "16px",
	borderRadius: "9999px",
	backgroundColor: "rgba(237, 237, 237, 1)",
};

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
const customStylesRemove = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		display: "flex",
		flexDirection: "Column",
		width: "420px",
		height: "188px",
		gap: "50px",
	},
};

export default function ToDos() {
	const [display, setDisplay] = React.useState("none");
	const [progress, setProgress] = React.useState(0);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [removeIsOpen, setRemoveIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	function openRemoveModal() {
		setRemoveIsOpen(true);
	}
	function closeRemoveModal() {
		setRemoveIsOpen(false);
	}

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === 100) {
					return 0;
				}
				const diff = Math.random() * 10;
				return Math.min(oldProgress + diff, 100);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);
	function handleClick() {
		if (display === "none") {
			setDisplay("flex");
		} else {
			setDisplay("none");
		}
	}
	return (
		<div className={styled.toDoContainer}>
			<div className={styled.toDoTittle}>hello</div>
			<img src={Line} alt="line" />
			<div className={styled.bar}>
				<Box sx={{ width: "100%" }}>
					<LinearProgress
						style={progressBar}
						variant="determinate"
						value={progress}
					/>
				</Box>
				<p>99</p>
				<div className={styled.dropDownContainer}>
					<button onClick={handleClick} className={styled.editButton}>
						<img src={PlusCircle} alt="plus" />
					</button>
					<div className={styled.dropDownMenu} style={{ display: display }}>
						<button className={styled.buttonAction}>
							<img src={RightArrow} alt="right" />
							Move Right
						</button>
						<button className={styled.buttonAction}>
							<img src={LeftArrow} alt="left" />
							Move Left
						</button>
						<button onClick={openModal} className={styled.buttonAction}>
							<img src={Edit} alt="edit" />
							Edit
						</button>
						<button onClick={openRemoveModal} className={styled.buttonRemove}>
							<img src={Trash} alt="trash" /> Remove
						</button>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal">
				<div className={styled.modalHeader}>
					<h1 className={styled.modalTittle}>Edit Task</h1>
					<img
						className={styled.close}
						onClick={closeModal}
						src={Close}
						alt="close"
					/>
				</div>
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
			<Modal
				isOpen={removeIsOpen}
				onRequestClose={closeRemoveModal}
				style={customStylesRemove}
				contentLabel="Example Modal">
				<div className={styled.removeModal}>
					<div className={styled.headerRemove}>
						<img src={Exclamation} alt="exclamation" />
						<h1 className={styled.headerTittle}>Delete Task</h1>
						<img
							onClick={closeRemoveModal}
							className={styled.close}
							src={Close}
							alt="close"
						/>
					</div>
					<h1 className={styled.removeModalContent}>
						Are you sure want to delete this task? your action can’t be
						reverted.
					</h1>
					<div className={styled.buttonContainer}>
						<button
							onClick={closeRemoveModal}
							className={styled.buttonModalCancel}>
							Cancel
						</button>
						<button className={styled.buttonModalDelete}>Delete</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}
