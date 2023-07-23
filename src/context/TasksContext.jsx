import { createContext } from 'react';
import { useState, useContext } from 'react';
import { 
    createTaskRequest,
    deleteTaskRequest,
    getTasksRequest,
    getTaskRequest,
    updateTaskRequest}
    from '../api/tasks';
import PropTypes from 'prop-types';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    } else {
        return context;
    }
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            if (res.status === 204) {
                setTasks(tasks.filter((task) => task._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id,task) => {
        try {
            const res = await updateTaskRequest(id, task);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                createTask,
                deleteTask,
                updateTask,
                useTasks,
                getTasks,
                getTask
            }}
    >
        {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired
}