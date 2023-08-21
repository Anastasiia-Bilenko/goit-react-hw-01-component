import { DescriptionEl } from "components/Description/Description"
import userinfo from "../user.json"
import { ListStarsEl } from "components/ListStars/ListStars"
import { Wrapper } from "./Profile.styled"
import PropTypes from "prop-types";

export const ProfileEl = () => {
    return (
<Wrapper>
<DescriptionEl info ={userinfo}/>
<ListStarsEl/>
</Wrapper>    
    )
}
DescriptionEl.propTypes = {
    userinfo : PropTypes.string
}