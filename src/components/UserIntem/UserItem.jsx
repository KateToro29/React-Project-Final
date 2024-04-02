/* eslint-disable react/prop-types */
import ButtonHeart from "../ButtonHeart/ButtonHeart";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import './UserItem.css'

export const UserItem = ({ user, showDeleteButton }) => {
  return (
    <div className="ContainerTarget  " key={user.id}>
      <img className="Image" src={user.avatar} alt="" />
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.email}</p>
      <hr />
      <ButtonHeart isFavorite={user.resolved} userId={user.id}></ButtonHeart>
      {showDeleteButton && <ButtonRemove userId={user.id}></ButtonRemove>}
    </div>
  );
};
