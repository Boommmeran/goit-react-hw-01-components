import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  Stat,
  Label,
  Persent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Stat key={id}>
              <Label>{label}</Label>
              <Persent>{`${percentage}%`}</Persent>
            </Stat>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
