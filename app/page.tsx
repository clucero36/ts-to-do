'use client';

import { useState } from "react";

let id = 0;
const STARTING_TASKS = [
  {id: id++, taskLabel: 'Wash the dishes.'},
  {id: id++, taskLabel: 'Clean the room.'},
  {id: id++, taskLabel: 'Walk the dog.'}
]

export default function Home() {

  const [taskList, setTaskList] = useState(STARTING_TASKS);
  const [newTask, SetNewTask] = useState('');

  const addTask = () => {
    setTaskList([...taskList].concat({
      id: id++,
      taskLabel: newTask
    }))
  }

  const deleteTask = (delete_id: number) => {
    setTaskList(taskList.filter((task) => task.id !== delete_id))
  }

  return (
    <div>
      <div className="input">
        <input 
          type='text'
          placeholder='Add To Your List'
          aria-label='Add To Your List'
          value={newTask}
          onChange={(e) => SetNewTask(e.target.value)}
        />
        <button onClick={addTask}>
          Submit
        </button>
      </div>
      <div className="list">
        {
          taskList.map(({taskLabel, id}) => {
            return (
              <ul key={taskLabel}>
                <li>
                  {`${taskLabel} ${id}`}
                  <button onClick={() => deleteTask(id)}>
                    Delete
                  </button>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}