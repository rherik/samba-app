
export default function RegistrationForm(){
    
    return(
        <div className="flex justify-center">
        <div className="py-4 bg-slate-300 rounded-2xl flex flex-col items-center w-[75%]" id="form">
            <h2 className='block font-bold text-slate-700 text-2xl'>Registration Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const formValues = Object.fromEntries(formData);
                const payload = {
                    ...formValues,
                    titulos: parseInt(formValues.titulos)
                }
                console.log('Payload enviado:', payload);
                fetch('http://localhost:8080/escola', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'application/json' }
                });
            
            }}>
                <div className="w-[800px] pb-12">
                    <label className='block'>
                        <span className='block font-serif text-slate-700 text-2xl'>Nome da Escola de Samba</span>
                        <input name='name' type='text' placeholder='Digite o nome' className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                    </label>
                    <label className='block'>
                        <span className='block font-serif text-slate-700 text-2xl'>Fundação</span>
                        <input name='fundacao' type='text' placeholder='dd/mm/yyyy' className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                    </label>
                    <label className='block'>
                        <span className='block font-serif text-slate-700 text-2xl'>Títulos</span>
                        <input name='titulos' type='number' placeholder='Digite o número de títulos da escola' className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                    </label>
                </div>

                {/* Retornar mensagem de confirmação e recarregar. */}
                <button type='submit' className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent hover:pointer">
                    Aplicar formulário
                    </span></button>
            </form>
        </div>
        </div>
    )
}