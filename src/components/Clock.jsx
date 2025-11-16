import React, { useEffect, useState } from 'react'

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeFunc = setInterval(() => {
            setTime(new Date());
            // console.log("time render");
        }, 1000);
        return () => {
            clearInterval(timeFunc);
        }

    }, []);
    return (
        <div>
            <div className='clock'>
                {time.toLocaleTimeString()}

                <div className="date">
                    {time.toDateString()}
                </div>
            </div>
        </div>
    )
}

export default Clock