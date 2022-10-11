import React from "react"
import "./dialog.sass"

interface Props {
	title?: string
	description?: string
	isOpen: boolean
	onClose: () => void
}

const Dialog = ({ title, description, isOpen, onClose }: Props) => {
	return (
		<div className="overlay" hidden={!isOpen}>
			<div className="dialog" hidden={!isOpen}>
				<button className="close-dialog" onClick={onClose}>
					&#10005;
				</button>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Dialog
