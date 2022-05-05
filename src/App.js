import "./App.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import FixedBottomNavigation from "./components/BottomNavigation";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/profile/Profile";
import Wallet from "./components/wallet/Wallet";
import AddCashToDepositWallet from "./components/wallet/AddCashToDepositWallet";
import AddCashToAdsWallet from "./components/wallet/AddCashToAdsWallet";
import HomePage from "./components/homepage/HomePage";
import Shop from "./components/shop/Shop";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import VouchersListView from "./components/shop/VouchersListView";
import Login from "./components/login/Login";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

// const Shop = lazy(() => import("./components/shop/Shop"));
function App() {
  const reload = () => window.location.reload();

  return (
    <AnimatePresence exitBeforeEnter>
      <HashRouter>
        {/* <div className="container" style={{ padding: '50px 0 100px 0' }}>
    //   {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    // </div> */}
        <Routes>
          {/* <Suspense fallback={<div>loading</div>}/> */}
          <Route path="/" element={<Shop />} />
          <Route path="/shop/:id" element={<VouchersListView />} />
          <Route path="history" element={<ErrorPage />} />
          <Route path="wallet" element={<Wallet />} />
          {/* <Route path="shop" element={<Shop />}></Route> */}
          {/* <Route path="shop:id" element={<VouchersListView />} /> */}
          <Route
            path="add-deposit-wallet"
            element={<AddCashToDepositWallet />}
          />
          <Route path="add-ads-wallet" element={<AddCashToAdsWallet />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pools" element={<HomePage />} />

          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="404" element={<PageNotFound />} />

          <Route path="/ads.txt" onEnter={reload} />
        </Routes>

        <FixedBottomNavigation />
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;
