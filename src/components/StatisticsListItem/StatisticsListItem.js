import { Text } from "components/ListStarsItems/ListStarsItem.styled";
import { ListItemDiv } from "./StatisticsListItem.styled";

export const StatisticsListItemEl = ({ item: { label, percentage, id } }) => {
  return (
    <ListItemDiv id={id} >
      <Text>{label}</Text>
      <span>{percentage}</span>
    </ListItemDiv>
  );
};
