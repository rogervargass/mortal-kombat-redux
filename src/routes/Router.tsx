import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/loading/Loading";
import {
  Battle,
  Gallery,
  Home,
  Login,
  NotFound,
  Register,
  Shop,
} from "../pages";
import Account from "../pages/account/Account";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/*" element={<NotFound />} />

          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="my-account" element={<Account />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
