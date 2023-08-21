import styled from 'styled-components';
const getColor = props => {
  if (props.id === 'id-1') {
    return '#b9d8b9';
  }

  if (props.id === 'id-2') {
    return '#c2abc9';
  }
  if (props.id === 'id-3') {
    return '#e8e89c';
  }
  if (props.id === 'id-4') {
    return '#ff4667';
  }
  if (props.id === 'id-5') {
    return '#485aac';
  }
};

export const ListItemDiv = styled.div`
  background-color: ${getColor};
  height: 50px;
  font-size: 15px;
  width: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content:center;
  text-shadow: 2px 2px 5px black;
  border-radius: 10px;
`;
export const Text = styled.span`
font-weight: bold;
`