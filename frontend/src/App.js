import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import MainPageLayout from "./layout/MainPageLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CreateAuction from "./pages/CreateAuction";
import CreateBid from "./components/CreateBidForm";
import ProfilePage from "./pages/ProfilePage";
import PendingAuctionsPage from "./pages/OwnerPendingAuctionsPage";
import DealerLiveAuctionsPage from "./pages/DealerLiveAuctionsPage";
import DealerPendingBidsPage from "./pages/DealerPendingBidsPage";
import OwnerCompletedAuctionsPage from "./pages/OwnerCompletedAuctionsPage";
import DealerClosedBidsPage from "./pages/DealerClosedBidsPage";
import Welcome from "./pages/Welcome";

function App() {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<MainPageLayout>
					<div className="pages">
						<Routes>
							<Route path="/" element={<Welcome />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignupPage />} />
							<Route path="/owner" element={<HomePage />} />
							<Route path="/dealer" element={<HomePage />} />

							<Route path="/owner/create" element={<CreateAuction />} />
							<Route path="/dealer/create" element={<CreateBid />} />

							<Route path="/owner/profile" element={<ProfilePage />} />
							<Route path="/dealer/profile" element={<ProfilePage />} />
							<Route path="/owner/pending" element={<PendingAuctionsPage />} />

							<Route
								path="dealer/auctions"
								element={<DealerLiveAuctionsPage />}
							/>

							<Route
								path="dealer/pending"
								element={<DealerPendingBidsPage />}
							/>

							<Route
								path="/owner/completed"
								element={<OwnerCompletedAuctionsPage />}
							/>
							<Route
								path="/dealer/completed"
								element={<DealerClosedBidsPage />}
							/>
						</Routes>
					</div>
				</MainPageLayout>
			</BrowserRouter>
		</div>
	);
}

export default App;
