import React from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import { TbListDetails } from "react-icons/tb"
import { useNavigate } from 'react-router-dom';

const TaskRow = ({ searchResult, taskInfo, index, setSearchResult }) => {
    const { title, description, _id, created_at } = taskInfo;
    const navigate = useNavigate('');

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://hellwet.onrender.com/tasks/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = searchResult.filter(p => p._id !== id)
                        setSearchResult(remaining);
                        toast.success(`${title} task has been deleted`);
                    }
                    else {
                        toast.error("Task Delete Failed");
                    }
                })
        }
    }

    const navigateTaskDetail = (id) => {
        navigate(`/taskDetail/${id}`);
    }

    const navigateEditTask = (id) => {
        navigate(`/editTask/${id}`);
    }

    return (
        <tr>
            <td><td>{index + 1}</td></td>
            <td>{title}</td>
            <td>{description.slice(0, 25)}...</td>
            <td>{created_at}</td>
            <td className='hover:text-blue-700' onClick={() => navigateTaskDetail(_id)}><TbListDetails size="25" /></td>
            <td className='hover:text-red-500' onClick={() => handleDelete(_id)}><MdDelete size="25" /></td>
            <td className='hover:text-green-600' onClick={() => navigateEditTask(_id)}><AiFillEdit size="25" /></td>
        </tr>
    );
};

export default TaskRow;