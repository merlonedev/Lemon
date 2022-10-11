import React from "react"

interface Props {
	title: string
	description: string
}

const Dialog = ({ title, description }: Props) => {
	return (
		<div className="dialog">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default Dialog
