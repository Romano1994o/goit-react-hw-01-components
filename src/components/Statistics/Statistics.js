import { PropTypes } from 'prop-types';
import { StatisticsSection } from './Statistics.styled';
import { StatList } from 'components/common/List/List.styled';
import { StatisticsLi, Title} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  return (
    <StatisticsSection>
      {title && <Title className="title">{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsLi key={id} label={label} info={percentage + '%'} />
        ))}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

