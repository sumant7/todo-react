import React,{useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault(); //to stop reloading
        if(!title || !desc) alert("Title or Decription can't be empty")
        addTodo(title,desc);
    }
    return (
        <div className='container'>
            <h3>Add a Todo!</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{
                        setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                {/*onChange is used because we have set value of input to be title and desc which are set to be "" hence no typing will happen */}
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{
                        setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
