import { useState } from "react"
import "./App.sass"
import Dialog from "./components/Dialog"
import Switch from "react-switch"
import logo from "./assets/lemon.svg"

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [overlayClick, setOverlayClick] = useState(false)
	const [checked, setChecked] = useState(false)

	const handleChange = () => {
		setOverlayClick(!overlayClick)
		setChecked(!checked)
	}

	const lockScroll = () => {
		document.body.style.overflow = "hidden"
	}

	const unlockScroll = () => {
		document.body.style.overflow = ""
	}

	return (
		<main>
			<div className="project-description">
				{/* <h1 className="title">Lemon</h1> */}
				<img src={logo} alt="Lemon logo" />
				<p>
					This is a project designed for my job application as Frontend
					Developer at Lemon Energia, a Brazilian company that aims for the
					facilitation and accessibility of sustainable energy. In this project
					I've used React (with Vite), Sass and Typescript, other than minor
					addons such as React Switch.
				</p>
			</div>
			<div className="container">
				<p>
					Change the switch to enable/disable the closing of the dialog by
					clicking outside of it
				</p>

				{/* source: https://www.npmjs.com/package/react-switch */}
				<Switch checked={checked} onChange={handleChange} onColor="#008059" />
				<button
					className="open-dialog"
					onClick={() => {
						lockScroll()
						setIsOpen(true)
					}}
				>
					Open Dialog
				</button>
			</div>
			<Dialog
				title={`Dialog ${overlayClick ? "with overlay click" : ""}`}
				description="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum elit at felis accumsan tempus. Fusce convallis dolor euismod odio sagittis, id tempor purus finibus. Suspendisse fringilla erat tellus, porta sollicitudin urna maximus non. Mauris blandit sem mollis porttitor auctor. Proin mattis venenatis scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sed elit et eros aliquet mattis eget non nisl. Suspendisse ut ligula eleifend, euismod nibh et, dictum dolor. Vestibulum non mi augue. Etiam egestas felis eget sem efficitur tincidunt.

Pellentesque nec ligula dui. Aenean malesuada sapien sollicitudin dui tincidunt, nec tempus turpis pellentesque. Proin auctor dapibus tellus ut rutrum. Vestibulum varius ipsum eget libero malesuada rhoncus eget ac felis. Sed id dolor mi. Nullam non vulputate lectus. Mauris dignissim vitae nulla quis ultricies. Nulla convallis vestibulum ante. Suspendisse porttitor scelerisque metus ac consequat. Duis bibendum hendrerit ex, ut venenatis lectus. Praesent a imperdiet ante. Pellentesque maximus et lorem congue sollicitudin. In consequat metus ac tellus ultrices posuere.

Phasellus consectetur felis hendrerit pellentesque venenatis. Donec vel tincidunt augue, et dapibus mauris. Morbi nulla diam, accumsan at diam vitae, condimentum scelerisque lectus. Vivamus sodales consectetur semper. Nullam malesuada auctor nulla, vitae luctus est tincidunt at. Vestibulum risus sem, mollis nec egestas sit amet, tincidunt vel est. Vivamus lectus ex, porta ac aliquam quis, laoreet eu nulla. Morbi id sem nibh. Nam posuere mi scelerisque erat sagittis, at pharetra sem lobortis. Ut egestas tincidunt lorem, id facilisis erat malesuada eget.

Duis sit amet ligula facilisis, fermentum metus vel, aliquam orci. Maecenas sodales arcu orci, vitae mollis ligula pharetra ac. Aliquam non magna in arcu malesuada mattis sit amet eget nunc. Morbi fermentum porttitor enim sit amet pharetra. Vivamus enim leo, ornare sed hendrerit feugiat, porttitor sit amet nunc. Vestibulum lobortis, orci et varius semper, nisi ante interdum nibh, at bibendum nibh neque vitae quam. Praesent imperdiet ligula eget lacus placerat, at rutrum nisi sodales. Nunc tellus tellus, tincidunt iaculis ipsum non, tristique accumsan erat. Maecenas eget euismod massa. Aliquam eros libero, aliquam ac justo semper, sagittis tincidunt dolor.

Phasellus faucibus convallis faucibus. Mauris ac nunc sed odio dictum tristique quis vel eros. Nam a ornare dui. Aliquam iaculis et risus non ultricies. Mauris maximus nisi vel ipsum suscipit aliquam. Proin accumsan in tellus sed sagittis. Morbi in nunc mi. Maecenas ac semper sem, vel auctor eros. Nunc porta eget massa non pharetra. Morbi sagittis commodo nibh aliquam tempus. Sed at quam aliquam ex fringilla dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nunc sit amet massa posuere, venenatis metus eu, maximus sapien. Morbi vitae mauris quis sem aliquam eleifend eget a sapien. Integer eleifend condimentum dui at vehicula. Donec condimentum nisl eu est porta condimentum. Nulla vehicula accumsan eros non dapibus. Ut elementum dapibus nulla convallis fringilla. Integer lobortis eu tellus at auctor. Quisque varius tincidunt sem ut egestas. Nullam neque dolor, vehicula nec volutpat id, mattis ut lorem.

Curabitur quis ante vestibulum, tristique augue in, rutrum nisl. Donec imperdiet eu mauris non ullamcorper. Sed aliquet odio et orci porttitor, quis ultricies justo lobortis. Vivamus lacinia lacus vel sem dapibus fringilla in eu erat. Aliquam condimentum purus lacus, et bibendum lectus scelerisque sed. Quisque dapibus ut orci quis elementum. Vestibulum vel urna id ante blandit eleifend at non sem. Quisque ullamcorper risus in turpis cursus, eu interdum justo dignissim. Aliquam rhoncus at urna vel scelerisque. Mauris id nunc efficitur, posuere sapien sed, cursus lacus. Mauris nec nisl non ex euismod convallis sit amet vel libero. Mauris scelerisque rutrum enim, eget eleifend leo viverra ac. Aenean lacinia pharetra massa quis pharetra.

Phasellus venenatis laoreet sem a semper. Suspendisse laoreet vestibulum enim, eget feugiat est egestas vitae. Mauris tincidunt orci in ante mattis, eget eleifend dolor consequat. Mauris eleifend fermentum nibh, ac congue tortor sodales non. Cras ullamcorper, nisi id pellentesque pretium, nibh metus ullamcorper risus, nec vehicula leo nulla ultricies ipsum. Vestibulum vulputate auctor magna, eu mollis tellus rutrum sed. Integer at ultrices nulla. Etiam tempor diam felis, at tincidunt elit efficitur elementum. Integer vehicula odio arcu, sit amet consectetur quam mollis id.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel nisl odio. Cras dui metus, suscipit rhoncus vestibulum id, commodo ut sem. Aliquam ultrices, nisl et volutpat vestibulum, tellus felis semper felis, eu posuere ipsum lorem convallis metus. Integer at sollicitudin nibh. Aenean placerat diam ac neque rhoncus venenatis. Pellentesque venenatis sit amet felis sit amet suscipit. Duis velit justo, pulvinar quis est nec, mattis viverra erat. Nullam varius tempus sem, ultricies eleifend felis tincidunt ut. Quisque commodo faucibus purus. Sed sed lacus convallis, facilisis nisi quis, hendrerit lorem.

Nulla ut quam vitae ex iaculis porta. Nunc a nibh ac velit congue placerat et ac arcu. Aliquam tempor dictum urna, sagittis sodales felis vestibulum nec. Proin vitae venenatis sem. Donec semper convallis molestie. Vivamus non purus aliquet, ullamcorper massa vitae, scelerisque nisi. Curabitur quam ipsum, finibus ut molestie at, imperdiet a diam. Vestibulum neque turpis, placerat nec sollicitudin ac, vulputate nec metus. "
				isOpen={isOpen}
				onClose={() => {
					unlockScroll()
					setIsOpen(false)
				}}
				closeOnOverlayClick={overlayClick}
			/>
		</main>
	)
}

export default App
