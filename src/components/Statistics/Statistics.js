import { PropTypes } from 'prop-types';
import { StatisticsSection } from './Statistics.styled';
import { StatList } from 'components/common/List/List.styled';
import { StatisticsLi } from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <StatisticsSection>
      <h2>Upload stats</h2>
      <StatList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsLi key={id} label={label} info={percentage + '%'} />
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
