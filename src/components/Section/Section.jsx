import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{s.title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;