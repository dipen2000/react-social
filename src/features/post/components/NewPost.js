import { Avatar } from "../../../Components/Avatar/Avatar";
import { ButtonPrimary } from "../../../Components/Buttons";
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
            <ButtonPrimary>Post</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewPost };
