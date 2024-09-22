import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './assets/toothless-bg.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-300 text-white p-5 rounded-md dark:bg-slate-600 dark:text-amber-400 '>Tailwind with React</h1>

      <figure className='md:flex  bg-green-300 text-white rounded-xl m-8 p-8 md:p-0 dark:bg-slate-800'>

        {/* add image path after asking THE SENIOR */}
        <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' width="384" height="512" src="" alt="Image of Night Fury" />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium'>
              "This is my 2nd project of React with <strong>Chai Aur Code</strong>. Thaught by Sir <em>Hitesh Choudhary</em>. It's a series called Chai Aur React divided into two different One-Shot videos on YouTube."
            </p>
          </blockquote>

          <figcaption className='font-medium'>
            <div className='text-emerald-500  dark:text-sky-600 '>
              Aqsaa Qaazi
            </div>

            
          </figcaption>
        </div>
      </figure>

    </>
  )
}

export default App
