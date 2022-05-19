import "../../post/styles.css";
import { Avatar } from "../../../Components/Avatar/Avatar";
const PostCard = () => {
  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar />
      </div>
      <div className="flex-col bord-3-yellow gap-1">
        <div className="flex-row justify-space-between-flex align-center-flex">
          <div className="flex-row align-center-flex user-username-for-post-details">
            <strong>BATMAN</strong>
            <span>@the_dark_knight</span>
            <span>·</span>
            <span>10min ago</span>
          </div>
          <button>follow</button>
        </div>
        <div className="bord-3-blue">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </div>
        <div className="flex-row gap-1">
          <div className="bord-3-purple flex-row post-card-single-CTA-container">
            <button>Like</button>
            <span>1</span>
          </div>
          <div className="bord-3-purple flex-row post-card-single-CTA-container">
            <button>Comment</button>
            <span>1</span>
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
