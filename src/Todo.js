import { useEffect, useState } from 'react';
import './styles/index.css';



function Todo() {

    const [work, setWork] = useState()

    const handleWorks = (event) => {
        setWork(event.target.value)
    }

    const [list, setList] = useState([])

    const [text, setText] = useState()

    const [editIndex, setEditIndex] = useState()

    const addWorks = () => {
        setWork('')

        if (!work) {
            setText('Please enter the work first..')
        }

        else if (editIndex) {
            const updatedlists = list.map((item, index) => {
                if (index == editIndex) {
                    return work
                }
                else {
                    return item
                }
            })

            setList(updatedlists)

        }

        else {
            setList([...list, work])
            setText('')
        }
    }

    const findWorks = () => {

    }

    const deleteItem = (id) => {
        const upadtedList = list.filter((item, index) => {
            return index !== id;
        })
        setList(upadtedList)
    }

    const editItems = (id) => {
        setEditIndex(id)
        setWork(list[id])
    }

    const deleteAll = () => {
        setList([])
    }

    return (
        <>

            <div className="todoList">
                <div className="workSection">
                    <h1>Todo List</h1>
                    <p className='errorText'>{text}</p>
                    <input type="text" placeholder='Enter your todo work' value={work} onChange={handleWorks} required />
                    <button className="addButton" onClick={addWorks}>Add</button>
                    <button className="findButton" onClick={findWorks}><i class="fas fa-search"></i></button>
                    {/* <h5>{work}</h5> */}
                    <div className="workLists">
                        {
                            list.map((item, index) =>
                                <p key={index} className='lists'>
                                    {item}
                                    <div>
                                        <a href="#" onClick={() => editItems(index)} className='iconEdit'><i class="fas fa-edit"></i></a>
                                        <a href="#" onClick={() => deleteItem(index)}><i class="fas fa-trash-alt"></i></a></div>
                                </p>
                            )
                        }
                    </div>
                    <button className="delButton" onClick={deleteAll}><i class="fas fa-ban"></i>Delete All</button>
                </div>
            </div>


        </>
    );
}


export default Todo
