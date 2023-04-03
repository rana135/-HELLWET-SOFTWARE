import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import taskImg from '../../asset/task.png'
import useTask from '../../hooks/useTask';

const TaskDetail = () => {
    const { id } = useParams();
    const [task] = useTask(id);
    const navigate = useNavigate('');

    const navigateHome = (id) => {
        navigate('/')
    }
    const navigateEdit = (id) => {
        navigate(`/editTask/${id}`);
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex justify-center items-center">
            <div className="bg-white rounded-lg">
                <div className="lg:max-w-lg border-t-8 border-pink-600 rounded-lg flex">
                    <div className="w-1/3 pt-6 flex justify-center">
                        <img className='h-16' src={taskImg} alt="" />
                    </div>
                    <div className="w-full pt-9 pr-4">
                        <h3 className="font-bold text-pink-700">{task?.title}</h3>
                        <p className="py-4 text-sm text-gray-400">{task?.description}</p>
                    </div>
                </div>

                <div className="p-4 flex space-x-4">

                    <button onClick={() => navigateHome(task._id)} className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Cancel</button>
                    <button onClick={() => navigateEdit(task._id)} className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Edit Task</button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;