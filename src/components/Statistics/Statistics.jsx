import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({title, stats }) {
  return (
    <div className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.list}>
      {stats.map((data) => (
        <li className={s.item} key={data.id}>
          <span className={s.label}>{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;