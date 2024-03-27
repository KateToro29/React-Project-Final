/* eslint-disable react/prop-types */
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import './UserItem.css'

export const UserItem = ({ user }) => {
  return (
    <div className="ContainerTarget" key={user.id}>
      <img className="Image" src={user.avatar} alt="" />
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.email}</p>
      <hr />
      <ButtonRemove></ButtonRemove>
    </div>
  );
};
