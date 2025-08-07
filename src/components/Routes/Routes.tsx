import { Route, Routes as RoutesRoot } from "react-router-dom";
import { RouteConst } from "../consts/RouteConst";
import { MainPage } from "../Pages/MainPage/MainPage";
import { FormPage } from "../Pages/FormPage/FormPage";

export function Routes() {
  return (
    <>
      <RoutesRoot>
        <Route path={RouteConst.MAINPAGE} element={<MainPage />} />
        <Route path={RouteConst.FORMPAGE} element={<FormPage />} />
      </RoutesRoot>
    </>
  );
}
