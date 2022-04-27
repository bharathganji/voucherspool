import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  HashRouter,
} from "react-router-dom";

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
import Auth, { AuthProvider } from "./contexts/Auth";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Account from "./components/login/Account";
import { AnimatePresence } from "framer-motion";
import { Paper } from "@mui/material";

function App() {
  // const [session, setSession] = useState();
  // useEffect(() => {
  //   setSession(supabase.auth.session());

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);
  useEffect(() => {
    // const pathname = window.location.pathname;
    // console.log(pathname);
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <HashRouter>
        {/* <div className="container" style={{ padding: '50px 0 100px 0' }}>
    //   {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    // </div> */}
        <Routes>
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
          
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>

        <FixedBottomNavigation />
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;
