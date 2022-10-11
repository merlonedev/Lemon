import { useState } from "react"
import "./App.sass"
import Dialog from "./components/Dialog"
import Switch from "react-switch"
import logo from "./assets/lemon.svg"

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [overlayClick, setOverlayClick] = useState(false)
	const [checked, setChecked] = useState(false)

	const handleChange = () => {
		setOverlayClick(!overlayClick)
		setChecked(!checked)
	}

	return (
		<main>
			<div className="project-description">
				{/* <h1 className="title">Lemon</h1> */}
				<img src={logo} alt="Lemon logo" />
				<p>
					This is a project designed for my job application as Frontend
					Developer at Lemon Energia, a Brazilian company that aims for the
					facilitation and accessibility of sustainable energy. In this project
					I've used React (with Vite), Sass and Typescript, other than minor
					addons such as React Switch.
				</p>
			</div>
			<div className="container">
				<p>
					Change the switch to enable/disable the closing of the dialog by
					clicking outside of it
				</p>

				{/* source: https://www.npmjs.com/package/react-switch */}
				<Switch
					checked={checked}
					onChange={handleChange}
					onColor="#008059"
				/>
				<button
					className="open-dialog grid-item-1"
					onClick={() => setIsOpen(true)}
				>
					Open Dialog
				</button>
			</div>
			<Dialog
				title="Dialog with overlay click"
				description="You are able to close this dialog window by clicking on the overlay, as well as either pressing ESC in the keyboard or the close button"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				closeOnOverlayClick={overlayClick}
			/>
		</main>
	)
}

export default App
