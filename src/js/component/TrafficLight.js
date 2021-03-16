import React, { useState } from "react";
export function TrafficLight() {
	let [SelectedLight, setSelectedLigth] = useState(null);
	return (
		<div>
			<div id="traffictop"></div>
			<div id="container">
				<div
					className={
						"circle red " + (SelectedLight == "red" ? "glow" : null)
					}
					onClick={() => {
						setSelectedLigth("red");
					}}></div>
				<div
					className={
						"circle yellow " +
						(SelectedLight == "yellow" ? "glow" : null)
					}
					onClick={() => {
						setSelectedLigth("yellow");
					}}></div>
				<div
					className={
						"circle green " +
						(SelectedLight == "green" ? "glow" : null)
					}
					onClick={() => {
						setSelectedLigth("green");
					}}></div>
			</div>
		</div>
	);
}
