import { Fragment, useRef } from "react"
import useOutsideClick from "../../hooks/useOutsideClick"
import "./dialog.sass"

interface Props {
	title?: string
	description?: string
	isOpen: boolean
	onClose: () => void
	setIsOpen: (bool: boolean) => void
}

const Dialog = ({ title, description, isOpen, onClose, setIsOpen }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	useOutsideClick(ref, () => setIsOpen(false))

	return (
		<Fragment>
			{isOpen && (
				<div className="overlay">
					<div className="dialog" ref={ref}>
						<button className="close-dialog" onClick={onClose}>
							&#10005;
						</button>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default Dialog
