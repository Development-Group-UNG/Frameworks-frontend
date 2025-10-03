export default function NavbarFooter() {
    return (
        <>
            <nav className="flex flex-col gap-4">
                <a className="text-black text-base hover:font-bold transition-all duration-400 ease-in-out" href="#"> Inicio</a>
                <a className="text-black text-base hover:font-bold transition-all duration-400 ease-in-out" href="/about"> Sobre</a>
                <a className="text-black text-base hover:font-bold transition-all duration-400 ease-in-out" href="/contact"> Contato</a>
            </nav>
        </>
    );
}