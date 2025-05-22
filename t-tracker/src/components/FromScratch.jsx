

function FromScratch() {
  return (
    <div>
        <h1 className="text-center text-2xl p-8">Now it's my turn</h1>
        <div className="flex justify-center items-center flex-col">
            <input type="text" placeholder="Give your insights a name" className="border-white border-2 rounded-lg p-4 text-center text-white font-semibold w-1/2" />
            <button className="p-4 m-4 bg-slate-400/40 border-8 rounded-3xl border-slate-600 hover:bg-slate-100 w-[200px]">Insert</button>
        </div>
        

        <ul>
            <li className="text-center text-xl font-semibold py-4">Primeiro</li>
            <li className="text-center text-xl font-semibold py-4">Segundo</li>
            <li className="text-center text-xl font-semibold py-4">Terceiro</li>
            <li className="text-center text-xl font-semibold py-4">Quarto</li>
            <li className="text-center text-xl font-semibold py-4">Quinto</li>
        </ul>
    </div>
  )
}

export default FromScratch