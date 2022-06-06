import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { getPosts, PostCard } from "../../features/post";
import { getAllUsers } from "../../features/user";
import { useEffect } from "react";
import "./Explore.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Explore = () => {
  const dispatch = useDispatch();
  const a = 2;
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red">
          <div className="flex-col">
            <div className="page-title bord-3-black">Explore</div>
            {isLoading ? (
              <div>Loading...</div>
            ) : posts.length ? (
              [...posts].reverse().map((post) => {
                return <PostCard key={post._id} post={post} />;
              })
            ) : (
              <div>No posts</div>
            )}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { Explore };
