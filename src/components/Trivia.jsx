import React, { useState } from 'react';
import { data } from '../assets/dataTrivia';

export default function Trivia() {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);

    const resetOptions = () => {
        const options = document.querySelectorAll('a');
        options.forEach(option => {
            option.classList.remove("bg-green-300", "border-green-600", "bg-red-300", "border-red-600");
        });
    };


    const checkAnswer = (element, anwser) => {
        element.preventDefault();
        if (lock === false) {
            if (question.anwser === anwser) {
                element.target.classList.add("bg-green-300", "border-green-600");
                setLock(true);
                setScore(prev=> prev + 1);
            } else {
                element.target.classList.add("bg-red-300", "border-red-600");

                setLock(true);
            }

        }
    }

    const nextQuestion = () => {
        if(lock === true) {
            setIndex(++index);
            setQuestion(data[index]);
            resetOptions();
            setLock(false);
        }
    }

    return (
        <section className='w-[580px] m-auto mt-[150px] bg-amber-100 text-[#262626] gap-2 p-4 rounded-lg bg-linear-65 from-purple-300 to-pink-200 '>
            <div className='flex flex-col items-center text-start p-2 justify-around'>
                <h1 className='text-xl pt-0 pb-2'>{index+1}. {question.question}</h1>
                <hr className='text-black w-[95%]' />
                
                <div className='flex flex-col h-52 pt-4 text-center gap-0.5 justify-around'>
                    <a href='' className='w-40 border-2 border-gray-800 rounded-lg cursor-pointer transition duration-500 hover:scale-125'
                        onClick={(element) => { checkAnswer(element, 1) }}>{question.option1}</a>
                    <a href='' className='w-40 border-2 border-gray-800 rounded-lg cursor-pointer transition duration-500 hover:scale-125'
                        onClick={(element) => { checkAnswer(element, 2) }}>{question.option2}</a>
                    <a href='' className='w-40 border-2 border-gray-800 rounded-lg cursor-pointer transition duration-500 hover:scale-125'
                        onClick={(element) => { checkAnswer(element, 3) }}>{question.option3}</a>
                    <a href='' className='w-40 border-2 border-gray-800 rounded-lg cursor-pointer transition duration-500 hover:scale-125'
                        onClick={(element) => { checkAnswer(element, 4) }}>{question.option4}</a>
                    <a href='' className='w-40 border-2 border-gray-800 rounded-lg cursor-pointer transition duration-500 hover:scale-125'
                        onClick={(element) => { checkAnswer(element, 5) }}>{question.option5}</a>
                </div>
                <button onClick={nextQuestion} className='w-40 h-11 text-purple-500 bg-blue-100 border-2 border-gray-800 m-auto cursor-pointer rounded-lg transition duration-500 hover:scale-125'>Next</button>
                <button onClick={() => {setLock(false); resetOptions(); }} className='bg-blue-50 border-1 border-gray-800 rounded-sm p-0.5 text-sm ml-[30rem] cursor-pointer transition duration-500 hover:scale-115'>Try again</button>
                <p className="justify-start">{index + 1} de {data.length} questões</p>
            </div>
        </section>
    )
}