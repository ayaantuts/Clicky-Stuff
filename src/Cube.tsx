import { useEffect, useState } from 'react';

function Cube() {
    const [data, setData] = useState([
        { id: 1, color: 'bg-blue-500', visited: false },
        { id: 2, color: 'bg-blue-500', visited: false },
        { id: 3, color: 'bg-blue-500', visited: false },
        { id: 4, color: 'bg-blue-500', visited: false },
        { id: 5, color: 'bg-blue-500', visited: false },
        { id: 6, color: 'bg-blue-500', visited: false },
        { id: 7, color: 'bg-blue-500', visited: false },
        { id: 8, color: 'bg-blue-500', visited: false },
        { id: 9, color: 'bg-blue-500', visited: false }
    ]);
    const [clickedIds, setClickedIds] = useState([]);
    const [count, setCount] = useState(0);
    // const [iterator, setIterator] = useState(0);

    useEffect(() => {
        if (count === 9)
            resetPreviousColors();
        setData(data => data.map(d => {return {...d, visited :false}}));
    }, [count]);

    const changeColor = (id) => {
        const cube = data.filter(c => c.id === id);
        if (cube[0].color === 'bg-red-500') return;
        const updatedData = data.map(cube => {
            if (cube.id === id) {
                setClickedIds([...clickedIds, id]);
                setCount(prev => prev + 1);
                return { ...cube, color: 'bg-red-500' };
            } else {
                return cube;
            }
        });
        // if (count === 8) {
        //     const cubeClicked = data.filter(c => c.id === id);
        //     cubeClicked[0].color = 'bg-red-500';
        //     data.map(cube => {
        //         cube.color = 'bg-blue-500';
        //     })
        // }
        setData(updatedData);
    };

    const resetPreviousColors = () => {
        // setIterator(0);
        // setTimeout(() => {
        //     if (iterator < clickedIds.length) {
        //         const idToReset = clickedIds[iterator];
        //         data.map(cube => {
        //             if (cube.id === idToReset) {
        //                 cube.color = 'bg-blue-500';
        //             } else {
        //                 cube.color = 'bg-blue-500';
        //             }
        //         });
        //         setIterator(prevIterator => prevIterator + 1);
        //     }
        // }, 5000 * iterator);
        clickedIds.map((cId, idx) => {
            setTimeout(() => {
                // data[cube - 1].color = 'bg-blue-500';
                const updatedData = data.map(cube => {
                    if (cube.id === cId) {
                        cube.visited = true;
                        return { ...cube, color: 'bg-blue-500' };
                    } else {
                        if (cube.visited)
                            return { ...cube, color: 'bg-blue-500' };
                        else
                            return cube;
                    }
                });
                setData(updatedData);
            }, 1000 * idx);
        });
        setCount(0);
        setClickedIds([]);
    }

    return (
        <div className='w-full h-full flex justify-center mt-32'>
            <div className='grid grid-cols-3 gap-4'>
                {data.map((cube) => (
                    <div
                        key={cube.id}
                        className={`w-20 h-20 border border-black flex items-center justify-center ${cube.color} transition-all duration-1000`}
                        onClick={() => changeColor(cube.id)}
                    >
                        <h1>{cube.id}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cube;