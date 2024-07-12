
import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { addTodos, addToLocalStorage, checkDone, deleteTodos } from '../store/slices/Userslice';


function Todo() {
    const [todo, setTodo] = useState("");   //state to manipulate the the input text value
    const [showfinished, setShowFinished] = useState(true);

    let todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    //Run only once at the beginning when the page is reloaded.It is used to get all the previous todos from local storage
    useEffect(() => {
        dispatch(addToLocalStorage());
    }, [])

    //Run every time the todo value changes. It is used to set the todos to local storage.
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todos));
    }, [todos])

    //function used to set the todo state 
    const enterTodo = (e) => {
        setTodo(e.target.value);
    }
   
    //function for adding the todo 
    const addTodo = () => {
        dispatch(addTodos({ todo, isFinished: false }))
        setTodo("");
    }
    
    //function for deleting the todo
    const handleDelete = (e, id) => {
        dispatch(deleteTodos(id));
    }

    //function to check the todo that is completed
    const handleCheckDone = (e) => {
        let id = e.target.id;
        dispatch(checkDone(id));
    }
    
    //function for changing the value of the showFinished state
    const handleFinished = () => {
        setShowFinished((prev) => !prev)
    }
   
    //function for updating the todo
    const handleEdit = (e, id) => {
        for (let value of todos) {
            if (value.id == id) {
                console.log(value.todo);
                setTodo(value.todo);
            }
        }
        handleDelete(e, id);
    }
    return (
        <div className="main bg-purple-200 sm:w-1/2  min-h-[70vh] m-auto p-2 my-[20px] rounded-lg leading-10">
            <h2 className='text-center'>iTask - Your todo at one place</h2>
            <div className="class">
                <h3>Add a Todo</h3>
                <div className='!searchbox flex w-auto h-8 m-3 !rounded-lg !border-black !border-2'>
                    <input type="text" value={todo} onChange={enterTodo} className='!border-0  w-3/4 p-2 ' />
                    <button className='bg-purple-800 hover:bg-purple-200 text-white !border-0 cursor-pointer p-2 w-1/4 ' onClick={addTodo} disabled={todo.length <= 3}>Add</button>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={showfinished} onChange={handleFinished} />
                    <span className='m-3'>Show finished</span>
                </div>
                <hr className="border-b-2 m-3" />
                <h3>Your Todos</h3>
                {todos.length === 0 && <div>Your Todos is here</div>}
                {
                    todos.map((value) => {
                        return (showfinished || !value.isFinished) && <div key={value.id} className='flex justify-between'>
                            <div>
                                <input type="checkbox" id={value.id} defaultChecked={value.isFinished} onChange={handleCheckDone} />
                                <span className={value.isFinished ? "line-through m-3" : "m-3"}>{value.todo}</span>
                            </div>
                            <div className='flex h-full'>
                                <button className='bg-purple-800 hover:bg-purple-200 text-white border-0 m-3 p-2 rounded-lg ' id={value.id} onClick={(e) => handleEdit(e, value.id)}><FaEdit /></button>
                                <button className='bg-purple-800 hover:bg-purple-200 text-white border-0 m-3 p-2 rounded-lg' onClick={(e) => handleDelete(e, value.id)}><MdDeleteForever /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todo