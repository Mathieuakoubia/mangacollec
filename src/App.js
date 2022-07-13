import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import collection_item from "./collection";



function App() {
	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/collection" element={<collection_item />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;	
