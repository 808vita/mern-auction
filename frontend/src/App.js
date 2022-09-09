import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CreateAuctionForm from "./components/auctionComponents/CreateAuctionForm";
import CreateBidForm from "./components/bidComponents/CreateBidForm";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CarAuctionsPage from "./pages/CarAuctionsPage";
import CarBidsPage from "./pages/CarBidsPage";
import MainPageLayout from "./layout/MainPageLayout";

function App() {
	const user = false;
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<MainPageLayout>
					<div className="pages">
						<Routes>
							{/* <Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/> */}
							<Route
								path="/login"
								element={!user ? <LoginForm /> : <Navigate to="/" />}
							/>
							<Route
								path="/signup"
								element={!user ? <SignupForm /> : <Navigate to="/" />}
							/>
						</Routes>
					</div>
				</MainPageLayout>
			</BrowserRouter>

			{/*  */}
			{/* */}
			{/* <CarAuctionsPage />
			<CarBidsPage />
			<CreateAuctionForm />
			<CreateBidForm /> */}
		</div>
	);
}

export default App;
