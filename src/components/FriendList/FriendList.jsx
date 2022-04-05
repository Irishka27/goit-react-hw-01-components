import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li className={s.item} key={item.id}>
          <img src={item.avatar} alt={item.name} />
          <p className={s.name}>{item.name}</p>
          <span id="status" className={item.isOnline ? s.true : s.false}>
            &nbsp; &nbsp; &nbsp;
          </span>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;