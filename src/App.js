import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import FixedBottomNavigation from "./components/BottomNavigation";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/profile/Profile";
import Wallet from "./components/wallet/Wallet";
import AddCashToDepositWallet from "./components/wallet/AddCashToDepositWallet";
import AddCashToAdsWallet from "./components/wallet/AddCashToAdsWallet";
import HomePage from "./components/homepage/HomePage";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/shop"} />}></Route>
        <Route path="/" element={<FixedBottomNavigation />}>
          {/* The next line is very important for the Navigate component to work */}
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="pools" element={<HomePage />} />
          <Route path="history" element={<ErrorPage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="add-deposit-wallet"
            element={<AddCashToDepositWallet />}
          />
          <Route path="add-ads-wallet" element={<AddCashToAdsWallet />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/pools" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
