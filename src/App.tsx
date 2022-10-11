import "./App.sass"
import Dialog from "./components/Dialog"

function App() {
	return (
		<main>
			<h1 className="title">Lemon</h1>
			<button className="open-dialog">Open Dialog</button>
			<Dialog
				title="Dialog with overlay click"
				description="You are able to close this dialog window by clicking on the overlay, as well as pressing ESC or in the close button"
        isOpen={true}
			/>
		</main>
	)
}

export default App
