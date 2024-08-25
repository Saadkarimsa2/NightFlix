import type { NextPage } from 'next';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import card1 from '../public/1.jpg';
import card2 from '../public/2.jpg';
import card3 from '../public/3.jpg';
import card4 from '../public/4.jpg';
import card5 from '../public/5.jpg';
import card6 from '../public/6.jpg';
import Carousel from '../components/carousel/Carousel';
import Head from 'next/head';

const Home: NextPage = () => {
  const [message, setMessage] = useState<string>('Every moment with you feels like a beautiful dream I never want to wake up from. 🌙');
  const [showVideo, setShowVideo] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('Series_first');

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`/api/episodes?title=${selectedTitle}`);
      const data = await response.json();
      setEpisodes(data);
    };

    fetchEpisode();

    const messages = [
      "With every beat of my heart, I love you more deeply than words could ever express. ❤️",
      "You are my sunshine, my joy, my love—forever and always, you make my life complete. ☀️",
      "Every moment with you feels like a beautiful dream I never want to wake up from. 🌙",
      "Your smile lights up my world, making every day brighter just by having you in it. 😊",
      "You are my everything, the one I cherish more than anything in this world. I love you. 🌍❤️",
      "In your eyes, I find my home, my happiness, and the greatest love I have ever known. 👀💕",
      "Our love is a journey, one that I am so grateful to travel with you by my side. 🚗❤️",
      "Your love fills my heart with endless joy, I am so lucky to have you, my love. 💖",
      "Every day I fall more in love with you, and I can not wait for our forever together. 💍",
      "You are my love, my life, my everything, and I am forever grateful to call you mine. 💑",
      "Your love is the most precious gift I have ever received, and I cherish you beyond measure. 🎁❤️",
      "With you, I have found the love I have always dreamed of, and I am never letting you go. 💘",
      "You are my hearts desire, my greatest joy, loving you is the best part of my life. ❤️😊",
      "You make my world a better place just by being in it. I love you more each day. 🌟❤️",
      "With you, life is a beautiful melody, and our love is the sweetest song I have ever known. 🎶💖"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);

  }, [selectedTitle]);

  const handleImageClick = (title: string) => {
    setSelectedEpisode(0);
    setSelectedTitle(title);
    setShowVideo(true);
  };

  const handleEpisodeClick = (index: number) => {
    setSelectedEpisode(index);
  };

  const handleBackClick = () => {
    setShowVideo(false);
    setSelectedEpisode(null);
  };

  const imagesItems = [
    <Image src={card1} alt='Series First' className="w-full h-full" onClick={() => handleImageClick('Series_first')} />,
    <Image src={card2} alt='series second' className="w-full h-full" onClick={() => handleImageClick('Series_second')} />,
    <Image src={card3} alt='series third' className="w-full h-full" onClick={() => handleImageClick('Series_third')} />,
    <Image src={card4} alt='series fourth' className="w-full h-full" onClick={() => handleImageClick('Series_fourth')} />,
    <Image src={card5} alt='series fifth' className="w-full h-full" onClick={() => handleImageClick('Series_fifth')} />,
    <Image src={card6} alt='series sixth' className="w-full h-full" onClick={() => handleImageClick('Series_sixth')} />,
  ];

  return (
    <div className='h-screen w-screen overflow-y-auto overflow-x-hidden bg-bg text-white'>
      <Head>
        <title>MeharFlix</title>
        <link rel='icon' href='favicon.ico' />
      </Head>

      <Header className='fixed top-0 w-full z-20' />
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 pt-20 text-center'>
        {showVideo && (
          <button
            onClick={handleBackClick}
            className='absolute top-24 left-10 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
          >
            &larr; Back
          </button>
        )}

        {!showVideo && (
          <div className='mb-10 flex flex-col justify-center space-y-6'>
            <h1 className='text-4xl font-bold md:text-5xl'>{message}</h1>
            <p className='text-center text-xs opacity-75'>⭐ Welcome to our magical World ⭐</p>
          </div>
        )}

        {showVideo && selectedEpisode !== null && episodes.length > 0 ? (
          <div className='video-section flex flex-col items-center'>
            <div className='video-container rounded-lg overflow-hidden'>
              <video key={episodes[selectedEpisode].video} controls className='w-full h-auto'>
                <source src={episodes[selectedEpisode].video} type='video/mp4' />
                <track
                  src={`/${selectedTitle}/${episodes[selectedEpisode].subtitle.replace('.srt', '.vtt')}`}
                  kind='subtitles'
                  srcLang='en'
                  label='English'
                  default
                />
              </video>
            </div>

            <div className='episodes-list-container mt-4 w-full max-w-md'>
              <div className='episodes-list'>
                {episodes.map((episode, index) => (
                  <div
                    key={index}
                    className='episode-item bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded mb-4 flex items-center justify-between cursor-pointer'
                    onClick={() => handleEpisodeClick(index)}
                  >
                    <div className='flex items-center'>
                      <img src='/play.png' alt='play button' className='w-6 h-6 mr-2' />
                      <span className='text-white font-semibold'>Episode {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Carousel items={imagesItems} />
        )}
      </main>
    </div>
  );
};

export default Home;
