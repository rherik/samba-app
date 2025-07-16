import React from 'react'

export default function Trivia(){
    // let [index, setIndex] = useState();
    return(
        <section>
            <div className='w-[580px] m-auto mt-[150px] bg-amber-100 text-[#262626] flex flex-col items-center gap-2 p-4 rounded-lg bg-linear-65 from-purple-300 to-pink-200'>
                <h1 className='pt-0 pb-0'>Trivia App</h1>
                <hr className='text-black w-[50%]' />
                <h2>Qual escola de samba tem mais títulos?</h2>
                <ul className='flex flex-col items-center'>
                    <li>Beija-Flor</li>
                    <li>Grande Rio</li>
                    <li>Portela</li>
                    <li>Mangueira</li>
                </ul>
                <button className='w-40 h-11 text-amber-700 bg-blue-100 m-auto cursor-pointer rounded-lg transition duration-500 hover:scale-125'>Next</button>
                <p>1 de 5 questões</p>
            </div>
        </section>
    )
}