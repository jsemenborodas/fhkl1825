import { useNavigate } from "react-router-dom";
import "./RedirectButton.css";
import { RouteConst } from "../../consts/RouteConst";

export function RedirectButton() {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(RouteConst.FORMPAGE);
  };
  return (
    <>
      <button className="redirectButton" onClick={buttonHandler}>
        FORM
      </button>
    </>
  );
}
