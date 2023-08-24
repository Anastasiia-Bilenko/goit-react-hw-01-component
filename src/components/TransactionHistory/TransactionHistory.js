import { TableBodyEl } from "components/TableBody/TableBody"
import { TableHeadEl } from "components/TableHead/TableHead"
import items from '../../data/transactions.json'
import { Table } from "./TransactionHistory.styled"
import PropTypes from "prop-types";

export const TransactionHistoryTableEl = () =>{
    return(
        <Table>
            <TableHeadEl/>
            <TableBodyEl items ={items}/>
        </Table>
    )
}
TableBodyEl.propTypes = {
    items : PropTypes.array.isRequired
}