import React from "react"
import "./dialog.sass"

interface Props {
	title: string
	description: string
}

const Dialog = ({ title, description }: Props) => {
	return (
		<div className="overlay">
			<div className="dialog">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Dialog
