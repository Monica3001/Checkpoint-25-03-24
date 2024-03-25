export default function TaskList({data}){


    return(
        
         <ul>
       {data.map(el=>{
        return (
            <li key={el.id}>
            <span>{el.name}</span>
            <span>{el.description}</span>
            </li>
        )
       })}
        </ul>
        
    )
}