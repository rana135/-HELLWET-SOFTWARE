import { useEffect, useState } from "react"


const useTask = id => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch(`https://hellwet.onrender.com/tasks/${id}`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return [task, setTask];
}
export default useTask;