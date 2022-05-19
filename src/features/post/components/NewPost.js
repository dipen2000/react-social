import { Avatar } from "../../../Components/Avatar/Avatar";
import "../../post/styles.css";
const NewPost = () => {
  return (
    <div className="new-post-container-grid bord-3-purple">
      <div className="bord-3-green">
        <Avatar />
      </div>
      <div className="bord-3-green">
        <div className="flex-col gap-1">
          <textarea
            className="post-text-area"
            placeholder="What's happening?"
          />
          <div className="flex-row justify-end-flex">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
