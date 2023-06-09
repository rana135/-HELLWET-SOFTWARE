import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTask from '../../hooks/useTask';


const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [task] = useTask(id);

    const onSubmit = (data) => {
        console.log(data)
        const url = `https://hellwet.onrender.com/editTask/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Task Edit Sucessfully')
                reset();
                navigate('/');
            }
            )
    };

    return (
        <div className='container mx-auto p-4 bg-white'>
            <h1 className='comment-title text-center font-bold text-primary text-2xl mt-2'>Please Edit Your Task</h1>
            <div className='w-full md:w-2/3 lg:w-2/5 mx-auto my-5'>
                <form className='flex flex-col mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        defaultValue={task?.title}
                        placeholder='Enter Title Name'
                        type="text"
                        {...register("title", {
                            maxLength: 25, required: {
                                value: true,
                                message: "Title is required"
                            },
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                    </label>
                    <input
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        placeholder='Enter Date'
                        type="date"
                        {...register("created_at", {
                            required: true,
                            message: "Date is required"
                        })}
                    />
                    <label className="label">
                        {errors.created_at?.type === 'required' && <span className="label-text-alt text-red-500">{errors.created_at.message}</span>}
                    </label>

                    <textarea
                        rows={10}
                        className='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                        defaultValue={task?.description}
                        placeholder='Enter Task Details'
                        {...register("description",
                            {
                                maxLength: 250, required: {
                                    value: true,
                                    message: "Comment is required"
                                },
                            })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>

                    <input
                        className='form-button px-4 py-3 leading-6 text-base rounded-md border border-transparent  focus:outline-none text-blue-100 hover:text-white focus:ring-2 bg-sky-600 hover:bg-sky-800 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-bold'
                        type="submit"
                        value="Edit Task"
                    />
                </form>
            </div>
        </div>
    );
};

export default EditTask;