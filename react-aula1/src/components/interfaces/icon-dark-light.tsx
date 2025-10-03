import Image from 'next/image';
import IconSun from '../../assets/svg/icon-sun.svg';
import IconMoon from '../../assets/svg/icon-moon.svg';

export default function IconHeader() {
    return (
        <div className="flex gap-2">
            <Image src={IconSun} alt="Ícone do Sol" width={24} height={24} />
            {/* <Image src={IconMoon} alt="Ícone da Lua" width={24} height={24} /> */}
        </div>
    );
}