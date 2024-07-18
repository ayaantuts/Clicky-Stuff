// import { useState, useRef, useEffect } from 'react'
// import './App.css'
import Cube from './Cube';

const App = () => {
  // const [clicked, setClicked] = useState<Array<any>>([]); // Array to store clicked boxes order
  // const boxRef = useRef<HTMLDivElement[]>([]); // Ref to store all the boxes
  // useEffect(() => {
  //   {
  //     [...Array(9)].forEach((_, i) => {
  //       // Generate Refs for all the boxes
  //       boxRef.current[i] = document.querySelector(`.box:nth-child(${i + 1})`) as HTMLDivElement;
  //     });
  //   }
  // })
  // function handleClick(i: number) {
  //   // Function to handle the click event
  //   setClicked((prev) => {
  //     if (prev.length === 8) {
  //       let count = 0;
  //       // If all boxes are clicked, change all to orange in sequence
  //       while (prev && prev.length) {
  //         let curr = prev.shift();
  //         setTimeout(() => {
  //           boxRef.current[curr].classList.add('orange');
  //         }, count * 1000);

  //         setTimeout(() => {
  //           boxRef.current[curr].classList.remove('orange', 'clicked');
  //         }, count * 1000 + 1000);
  //         count++;
  //       }
  //       setTimeout(() => {
  //         boxRef.current[i].classList.add('orange');
  //         setTimeout(() => {
  //           boxRef.current[i].classList.remove('orange', 'clicked');
  //         }, 1000);
  //       }, 8000);
  //       return [];
  //     }
  //     return [...prev, i];
  //   });
  // }
  return (
    <>
    {/* <div className='box-container'> */}
        {/* {[...Array(9)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (boxRef.current[i] = el!)}
          className='box'
          onClick={() => {
            boxRef.current[i].classList.add('clicked');
            handleClick(i);
          }}
        ></div>
      ))} */}
        <Cube />
        <h1 className="font-sans bg-black">Wow</h1>
    {/* </div> */}
    </>
  )
}

export default App