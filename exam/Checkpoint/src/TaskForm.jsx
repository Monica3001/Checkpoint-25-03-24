import { useState } from "react"

export default function TaskForm({fetchTask ,url}){
const [name, setName]=useState('')
const [description, setDescription]=useState('')

    function postForm(){
let info = {name, description}

fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(info)
}).then(response=>{response.json
.then (result=>{
    fetchTask()
    console.log(result)
})
})
}
    return(

        <form
        onSubmit={(e)=>{
e.preventDefault()
postForm()            
        }}>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}></input>
            <button type="submit">enviar</button>
        </form>
    )
}