export default function Header() {
    return (
        <>
            <button className="fixed bottom-4 right-4 bg-gray-200 text-black p-3 rounded-full hover:bg-gray-300 transition-colors duration-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo"
            >
                ↑
            </button>
        </>
    );
}
