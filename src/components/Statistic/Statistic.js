import PropTypes from 'prop-types';

import { StatisticSection, Title, StatList, StatItem, Label, Persentage } from "./Statistic.styled";

export const Statistics = ({title, stats}) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ label, percentage, id }) => {
          return (<StatItem key={id}>
          <Label>{label}</Label>
          <Persentage>{percentage}</Persentage>
        </StatItem>)
        })
        }
      </StatList>
    </StatisticSection>
  );
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired,
    ])
  ),
};
