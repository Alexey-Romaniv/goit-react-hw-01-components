import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatsSection = styled.section``;
const StatsTitle = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  padding: 25px 0;
`;
const StatsList = styled.ul`
  display: flex;
`;
const StatsLi = styled.li`
  width: 25%;

  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

color: white;
  background-color: #${() =>
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}};
`;
const StatsLabel = styled.span`
  font-size: 14px;
  line-height: 1.3;
`;
const StatsPercantage = styled.span`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsLi key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercantage>{percentage}%</StatsPercantage>
          </StatsLi>
        ))}
      </StatsList>
    </StatsSection>
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

{
  /* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */
}
