import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

export default function PortalEntryRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      navigate("/sign-up");
    }
  }, [location.pathname]);

  return null; // or a loader
}
