import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar_01.css";
import { useNavigate } from "react-router-dom";

function Navbar_01() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<div>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/#">About</a>
				<a href="/#">Page</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			</div>
		</header>
	);
}

export default Navbar_01