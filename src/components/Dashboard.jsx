import SideNavBar from "./SideNavBar";
import RightSection from "./RightSection/RightSection";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      navigate("/")
      console.log("not logged in")
    }
  });

  return (
    <div className="p-6 flex bg-neutral-100">
      <SideNavBar />
      <RightSection />
    </div>
  );
};

export default Dashboard;
