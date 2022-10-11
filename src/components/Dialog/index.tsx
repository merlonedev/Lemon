import { Fragment, useEffect, useRef } from "react"
import useOutsideClick from "../../hooks/useOutsideClick"
import "./dialog.sass"

interface Props {
	title?: string
	description?: string
	isOpen: boolean
	onClose: () => void
	closeOnOverlayClick: boolean
}

function Dialog({
	title,
	description,
	isOpen,
	onClose,
	closeOnOverlayClick,
}: Props) {
	console.log(`🚀 ~ closeOnOverlayClick`, closeOnOverlayClick)
	const ref = useRef<HTMLDivElement>(null)
	useOutsideClick({ ref, onClose })

	useEffect(() => {
		const closeWhenEsc = (event: any) => {
			if (event.key === "Escape") {
				onClose()
			}
		}
		document.addEventListener("keydown", closeWhenEsc)
		return () => document.removeEventListener("keydown", closeWhenEsc)
	}, [])

	return (
		<Fragment>
			{isOpen && (
				<div className="overlay">
					<div className="dialog" ref={closeOnOverlayClick ? ref : null}>
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
