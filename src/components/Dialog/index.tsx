import React from "react"
import "./dialog.sass"

interface Props {
	title?: string
	description?: string
	isOpen: boolean
}

const Dialog = ({ title, description, isOpen }: Props) => {
	return (
		<div className="overlay" hidden={!isOpen}>
			<div className="dialog" hidden={!isOpen}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Dialog
