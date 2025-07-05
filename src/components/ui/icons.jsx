import Image from "next/image";

const TwitterIcon = () => {
  return (
    <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
  );
};

const GithubIcon = () => {
  return <Image src="/icons/github.svg" alt="Github" width={24} height={24} />;
};

const InstagramIcon = () => {
  return (
    <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
  );
};

const DribbbleIcon = () => {
  return (
    <Image src="/icons/dribbble.svg" alt="Dribbble" width={24} height={24} />
  );
};

const HamburgerIcon = () => {
  return (
    <Image src="/icons/hamburger.svg" alt="Hamburger" width={24} height={24} />
  );
};
const CloseIcon = () => {
  return <Image src="/icons/close.svg" alt="Close" width={24} height={24} />;
};
export {
  CloseIcon,
  DribbbleIcon,
  GithubIcon,
  HamburgerIcon,
  InstagramIcon,
  TwitterIcon,
};
