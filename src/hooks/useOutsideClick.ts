import { useEffect } from "react"

// source: https://usehooks.com/useOnClickOutside/

export default function useOutsideClick(ref, handler) {
	useEffect(
		() => {
			const listener = (event: Event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return
				}

				handler(event)
			}

			document.addEventListener("mousedown", listener)
			document.addEventListener("touchstart", listener)

			return () => {
				document.removeEventListener("mousedown", listener)
				document.removeEventListener("touchstart", listener)
			}
		},

		[ref, handler]
	)
}
