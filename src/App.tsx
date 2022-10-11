import { useState } from "react"
import "./App.sass"
import Dialog from "./components/Dialog"

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [overlayClick, setOverlayClick] = useState(false)

	

	return (
		<main>
			<h1 className="title">Lemon</h1>
			<div className="container">
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
				closeOnOverlayClick={true}
			/>
		</main>
	)
}

export default App
