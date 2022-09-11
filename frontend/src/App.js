import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";

import MainPageLayout from "./layout/MainPageLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CreateAuction from "./pages/CreateAuction";
import CreateBid from "./components/CreateBidForm";
import ProfilePage from "./pages/ProfilePage";
import PendingAuctionsPage from "./pages/PendingAuctionsPage";
import DealerLiveAuctionsPage from "./pages/DealerLiveAuctionsPage";
import DealerPendingBidsPage from "./pages/DealerPendingBidsPage";

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

							<Route
								path="/owner/profile"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<ProfilePage />}
							/>
							<Route
								path="/dealer/profile"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<ProfilePage />}
							/>
							<Route
								path="/owner/pending"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<PendingAuctionsPage />}
							/>

							<Route
								path="dealer/auctions"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<DealerLiveAuctionsPage />}
							/>

							<Route
								path="dealer/pending"
								// element={user ? <OwnerHomePage /> : <Navigate to="/" />}
								element={<DealerPendingBidsPage />}
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
