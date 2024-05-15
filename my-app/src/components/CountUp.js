import React, { useState, useEffect } from 'react';

const CountUp = ({ startCount, targetCount }) => {
    const [count, setCount] = useState(startCount || 0);

    useEffect(() => {
        let interval = null;

        const timer = () => {
            interval = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + 1;
                    if (newCount === targetCount) {
                        clearInterval(interval); // Stop the interval when count reaches the target count
                    }
                    return newCount;
                });
            }, 2000 / targetCount); // Divide 2 seconds by targetCount to get the interval duration
        };

        timer();

        return () => {
            clearInterval(interval);
        };
    }, [targetCount]); // Re-run the effect when targetCount changes

    return <h2 style={{ color: "white" }}>{count}</h2>;
};

export default CountUp;
