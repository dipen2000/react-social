import { BatNetworkContainer } from "../../Components/Wrapper/BatNetworkContainer";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { RightSidebar } from "../../Components/RightSidebar/RightSidebar";
import { useParams, useNavigate } from "react-router-dom";
import { Avatar } from "../../Components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePost } from "../../features/post";
import user, { getAllUsers } from "../../features/user";
import { useEffect } from "react";
import "./SinglePage.css";
import { ButtonPrimary } from "../../Components/Buttons";
const SinglePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { singlePost, posts, isLoading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const currentPost = posts?.find((post) => post.id === postId);

  const currentUser = users?.find(
    (user) => user.username === singlePost?.username
  );

  console.log(currentUser);
  useEffect(() => {
    dispatch(getSinglePost(currentPost._id));
    dispatch(getAllUsers());
  }, [dispatch, posts, currentPost._id]);

  return (
    <BatNetworkContainer>
      <div className="home-grid-container bord-3-purple">
        <Sidebar />
        <div className="bord-3-red flex-col">
          <div className="bord-3-green flex-row gap-1 align-center-flex single-post-navigation">
            <i
              className="fa-solid fa-arrow-left curs-point"
              onClick={() => navigate(-1)}
            ></i>
            <h3>Post</h3>
          </div>
          <div className="bord-3-green">
            {isLoading ? (
              <div>Loading...</div>
            ) : singlePost ? (
              <div>
                <div className="new-post-container-grid bord-3-purple">
                  <div className="bord-3-green">
                    <Avatar
                      avatar={currentUser?.profileAvatar}
                      username={currentUser?.username}
                      fullName={currentUser?.fullName}
                    />
                  </div>
                  <div className="flex-col bord-3-yellow gap-1">
                    <div className="flex-row justify-space-between-flex align-center-flex">
                      <div className="flex-row align-center-flex user-username-for-post-details">
                        <strong>{singlePost?.fullName}</strong>
                        <span>@{singlePost?.username}</span>
                        <span>·</span>
                        <span>10min ago</span>
                      </div>
                      <i className="fa-solid fa-ellipsis-vertical curs-point"></i>
                    </div>
                    <div className="bord-3-blue">{singlePost?.content}</div>
                    {singlePost?.likes.likeCount > 0 && (
                      <div className="likes-on-post curs-point">
                        {singlePost?.likes.likeCount} Likes
                      </div>
                    )}
                    <div className="flex-row gap-1">
                      <div className="bord-3-purple flex-row post-card-single-CTA-container">
                        <button>Like</button>
                        <span>{singlePost?.likes.likeCount}</span>
                      </div>
                      <div className="bord-3-purple flex-row post-card-single-CTA-container">
                        <button>Comment</button>
                        <span>{singlePost?.comments.length}</span>
                      </div>
                      <div className="bord-3-purple flex-row post-card-single-CTA-container">
                        <button>Bookmark</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-post-container-grid bord-3-purple">
                  <div className="bord-3-green">
                    <Avatar
                      avatar={currentUser?.profileAvatar}
                      username={currentUser?.username}
                      fullName={currentUser?.fullName}
                    />
                  </div>
                  <div className="bord-3-purple">
                    <form>
                      <div className="flex-row align-center-flex bord-3-red gap-1">
                        <input
                          className="flex-grow-1 reply-input-box"
                          type="text"
                          placeholder="Write your reply here."
                          name="reply"
                        />
                        <ButtonPrimary>Reply</ButtonPrimary>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <p>Post not found</p>
            )}
          </div>
        </div>
        <RightSidebar />
      </div>
    </BatNetworkContainer>
  );
};

export { SinglePage };
