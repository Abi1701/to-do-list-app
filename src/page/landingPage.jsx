import * as React from "react";
import styled from "./landingpage.module.scss";
import HeaderApp from "../components/header/header";
import GroupTask1 from "../components/GroupTask1/groupTask1";
import GroupTask2 from "../components/GroupTask2/groupTask2";
import GroupTask3 from "../components/GroupTask3/groupTask3";
import GroupTask4 from "../components/GroupTask4/groupTask4";

export default function LandingPage() {
	return (
		<div className={styled.landingPage}>
			<HeaderApp />
			<div className={styled.taskContainer}>
				<GroupTask1 />
				<GroupTask2 />
				<GroupTask3 />
				<GroupTask4 />
			</div>
		</div>
	);
}
