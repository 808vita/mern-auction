import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import MainPageLayout from "./layout/MainPageLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CreateAuction from "./pages/CreateAuction";
import CreateBid from "./components/CreateBidForm";

// import CarAuctionsPage from "./pages/CarAuctionsPage";
// import CarBidsPage from "./pages/CarBidsPage";

// import CreateAuctionForm from "./components/auctionComponents/CreateAuctionForm";
// import CreateBidForm from "./components/bidComponents/CreateBidForm";

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
								element={!user ? <LoginPage /> : <Navigate to="/" />}
							/>
							<Route
								path="/signup"
								element={!user ? <SignupPage /> : <Navigate to="/" />}
							/>
							<Route
								path="/owner"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<HomePage />}
							/>
							<Route
								path="/dealer"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<HomePage />}
							/>

							<Route path="/owner/create" element={<CreateAuction />} />
							<Route path="/dealer/create" element={<CreateBid />} />
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
