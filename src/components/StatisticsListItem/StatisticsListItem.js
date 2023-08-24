import { Text } from "components/ListStarsItems/ListStarsItem.styled";
import { ListItemDiv } from "./StatisticsListItem.styled";
import PropTypes from "prop-types";
export const StatisticsListItemEl = ({ item: { label, percentage, id } }) => {
  return (
    <ListItemDiv id={id} >
      <Text>{label}</Text>
      <span>{percentage}</span>
    </ListItemDiv>
  );
};

StatisticsListItemEl.propTypes = {
  item :  PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id : PropTypes.string.isRequired,
  })
}