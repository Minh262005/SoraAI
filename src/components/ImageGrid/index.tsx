import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import VideoDetail from '../VideoDetail/VideoDetail';

// === Styled Components ===
const GridContainer = styled.div`
  column-count: 3;
  column-gap: 8px;
  padding: 40px;
  background: #fff;
  padding-top: 100px;
`;

const VideoCard = styled.div`
  display: block;
  margin-bottom: 8px;
  break-inside: avoid;
  border-radius: 8px;
  background: #f1f1f1;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  outline: none;
  opacity: 1;
  pointer-events: auto;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 100px;
  z-index: 5;
  margin-bottom: 8px;
  width: 100%;
`;

const HeroVideoCard = styled(VideoCard)`
  position: relative;
  z-index: 2;
  will-change: transform;
  transform-origin: top center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-out;
  width: 100vw;
  height: auto;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  border-radius: 0;
`;

const Video = styled.video`
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0;
`;

// === Video Data (Giữ nguyên) ===
const videos = [ { src: "https://cdn.openai.com/sora/landing-page/md/001-6_20241112_0416_Googly-Eyed%20Jellyfish%20Encounter_remix_01jcg4vh70ek6s3f6dat5aephr.mp4.mp4", poster: "placeholder1.jpg", title: "Googly-Eyed Jellyfish Encounter", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/011-20241206_1608_Alien%20Ship%20Emergence_storyboard_01jef74b47ezrvx8wh7f4bgn1d.mp4.mp4", poster: "placeholder2.jpg", title: "Alien Ship Emergence", prompt: "Handheld grainy, black-and-white footage shows the ominous silhouette of a giant futuristic brutalist spaceship emerging from the misty sea, towering over a small, quaint seaside town." }, { src: "https://cdn.openai.com/sora/landing-page/md/020-00236_20241121_1411_Underwater%20Literary%20Escape_simple_compose_01jd8cenk1fvw8bbztzjm2dnhj%20(1).mp4.mp4", poster: "placeholder3.jpg", title: "Underwater Literary Escape", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/20241207_0406_Retro%20Futuristic%20Skies_simple_compose_01jegg67jtf8p8jf9m67ejzcdn.mp4.mp4", poster: "placeholder4.jpg", title: "Retro Futuristic Skies", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/012-7_20241115_1200_Twilight%20Beach%20Serenity_simple_compose_01jcrpjtgqfnc97f13pbp0zrff_prob4.mp4.mp4", poster: "placeholder5.jpg", title: "Twilight Beach Serenity", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/022-9_20241118_1544_Bioluminescent%20Forest%20Magic_storyboard_01jd0tkcegfw3ap6vt5rgrtyck.mp4.mp4", poster: "placeholder6.jpg", title: "Bioluminescent Forest Magic", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/013-20241205_1850_Loop%20Video_loop_01jecxzmtfesctgnq085gj8cab.mp4.mp4", poster: "placeholder8.jpg", title: "Loop Video", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/023-20241207_0303_Innocent%20Wonder_storyboard_01jegck6zpeh9vysdh219g32j5.mp4.mp4", poster: "placeholder9.jpg", title: "Innocent Wonder", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/005-20241120_1443_Claymation%20Friends_%20Adventure_simple_compose_01jd5vxtbyf3nve090cn5vm2m4%20(1).mp4.mp4", poster: "placeholder10.jpg", title: "Claymation Friends Adventure", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/014-9_20241122_1737_Whales%20Soaring%20Skyward_remix_01jdban9ykevctk8csk530rqmc.mp4.mp4", poster: "placeholder11.jpg", title: "Whales Soaring Skyward", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/024-20241207_0103_Bubble%20Dragon%20Delight_simple_compose_01jeg5pwjpf13vze4vpf1ybg3c.mp4.mp4", poster: "placeholder12.jpg", title: "Bubble Dragon Delight", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/006-20241023_2357_Adorable%20Bouncing%20Creature_remix_01jayn1pfge6xv4bhmvq6d36kd.mp4.mp4", poster: "placeholder13.jpg", title: "Adorable Bouncing Creature", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/015-20241204_0237_Alien%20in%20New%20York_simple_compose_01je8ky3ssfm5811cssg7y75h5.mp4.mp4", poster: "placeholder14.jpg", title: "Alien in New York", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/025-Hero_9_20241118_0123_Kraken%20Attack%20Chaos_storyboard_01jcz9a8f5fst9pkby0c78f8hr.mp4.mp4", poster: "placeholder15.jpg", title: "Kraken Attack Chaos", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/007-5_assets_task_01jdknjq68f8ssgn8bg4mw4m44_task_01jdknjq68f8ssgn8bg4mw4m44_genid_cc2c3e89-baf3-4fe5-99d3-29c0df8339cf_24_11_26_07_25_365626_videos_00000_169167_s.mp4.mp4", poster: "placeholder16.jpg", title: "Cosmic Journey", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/010-7_20241120_2300_Harmony%20with%20Nature_simple_compose_01jd6ras77f01s8we76f97xsvm%20(2).mp4.mp4", poster: "placeholder17.jpg", title: "Harmony with Nature", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/026-20241204_0107_Astronaut%20Dogs_%20Cosmic%20Journey_storyboard_01je8esjj7e0sap803j6fmh7kx.mp4.mp4", poster: "placeholder18.jpg", title: "Astronaut Dogs: Cosmic Journey", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/008-20241206_0349_Sunset%20Reflections_storyboard_01jedwttq5fscsggyeq6qt7341.mp4.mp4", poster: "placeholder19.jpg", title: "Sunset Reflections", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/017-6_20241118_2245_Mystical%20Swampland%20Serpent_remix_01jd1jqat6ewbv8hh423012vbr.mp4.mp4", poster: "placeholder20.jpg", title: "Mystical Swampland Serpent", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/027-Slack_20241122_1832_Bling%20Zoo%20Aquarium_storyboard_01jdbdv23rev4bk43p3apxprnh.mp4.mp4", poster: "placeholder21.jpg", title: "Bling Zoo Aquarium", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/009-9_20240924_1806_Eerie%20Submarine%20Ruins_storyboard_01j8kbe4htf0sarh18w85y61r5.mp4.mp4", poster: "placeholder22.jpg", title: "Eerie Submarine Ruins", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/018-20241206_0219_Japanese%20Winter%20Market_storyboard_01jedqnj4wfwh8cysja6sjqh26.mp4.mp4", poster: "placeholder23.jpg", title: "Japanese Winter Market", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/007-5_assets_task_01jdknjq68f8ssgn8bg4mw4m44_task_01jdknjq68f8ssgn8bg4mw4m44_genid_cc2c3e89-baf3-4fe5-99d3-29c0df8339cf_24_11_26_07_25_365626_videos_00000_169167_s.mp4.mp4", poster: "placeholder24.jpg", title: "Cosmic Journey 2", prompt: "Strong Remix: add googly eyes on jellyfish" }, { src: "https://cdn.openai.com/sora/landing-page/md/019-20241204_0022_Golden%20Festive%20Frolic_simple_compose_01je8c5v26fpj8jeydjp6gymy9.mp4.mp4", poster: "placeholder25.jpg", title: "Golden Festive Frolic", prompt: "Strong Remix: add googly eyes on jellyfish" }];

const ImageGrid: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
    prompt?: string;
  } | null>(null);

  const specialVideoRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const heroVideoInitialTop = useRef<number>(0);

  useEffect(() => {
    if (specialVideoRef.current) {
      heroVideoInitialTop.current = specialVideoRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (!specialVideoRef.current || !gridContainerRef.current) {
        return;
      }

      const scrollY = window.scrollY;
      const heroVideoTop = heroVideoInitialTop.current; 
      const gridTop = gridContainerRef.current.offsetTop;
      const heroVideoHeight = specialVideoRef.current.offsetHeight;
      const targetScale = 0.3;

      let scale = 1;
      let translateY = 0;

      // Tính toán scale giảm dần
      const scaleProgress = Math.max(0, Math.min(1, (scrollY - heroVideoTop) / 200)); // 0 đến 1 khi scroll qua khoảng 800px
      scale = 1 - scaleProgress * (1 - targetScale); // Scale từ 1 về targetScale

      // Tính toán translateY để video hero trượt lên vào vị trí của nó trong lưới
      const distanceToGrid = gridTop - heroVideoTop;
      translateY = scaleProgress * distanceToGrid;

      specialVideoRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;

      const otherVideos = Array.from(gridContainerRef.current.children).filter((_, index) => index !== 8);
      otherVideos.forEach(video => {
        const showThreshold = heroVideoTop + heroVideoHeight * targetScale * 0.8; // Điều chỉnh ngưỡng hiển thị
        (video as HTMLElement).style.opacity = scrollY >= showThreshold ? '1' : '0';
        (video as HTMLElement).style.pointerEvents = scrollY >= showThreshold ? 'auto' : 'none';
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleVideoSelect = (video: typeof videos[number]) => {
    setSelectedVideo({
      src: video.src,
      title: video.title,
      prompt: video.prompt,
    });
  };

  const renderVideoCard = (video: typeof videos[number], index: number) => {
    const isHero = index === 8;
    const Wrapper = isHero ? HeroVideoCard : VideoCard;

    const content = (
      <Wrapper
        key={index}
        ref={isHero ? specialVideoRef : null}
        onClick={() => handleVideoSelect(video)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleVideoSelect(video);
          }
        }}
        aria-label={`Video: ${video.title}`}
        role="button"
        tabIndex={0}
      >
        <Video
          src={video.src}
          autoPlay
          loop
          muted
          poster={video.poster}
          aria-describedby={`desc-${index}`}
        />
      </Wrapper>
    );

    return isHero ? <StickyWrapper key={index}>{content}</StickyWrapper> : content;
  };

  return (
    <>
      <GridContainer ref={gridContainerRef}>
        {videos.map((video, index) => renderVideoCard(video, index))}
      </GridContainer>

      {selectedVideo && (
        <VideoDetail
          videoUrl={selectedVideo.src}
          title={selectedVideo.title}
          prompt={selectedVideo.prompt}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default ImageGrid;