import { StatisticsListEL } from "components/StatisticsList/StatisticsList"
import { Title, Wrapper } from "./Statistics.styled"
import PropTypes from "prop-types";
export const StatisticsEl = ({title, stats })=> {
    return (
  <Wrapper>
 {title && <Title>{title}</Title>}
<StatisticsListEL data={stats}/>
  </Wrapper>
    )
}
StatisticsEl.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
