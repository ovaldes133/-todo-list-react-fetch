import React, { useState, useEffect } from "react";

export const TodoList = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	useEffect(() => {
		getTarea();
	}, []);
	function getTarea() {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/didiego",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setTarea(result);
			})
			.catch((error) => console.log("error", error));
	}
	return (
		<div>
			<div className="contenedor">
				<h1>Tareas que tienes que hacer!</h1>
				<input
					placeholder="agrega una tarea nueva!"
					onChange={(e) => {
						setTarea(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						tarea == ""
							? null
							: setListaTareas([...listaTareas, tarea]);
					}}>
					Agregar tarea
				</button>
				<div>
					{listaTareas.map((tarea, key) => {
						return (
							<p className="textito" key={key}>
								{tarea}
								<button
									className="buttoncito"
									onClick={() => {
										setListaTareas(
											listaTareas.filter(function (
												item,
												i
											) {
												return i !== key;
											})
										);
									}}>
									X
								</button>
							</p>
						);
					})}
				</div>
				<div>
					<p>Hay {listaTareas.length} tareas agregadas correctamente! </p>
				</div>
			</div>
		</div>
	);
};