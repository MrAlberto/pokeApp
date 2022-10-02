import { Button, Container, useColorMode } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Generation } from "./components/Generation";
import { Navbar } from "./components/Navbar";
import { Pokemon } from "./components/Pokemon";
import { PokemonDetail } from "./components/PokemonDetail";

function App() {
	return (
		<>
			<Navbar />
			<Container maxW='container.xl' centerContent py="5rem">
				<Routes>
					<Route path="/" element={<Generation />} />
					<Route path="/generation/:id" element={<Pokemon />} />
					<Route path="/:pokemon" element={<PokemonDetail />} />
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

export default App;
