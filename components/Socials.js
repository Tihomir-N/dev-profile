// links
import Link from 'next/link';
// icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/tihomir-n'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/tihomir-nikolov'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/tihomir.nikolov.522'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
