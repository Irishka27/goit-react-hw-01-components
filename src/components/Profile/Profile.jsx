import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <div className={s.statsThumb}>
        <ul className={s.stats}>
          <li className={s.item}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={s.item}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={s.item}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;