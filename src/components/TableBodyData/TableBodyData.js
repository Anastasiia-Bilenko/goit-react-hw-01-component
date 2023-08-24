import { TableElTd } from "components/TableBody/TableBody.styled"
import PropTypes from "prop-types";
export const TableBodyDataEl = ({item:{type, amount, currency}})=>{
    return(
        <>
        <TableElTd>{type}</TableElTd>
        <TableElTd>{amount}</TableElTd>
        <TableElTd>{currency}</TableElTd>
        </>
    )

}

TableBodyDataEl.protoTypes = {
    item :PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired, 
    currency : PropTypes.string.isRequired,

    })
}
