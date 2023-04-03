import React, { useEffect, useState } from 'react';
import TaskRow from './TaskRow';
import AddTask from './AddTask';
import './Home.css';
import Footer from '../Shared/Footer';

const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [tags, setTags] = useState([]);
    const [order, setOrder] = useState("ASC")

    useEffect(() => {
        fetch('https://hellwet.onrender.com/tasks')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()));
                setSearchResult(match);
            })
    }, [searchText])

    const handleSearch = event => {
        setSearchText(event.target.value);
    }

    const sortItemAscDsc = (col) => {
        if (order === "ASC") {
            const sorted = searchResult.sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setSearchResult(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = searchResult.sort((a, b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setSearchResult(sorted);
            setOrder("ASC");
        }
    }

    return (
        <div>
            <div>
                {/* Search By Title */}
                <div className="flex w-screen justify-center p-5">
                    <div className="rounded-lg bg-gray-200 p-5 w-full lg:w-96">
                        <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input onChange={handleSearch} type="text" placeholder='Search By title' className="w-full bg-white pl-2 text-base font-semibold outline-0" id="" />
                            <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Filter by Categories */}
                <div className='flex justify-end mr-3'>
                    <div>
                        <button className='filterBtn' onClick={() => setTags("task")}>All</button>
                        <button className='filterBtn' onClick={() => setTags("Physical")}>Physical</button>
                        <button className='filterBtn' onClick={() => setTags("social")}>Social</button>
                    </div>
                </div>

                <div>
                    <span className='text-primary font-bold text-sm'>[Note:- Sorting By Title, Description and Date]</span>
                    <div className="overflow-x-auto">
                        <table className="table inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <thead>
                                {/* Sortingt by Title, Des, Date */}
                                <tr>
                                    <th>Sl</th>
                                    <th className='hover:text-blue-500 hover:underline hover:cursor-pointer' onClick={() => sortItemAscDsc("title")}>Title</th>
                                    <th className='hover:text-blue-500 hover:underline hover:cursor-pointer' onClick={() => sortItemAscDsc("description")}>Description</th>
                                    <th className='hover:text-blue-500 hover:underline hover:cursor-pointer' onClick={() => sortItemAscDsc("created_at")}>Date</th>
                                    <th>Detail</th>
                                    <th>Del</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchResult
                                        .filter(b => b.tags.includes(tags) || b.categories.includes(tags))
                                        .map((taskInfo, index) => <TaskRow
                                            key={taskInfo._id}
                                            searchResult={searchResult}
                                            setSearchResult={setSearchResult}
                                            index={index}
                                            taskInfo={taskInfo}
                                        ></TaskRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;