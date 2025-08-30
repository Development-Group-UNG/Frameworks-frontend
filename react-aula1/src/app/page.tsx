export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-full bg-[#ff0000] py-6 px-12 text-white">
          <a href="" className="rounded-2xl bg-white p-2 text-black hover:bg-red-700 hover:text-white transition duration-300 px-4 py-2">
            Home
          </a>
        </div>

        <div className="w-full bg-[#0000ff] py-6 px-12 text-white">
          <a href="/produto" className="rounded-2xl bg-white p-2 text-black hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2">
            Produtos
          </a>
        </div>

        <div className="w-full bg-[#00ff55] py-6 px-12 text-white">
          <a href="/cliente" className="rounded-2xl bg-white p-2 text-black hover:bg-green-700 hover:text-white transition duration-300 px-4 py-2">
            Clientes
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-4 w-3/4 mx-auto my-12 align-center">
        <img src="https://avatars.githubusercontent.com/u/86297161?v=4" alt="" className="rounded-2xl" />
        <div>
          <h1 className="text-7xl font-bold mb-4">E a chamada, professor??</h1>
        </div>
      </div>
    </>
  );
}
