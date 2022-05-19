import { Avatar } from "../Avatar/Avatar";
import "./UserSuggestionSection.css";
const arr = [1, 2, 3];
const UserSuggestionSection = () => {
  return (
    <div className="bord-3-blue user-suggestion-section">
      <h3>Who to follow</h3>
      <div className="flex-col bord-3-red gap-1">
        {arr.map((item) => {
          return (
            <div
              key={item}
              className="flex-row justify-space-between-flex bord-3-purple align-center-flex"
            >
              <div className="flex-row align-center-flex single-user-handle-suggestion-container">
                <Avatar />
                <div className="flex-col user-handle-detail-section">
                  <strong>BATMAN</strong>
                  <span>@the_dark_knight</span>
                </div>
              </div>
              <button>Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { UserSuggestionSection };
