import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="EVENTO logo"
      width={53}
      height={12}
    />
    // <Image
    //   src="/public/events-trackter-logo.png"
    //   alt="logo"
    //   width={30}
    //   height={30}
    //   className="object-contain"
    // />
  );
};

export default Logo;
