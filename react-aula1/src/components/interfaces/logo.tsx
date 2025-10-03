import LogoLM from '../../assets/img/LM-icon.jpg';

export default function Logo() {
    return (
        <img className='h-[50px] w-[50px] rounded-xl' src={LogoLM.src} alt="Logo LM" />
    );
}