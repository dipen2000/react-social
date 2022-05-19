import "./UserHandle.css";
import { Avatar } from "../Avatar/Avatar";
const UserHandle = () => {
  return (
    <div className="bord-3-green flex-row justify-center-flex">
      <div className="bord-3-red flex-row gap-1 justify-center-flex align-center-flex">
        <Avatar />
        <div className="flex-col user-handle-detail-section">
          <strong>BATMAN</strong>
          <span>@the_dark_knight</span>
        </div>
      </div>
    </div>
  );
};

export { UserHandle };
