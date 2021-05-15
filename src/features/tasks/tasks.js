import React from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '../tooltip/tooltip';
import { getTasks } from './tasksSlice';
import './tasks.css';

const Tasks = () => {
    const tasks = useSelector(getTasks);

    return (
        <div className="task-root">
            <table>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td className="col-width">
                                <div className="col-width">
                                    <Tooltip content={task} type={task.type} direction="bottom">
                                        {task.name} 
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tasks;