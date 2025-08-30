export default function Cliente() {
    return (
        <>
            <div className="flex flex-row">
                <div className="w-full bg-[#001010] py-6 px-12 text-white">
                    <a href="/" className="rounded-2xl bg-white p-2 text-black hover:bg-gray-700 hover:text-white transition duration-300 px-4 py-2">
                        Home
                    </a>
                </div>

                <div className="w-full bg-[#009dac] py-6 px-12 text-white">
                    <a href="/produto" className="rounded-2xl bg-white p-2 text-black hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2">
                        Produtos
                    </a>
                </div>

                <div className="w-full bg-[#ff00bf] py-6 px-12 text-white">
                    <a href="/cliente" className="rounded-2xl bg-white p-2 text-black hover:bg-pink-400 hover:text-white transition duration-300 px-4 py-2">
                        Clientes
                    </a>
                </div>
            </div>
        </>
    );
}
