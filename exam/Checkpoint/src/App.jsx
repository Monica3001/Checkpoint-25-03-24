import { useEffect, useState } from "react"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"

const url = "http://localhost:3000/tasks"
export default function AppTask(){
const [data, setData] =useState([])

    async function fetchTask(){
        const response = await fetch(url)
        const result =await response.json()
        setData(result)
    }
useEffect(()=>{
    fetchTask()
},[])

console.log(data)
    return(
<>
<TaskList
data={data}/>

<TaskForm
fetchTask={fetchTask}
url={url}/>
</>
    )
}