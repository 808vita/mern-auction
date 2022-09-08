import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CarAuctionsPage from "./pages/CarAuctionsPage";
import CarBidsPage from "./pages/CarBidsPage";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <LoginForm /> */}
			{/* <SignupForm /> */}
			<CarAuctionsPage />
			<CarBidsPage />
		</div>
	);
}

export default App;
