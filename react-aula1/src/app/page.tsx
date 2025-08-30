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
      </div>
    </>
  );
}
