import { TableBodyEl } from "components/TableBody/TableBody"
import { TableHeadEl } from "components/TableHead/TableHead"
import items from '../transactions.json'
import { Table } from "./TransactionHistory.styled"
export const TransactionHistoryTableEl = () =>{
    return(
        <Table>
            <TableHeadEl/>
            <TableBodyEl items ={items}/>
        </Table>
    )
}