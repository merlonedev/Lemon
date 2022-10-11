import React from "react"

interface Props {
	title: string
}

const Dialog = ({ title }: Props) => {
	return (
		<div className="dialog">
			<h1>{title}</h1>
		</div>
	)
}

export default Dialog
