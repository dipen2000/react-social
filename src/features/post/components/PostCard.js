import "../../post/styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
import { ButtonPrimary } from "../../../Components/Buttons";
import { useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const users = useSelector((state) => state.user.users);
  const { content, fullName, username, likes, comments } = post;

  const userOfPost = users?.find((user) => user.username === username);

  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar
          avatar={userOfPost?.profileAvatar}
          username={username}
          fullName={fullName}
        />
      </div>
      <div className="flex-col bord-3-yellow gap-1">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <div className="flex-row align-center-flex user-username-for-post-details">
            <strong>{fullName}</strong>
            <span>{username}</span>
            <span>·</span>
            <span>10min ago</span>
          </div>
          <ButtonPrimary>Follow</ButtonPrimary>
        </div>
        <div className="bord-3-blue">{content}</div>
        <div className="flex-row gap-1">
          <div className="bord-3-purple flex-row post-card-single-CTA-container">
            <button>Like</button>
            <span>{likes.likeCount}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container">
            <button>Comment</button>
            <span>{comments.length}</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container">
            <button>Bookmark</button>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
