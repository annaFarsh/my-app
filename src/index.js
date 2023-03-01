import React, { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom/client'

import './index.css'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'

const root = ReactDOM.createRoot(document.getElementById('root'))
const ToDoApp = () => {
    const [toDo, setToDo] = useState('')
    const [arrayToDo, setToArray] = useState([])
    const [sec, setSec] = useState('')
    const [min, setMin] = useState('')

    const addToArray = (event) => {
        let listItem = {
            id: Date.now(),
            body: toDo,
            status: 'statusActive',
            date: new Date(),
            edit: false,
            pause: true,
        }
        event.preventDefault()
        if (listItem.body.trim() !== '' && !isNaN(Number(sec)) && !isNaN(Number(min)) && Number(sec) <= 60) {
            listItem.sec = Number(sec)
            listItem.min = Number(min)
            setToArray([...arrayToDo, listItem])
            setToDo('')
            setSec('')
            setMin('')
        }
    }
    function dropTime() {
        setToArray([
            ...arrayToDo.map((elem) => {
                if (!elem.pause) {
                    if (elem.sec >= 0 && elem.min >= 0) {
                        elem.sec = elem.sec - 1
                        if (elem.sec === 0) {
                            elem.min = elem.min - 1
                            elem.sec = 60
                        }
                        if (elem.sec === 0 && elem.min === 0) {
                            elem.min = 0
                            elem.sec = 0
                        }
                    }
                }
                return elem
            }),
        ])
    }
    function goTime(checkId) {
        setToArray([
            ...arrayToDo.map((elem) => {
                if (elem.id === checkId) {
                    elem.pause = false
                }
                return elem
            }),
        ])
    }
    function stopTime(checkId) {
        setToArray([
            ...arrayToDo.map((elem) => {
                if (elem.id === checkId) {
                    elem.pause = true
                }
                return elem
            }),
        ])
    }
    const deleteListItem = (idCheck) => {
        setToArray([...arrayToDo.filter((elem) => elem.id !== idCheck)])
    }
    const changeListStatus = (checkId) => {
        setToArray([
            ...arrayToDo.map((elem) => {
                if (elem.id === checkId && elem.status === 'statusActive') {
                    elem.status = 'statusCompleted'
                } else if (elem.id === checkId && elem.status === 'statusCompleted') {
                    elem.status = 'statusActive'
                }
                return elem
            }),
        ])
    }
    const changeEdit = (checkId) => {
        setToArray([
            ...arrayToDo.map((elem) => {
                if (elem.id === checkId) {
                    elem.edit = true
                }
                return elem
            }),
        ])
    }
    const editListItem = (checkId, text) => {
        if (text.trim() !== '') {
            setToArray([
                ...arrayToDo.map((elem) => {
                    if (elem.id === checkId) {
                        elem.edit = false
                        elem.body = text
                    }
                    return elem
                }),
            ])
        }
    }
    const clearCompleted = () => {
        setToArray([...arrayToDo.filter((elem) => elem.status !== 'statusCompleted')])
    }
    const [filter, setFilter] = useState('all')
    const changeFilter = (status) => {
        setFilter(status)
    }
    let filteredArray = [...arrayToDo]
    if (filter === 'completed') {
        filteredArray = arrayToDo.filter((elem) => elem.status === 'statusCompleted')
    }
    if (filter === 'active') {
        filteredArray = arrayToDo.filter((elem) => elem.status === 'statusActive')
    }
    useEffect(() => {
        const interval = setInterval(dropTime, 1000)
        return () => clearInterval(interval)
    })
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
            </header>
            <NewTaskForm
                setToDo={setToDo}
                toDo={toDo}
                addToArray={addToArray}
                sec={sec}
                setSec={setSec}
                min={min}
                setMin={setMin}
            />
            <section className="main">
                <TaskList
                    array={filteredArray}
                    deleteListItem={deleteListItem}
                    changeListStatus={changeListStatus}
                    editListItem={editListItem}
                    changeEdit={changeEdit}
                    goTime={goTime}
                    stopTime={stopTime}
                />
            </section>
            <Footer changeFilter={changeFilter} clearCompleted={clearCompleted} array={arrayToDo} />
        </section>
    )
}
root.render(<ToDoApp />)
