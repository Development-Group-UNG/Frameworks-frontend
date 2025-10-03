import Logo from './interfaces/logo';
import Navbar from './interfaces/navbar';
import IconHeader from './interfaces/icon-dark-light';

export default function Header() {
    return (
        <>
            <header className='flex items-center justify-between px-8 py-4 bg-gray-200 rounded-b-2xl'>
                <Logo />
                <Navbar />
                <IconHeader />
            </header>
        </>
    );
}