import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default FriendList;
