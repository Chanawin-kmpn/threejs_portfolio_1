import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";

function App() {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Hero />
			<About />
			<Project />
			<Clients />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
