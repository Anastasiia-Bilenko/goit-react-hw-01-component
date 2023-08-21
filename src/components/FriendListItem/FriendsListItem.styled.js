import styled from 'styled-components';
const getColor = props =>{
    if(props.isonline === 'true'){
        return '#60ef60'
    }
    if(props.isonline === 'false'){
return 'red'
    }
}

export const OnlineMark = styled.span`
background-color:${getColor};
height: 20px;
width: 20px;
border-radius: 50%;
`