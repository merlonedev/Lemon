import { useEffect } from "react"

// source: https://usehooks.com/useOnClickOutside/

interface Props {
	ref: any
	onClose: () => void
}

export default function useOutsideClick({ref, onClose}: Props) {
	useEffect(
		() => {
			const listener = (event: Event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return
				}

				onClose()
			}

			document.addEventListener("mousedown", listener)
			document.addEventListener("touchstart", listener)

			return () => {
				document.removeEventListener("mousedown", listener)
				document.removeEventListener("touchstart", listener)
			}
		},

		[ref, onClose]
	)
}
