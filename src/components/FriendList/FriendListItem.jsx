import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <img src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
      <span id="status" className={isOnline ? s.true : s.false}></span>
    </li>
  );
}
FriendListItem.prototype = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  
  export default FriendListItem;
