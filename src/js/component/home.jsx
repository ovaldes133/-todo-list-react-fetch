import React from "react";
import { TodoList } from "./todolist";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="todolist">
			<TodoList />
		</div>
	);
};

export default Home;