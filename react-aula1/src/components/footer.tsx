import Logo from './interfaces/logo';
import NavbarFooter from './interfaces/navbar-footer';
import BackToTop from './interfaces/back-to-top';
// import IconHeader from './interfaces/icon-dark-light';

export default function Footer() {
    return (
        <>
            <header className='flex items-center justify-between px-8 py-4 bg-gray-200 rounded-b-2xl'>
                <Logo />
                <NavbarFooter />
                <BackToTop />
            </header>
        </>
    );
}