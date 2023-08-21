import { TableElTd } from "components/TableBody/TableBody.styled"

export const TableBodyDataEl = ({item:{type, amount, currency}})=>{
    return(
        <>
        <TableElTd>{type}</TableElTd>
        <TableElTd>{amount}</TableElTd>
        <TableElTd>{currency}</TableElTd>
        </>
    )

}