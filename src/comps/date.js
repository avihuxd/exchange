import React, { useEffect, useState } from 'react'
export default function Dates(props) {
    const [date, setDate] = useState("5/4/22");
    const [time, setTime] = useState(`00:55:05`);
    const [seconds, setSeconds] = useState(0);
    const newDate = new Date()

    useEffect(() => {
        dates();
        const interval = setInterval(() => {
            setSeconds(newDate.getSeconds());
        }, 1000);
        return () => clearInterval(interval);
    }, [date, time,seconds])
    const dates = () => {
        setDate(newDate.getDate() + " / " + (newDate.getMonth() + 1) + " / " + newDate.getFullYear());
        setTime(newDate.getHours() + ":" + newDate.getMinutes() + ":" + seconds);
    }
    return (
        <div className='mt-2 mx-auto'>
            <h2 className='text-primary'>According to the date: <br />{date} <br /> {time}</h2>
        </div>
    )
}
