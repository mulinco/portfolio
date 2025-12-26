import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <a 
        href="https://github.com/mulinco/portfolio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xl hover:text-goth-purple transition-colors kawaii:text-pink-500 kawaii:hover:scale-125"
      >
        <FaGithub />
      </a>
      <a 
        href="SEU_LINKEDIN" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xl hover:text-goth-blue transition-colors kawaii:text-pink-500 kawaii:hover:scale-125"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};