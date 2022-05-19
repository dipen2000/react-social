import "./Home.css";
import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { NewPost } from "../../features/post/components/NewPost";
import { SortBar } from "../../Components/Sortbar/SortBar";
import { PostCard } from "../../features/post/components/PostCard";
const arr = [1, 2, 3, 4, 5];
const Home = () => {
  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red">
          <div className="flex-col">
            <div className="page-title bord-3-black">Home</div>
            <NewPost />
            <SortBar />
            {arr.map((post) => {
              return <PostCard key={post} />;
            })}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Home };
