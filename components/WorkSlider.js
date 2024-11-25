import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'TheQuizVortex',
          website: 'https://thequizvortex.web.app/',
          github: 'https://bit.ly/theQuizVortex-app',
          path: '/Thumb-quiz-vortex.png',
          isLive: true
        },
        {
          title: 'Roaming Nomads',
          website: 'https://react-project--forum.web.app/',
          github: 'https://github.com/Giphy-Project-Buddy-Group-14/React-Project--forum',
          path: '/Thumb-roaming-nomads.png',
          isLive: true
        },
        {
          title: 'Purrrpl gifs',
          path: '/Thumb-purrpl-gifs.png',
          github: 'https://github.com/Giphy-Project-Buddy-Group-14/Giphy',
          isLive: false
        },
        {
          title: 'Personal website',
          path: '/Thumb-personal-website.png',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// import icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
{workSlides.slides.map((slide, index) => {
  return (
    <SwiperSlide key={index}>
      <div className='grid grid-cols-2 gap-rows-2 gap-4 cursor-pointer'>
        {slide.images.map((image, i) => {
          return (
            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={i}>
              <div className='flex items-center justify-center relative overflow-hidden group'>
                {/* image */}
                <Image src={image.path} width={500} height={300} alt="" />
                {/* overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                {/* title and icons */}
                <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 flex flex-col items-center justify-center'>
                  <div className='flex flex-col items-center gap-y-2 text-[13px] tracking-[0.2em]'>
                    <div className="text-base font-medium font-sora mb-2 md:mb-0">{image.title}</div>
                    {/* title and arrow */}
                    <div className='flex items-center gap-x-2'>
                      {image.isLive && <div className='delay-100'>LIVE</div>}
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight />
                      </div>
                    </div>
                    {/* icons */}
                    <div className='flex items-center gap-x-4 mt-2'>
                      {image.github && <a
                        href={image.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-accent transition-all duration-300"
                      >
                        <FaGithub />
                      </a>}
                      {image.website && <a
                        href={image.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-accent transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                      </a>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SwiperSlide>
  );
})}
    </Swiper>
  );
};

export default WorkSlider;

