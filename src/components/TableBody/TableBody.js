import { TableBodyDataEl } from "components/TableBodyData/TableBodyData"
import { TableBodyElStyled } from "./TableBody.styled"


export const  TableBodyEl = ({items}) =>{
    return(
        <TableBodyElStyled>
            {items.map(item=>(
               <tr key ={item.id}>
                <TableBodyDataEl item = {item}/>
               </tr> 
            ))}
        </TableBodyElStyled>
    )
}
