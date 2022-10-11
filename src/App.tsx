import { useState } from "react"
import "./App.sass"
import Dialog from "./components/Dialog"
import Switch from "react-switch"

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
			<h1 className="title">Lemon</h1>
			<div className="container">
				<p>
					Change the switch to enable/disable the closing of the dialog by
					clicking outside of it!
				</p>

				{/* source: https://www.npmjs.com/package/react-switch */}
				<Switch checked={checked} onChange={handleChange} />
				<button
					className="open-dialog grid-item-1"
					onClick={() => setIsOpen(true)}
				>
					Open Dialog
				</button>
			</div>
			<Dialog
				title="Dialog with overlay click"
				description="You are able to close this dialog window by clicking on the overlay, as well as pressing ESC or in the close button"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				closeOnOverlayClick={overlayClick}
			/>
		</main>
	)
}

export default App
