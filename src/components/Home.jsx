import { useEffect, useState } from 'react';
import RegistrationForm from './RegistrationForm'
import Sobre from './Sobre'


export default function Home() {

    const BASE_URL = 'http://localhost:8080/escolas';
    const [escolas, setEscolas] = useState([]);

    const imgList = ['https://i.pinimg.com/474x/81/bd/9d/81bd9de52a3126767b6c3f86d491f779.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6f/Bandeira_do_GRES_Portela.jpg/360px-Bandeira_do_GRES_Portela.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6f/Bandeira_Beija-Flor_de_Nil%C3%B3polis.png/500px-Bandeira_Beija-Flor_de_Nil%C3%B3polis.png',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Bandeira_do_GRES_Mocidade_Independente_de_Padre_Miguel.jpg/375px-Bandeira_do_GRES_Mocidade_Independente_de_Padre_Miguel.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7a/Bandeira_do_Grande_Rio.jpg/360px-Bandeira_do_Grande_Rio.jpg'
    ]

    useEffect(() => {
        fetch(BASE_URL)
            .then(result => result.json())
            .then(data => {
                setEscolas(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const mockDatabase = [
        {
            id: '1',
            nome: 'Estação Primeira de Mangueira',
            fundacao: '00/00/000',
            titulos: '0',
            img: 'https://i.pinimg.com/474x/81/bd/9d/81bd9de52a3126767b6c3f86d491f779.jpg'
        },
        {
            id: '2',
            nome: 'Beija-Flor de Nilópolis',
            fundacao: '00/00/000',
            titulos: '0',
            img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6f/Bandeira_Beija-Flor_de_Nil%C3%B3polis.png/500px-Bandeira_Beija-Flor_de_Nil%C3%B3polis.png'
        }
    ]

    return (
        <>
            <div className='flex flex-wrap justify-center gap-8 my-32' id="home">
                {mockDatabase.map((escola) => (
                    <div key={escola.id} className='flex flex-col bg-white border border-slate-200 rounded-lg w-96 shadow-lg hover:shadow-xl transition-shadow duration-300'>

                        <img src={escola.img} alt="card-image" className='w-full h-48 object-cover rounded-t-lg' />

                        {/* Card Content */}
                        <div className='p-6'>
                            <h3 className="text-2xl font-bold text-blue-800 mb-2">{escola.nome}</h3>

                            <div className='space-y-2 text-gray-600'>
                                <p className='flex items-center gap-2 w-5 h-5 text-cyan-500'>
                                    Fundação: {escola.fundacao}
                                </p>

                                <p className='flex items-center gap-2 w-5 h-5 text-amber-500'>
                                    Títulos: <span className='font-medium'>{escola.titulos}</span>
                                </p>
                            </div>

                            <button className='mt-4 w-full py-2 bg-gradient-to-r from-cyan-500 to-gray-500 text-white rounded-md hover:opacity-90 transition-opacity'>
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <RegistrationForm />
            <Sobre />
        </>
    )
}