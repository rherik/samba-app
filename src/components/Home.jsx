import Sobre from './Sobre'
import { mockDatabase } from '../assets/dataEscolas';

export default function Home() {

    return (
        <>
            <div className='flex flex-wrap justify-center gap-8 my-12' id="home">
                {mockDatabase.map((escola) => (
                    <div key={escola.id} className='flex flex-col bg-white border border-slate-200 rounded-lg w-md shadow-lg hover:shadow-xl transition-shadow duration-300'>

                        <img src={escola.img} alt="card-image" className='w-full h-48 object-cover rounded-t-lg' />

                        {/* Card Content */}
                        <div className='p-6'>
                            <h3 className="text-2xl font-bold text-blue-800 mb-2">{escola.nome}</h3>

                            <div className='space-y-2 text-gray-600'>
                                <div className='flex items-center justify-start gap-1'>
                                    <p className='text-lg'>Fundação:</p>
                                    <p className='flex items-center text-cyan-500'>
                                        {escola.fundacao}
                                    </p>
                                </div>

                                <div className='flex items-center justify-start gap-1'>
                                    <p className='text-lg'>Títulos:</p>
                                    <p className='flex items-center text-cyan-500'>
                                        {escola.titulos}
                                    </p>
                                </div>
                            </div>

                            <button className='mt-4 w-full py-2 bg-gradient-to-r from-cyan-500 to-gray-500 text-white rounded-md hover:opacity-90 transition-opacity'>
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Sobre />
        </>
    )
}