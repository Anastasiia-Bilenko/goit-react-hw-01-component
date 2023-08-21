import { StatisticsListEL } from "components/StatisticsList/StatisticsList"
import data from '../data.json'
import { Title, Wrapper } from "./Statistics.styled"

export const StatisticsEl = () => {
    return (
        <Wrapper title="Upload stats" stats={data} >
  <Title>Upload stats</Title>
<StatisticsListEL data={data}/>
  </Wrapper>
    )
}