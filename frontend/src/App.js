import "./App.css";
import CreateAuctionForm from "./components/auctionComponents/CreateAuctionForm";
import CreateBidForm from "./components/bidComponents/CreateBidForm";
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
			<CreateAuctionForm />
			<CreateBidForm />
		</div>
	);
}

export default App;
