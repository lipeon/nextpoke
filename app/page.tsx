
export default function Home() {
  return (
<div className="grid grid-cols-6 gap-4">
  <div className="bg-indigo-500 h-100 col-start-1 col-end-2 row-span-6">Time</div>
  <div className="bg-indigo-500 h-100 col-start-6 col-end-7 row-span-6">Locais</div>
  <div className="bg-indigo-700 col-start-2 col-end-6">Console</div>
  <div className="bg-indigo-300 col-span-2">Itens</div>
  <div className="bg-indigo-300 col-span-2">Oponente
  <ul>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" alt="" />
  </ul>
  <ul>
  <li>name:clefairy</li>
  <li>base_experience:113</li>
  <li>height:6</li>
  <li>weight:75</li>
  </ul>

  </div>
  <div className="bg-indigo-300 col-span-2">meu poke
  <ul>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png" alt="" />
  </ul>
  <ul>
  <li>name:Venosaur</li>
  <li>base_experience:113</li>
  <li>height:6</li>
  <li>weight:75</li>
  </ul>
  </div>
  <div className="bg-indigo-300 col-span-2">Opçoes de Catch</div>
  <div className="bg-indigo-100 h-60 col-start-1 col-end-7">Console</div>
</div>
  )
}
