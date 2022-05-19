import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import "./Bookmark.css";
const Bookmark = () => {
  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red">Single post page</div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Bookmark };
