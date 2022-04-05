import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats }) {
  return (
    <ul className={s.list}>
      {stats.map((data) => (
        <li className={s.item} key={data.id}>
          <span className={s.label}>{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;