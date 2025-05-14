import React, { useState } from 'react';
import styled from 'styled-components';
import VideoDetail from '../VideoDetail/VideoDetail';

const GridContainer = styled.div`
  column-count: 3;
  column-gap: 8px;
  padding: 40px;
  
  background: #fff;
`;

const VideoCard = styled.div`
  display: block;
  margin-bottom: 8px;
  break-inside: avoid;
  border-radius: 8px;
  background: #f1f1f1;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Video = styled.video`
  width: 100%;
  display: block;
  border-radius: 8px;
  object-fit: cover;
`;

const videos = [
  {
    src: "https://cdn.openai.com/sora/landing-page/md/001-6_20241112_0416_Googly-Eyed%20Jellyfish%20Encounter_remix_01jcg4vh70ek6s3f6dat5aephr.mp4.mp4",
    poster: "placeholder1.jpg",
    title: "Googly-Eyed Jellyfish Encounter",
    prompt: "Strong Remix: add googly eyes on jellyfish"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/011-20241206_1608_Alien%20Ship%20Emergence_storyboard_01jef74b47ezrvx8wh7f4bgn1d.mp4.mp4",
    poster: "placeholder2.jpg",
    title: "Alien Ship Emergence"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/020-00236_20241121_1411_Underwater%20Literary%20Escape_simple_compose_01jd8cenk1fvw8bbztzjm2dnhj%20(1).mp4.mp4",
    poster: "placeholder3.jpg",
    title: "Underwater Literary Escape"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/20241207_0406_Retro%20Futuristic%20Skies_simple_compose_01jegg67jtf8p8jf9m67ejzcdn.mp4.mp4",
    poster: "placeholder4.jpg",
    title: "Retro Futuristic Skies"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/012-7_20241115_1200_Twilight%20Beach%20Serenity_simple_compose_01jcrpjtgqfnc97f13pbp0zrff_prob4.mp4.mp4",
    poster: "placeholder5.jpg",
    title: "Twilight Beach Serenity"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/022-9_20241118_1544_Bioluminescent%20Forest%20Magic_storyboard_01jd0tkcegfw3ap6vt5rgrtyck.mp4.mp4",
    poster: "placeholder6.jpg",
    title: "Bioluminescent Forest Magic"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/013-20241205_1850_Loop%20Video_loop_01jecxzmtfesctgnq085gj8cab.mp4.mp4",
    poster: "placeholder8.jpg",
    title: "Loop Video"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/023-20241207_0303_Innocent%20Wonder_storyboard_01jegck6zpeh9vysdh219g32j5.mp4.mp4",
    poster: "placeholder9.jpg",
    title: "Innocent Wonder"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/005-20241120_1443_Claymation%20Friends_%20Adventure_simple_compose_01jd5vxtbyf3nve090cn5vm2m4%20(1).mp4.mp4",
    poster: "placeholder10.jpg",
    title: "Claymation Friends Adventure"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/014-9_20241122_1737_Whales%20Soaring%20Skyward_remix_01jdban9ykevctk8csk530rqmc.mp4.mp4",
    poster: "placeholder11.jpg",
    title: "Whales Soaring Skyward"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/024-20241207_0103_Bubble%20Dragon%20Delight_simple_compose_01jeg5pwjpf13vze4vpf1ybg3c.mp4.mp4",
    poster: "placeholder12.jpg",
    title: "Bubble Dragon Delight"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/006-20241023_2357_Adorable%20Bouncing%20Creature_remix_01jayn1pfge6xv4bhmvq6d36kd.mp4.mp4",
    poster: "placeholder13.jpg",
    title: "Adorable Bouncing Creature"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/015-20241204_0237_Alien%20in%20New%20York_simple_compose_01je8ky3ssfm5811cssg7y75h5.mp4.mp4",
    poster: "placeholder14.jpg",
    title: "Alien in New York"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/025-Hero_9_20241118_0123_Kraken%20Attack%20Chaos_storyboard_01jcz9a8f5fst9pkby0c78f8hr.mp4.mp4",
    poster: "placeholder15.jpg",
    title: "Kraken Attack Chaos"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/007-5_assets_task_01jdknjq68f8ssgn8bg4mw4m44_task_01jdknjq68f8ssgn8bg4mw4m44_genid_cc2c3e89-baf3-4fe5-99d3-29c0df8339cf_24_11_26_07_25_365626_videos_00000_169167_s.mp4.mp4",
    poster: "placeholder16.jpg",
    title: "Cosmic Journey"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/010-7_20241120_2300_Harmony%20with%20Nature_simple_compose_01jd6ras77f01s8we76f97xsvm%20(2).mp4.mp4",
    poster: "placeholder17.jpg",
    title: "Harmony with Nature"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/026-20241204_0107_Astronaut%20Dogs_%20Cosmic%20Journey_storyboard_01je8esjj7e0sap803j6fmh7kx.mp4.mp4",
    poster: "placeholder18.jpg",
    title: "Astronaut Dogs: Cosmic Journey"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/008-20241206_0349_Sunset%20Reflections_storyboard_01jedwttq5fscsggyeq6qt7341.mp4.mp4",
    poster: "placeholder19.jpg",
    title: "Sunset Reflections"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/017-6_20241118_2245_Mystical%20Swampland%20Serpent_remix_01jd1jqat6ewbv8hh423012vbr.mp4.mp4",
    poster: "placeholder20.jpg",
    title: "Mystical Swampland Serpent"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/027-Slack_20241122_1832_Bling%20Zoo%20Aquarium_storyboard_01jdbdv23rev4bk43p3apxprnh.mp4.mp4",
    poster: "placeholder21.jpg",
    title: "Bling Zoo Aquarium"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/009-9_20240924_1806_Eerie%20Submarine%20Ruins_storyboard_01j8kbe4htf0sarh18w85y61r5.mp4.mp4",
    poster: "placeholder22.jpg",
    title: "Eerie Submarine Ruins"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/018-20241206_0219_Japanese%20Winter%20Market_storyboard_01jedqnj4wfwh8cysja6sjqh26.mp4.mp4",
    poster: "placeholder23.jpg",
    title: "Japanese Winter Market"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/007-5_assets_task_01jdknjq68f8ssgn8bg4mw4m44_task_01jdknjq68f8ssgn8bg4mw4m44_genid_cc2c3e89-baf3-4fe5-99d3-29c0df8339cf_24_11_26_07_25_365626_videos_00000_169167_s.mp4.mp4",
    poster: "placeholder24.jpg",
    title: "Cosmic Journey 2"
  },
  {
    src: "https://cdn.openai.com/sora/landing-page/md/019-20241204_0022_Golden%20Festive%20Frolic_simple_compose_01je8c5v26fpj8jeydjp6gymy9.mp4.mp4",
    poster: "placeholder25.jpg",
    title: "Golden Festive Frolic"
  }
];

const ImageGrid: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
    prompt?: string;
  } | null>(null);

  return (
    <>
      <GridContainer>
        {videos.map((video, index) => (
          <VideoCard 
            key={index} 
            onClick={() => setSelectedVideo({
              src: video.src,
              title: video.title,
              prompt: video.prompt
            })}
          >
            <Video 
              src={video.src}
              autoPlay 
              loop 
              muted 
              poster={video.poster}
            />
          </VideoCard>
        ))}
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
