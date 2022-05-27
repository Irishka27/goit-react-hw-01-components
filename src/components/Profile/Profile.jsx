import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
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
            <span className="quantity">{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={s.item}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
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
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,  
  
};

export default Profile;