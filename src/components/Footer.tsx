import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 4rem 2rem 2rem;
  color: #333;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: #000;
    }

    .external-link {
      color: #666;
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }
`;

const BottomSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: #666;
    transition: color 0.2s;
    
    &:hover {
      color: #000;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Copyright = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #000;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <SectionTitle>Research</SectionTitle>
          <FooterList>
            <li><a href="/research-residency">Research Residency</a></li>
          </FooterList>

          <SectionTitle>Latest Advancements</SectionTitle>
          <FooterList>
            <li><a href="/openai-o3">OpenAI o3</a></li>
            <li><a href="/openai-o4-mini">OpenAI o4-mini</a></li>
            <li><a href="/gpt-4o">GPT-4o</a></li>
            <li><a href="/gpt-4o-mini">GPT-4o mini</a></li>
            <li><a href="/sora">Sora</a></li>
          </FooterList>

          <SectionTitle>Safety</SectionTitle>
          <FooterList>
            <li><a href="/safety-approach">Safety Approach</a></li>
            <li><a href="/security-privacy">Security & Privacy</a></li>
            <li><a href="/trust-transparency">Trust & Transparency</a></li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>ChatGPT</SectionTitle>
          <FooterList>
            <li><a href="/explore-chatgpt">Explore ChatGPT</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/enterprise">Enterprise</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/download">Download</a></li>
          </FooterList>

          <SectionTitle>Sora</SectionTitle>
          <FooterList>
            <li><a href="/sora-overview">Sora Overview</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/sora-pricing">Pricing</a></li>
            <li>
              <a href="/sora-login" target="_blank" rel="noopener noreferrer">
                Sora log in
                <span className="external-link">↗</span>
              </a>
            </li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>API Platform</SectionTitle>
          <FooterList>
            <li><a href="/platform-overview">Platform Overview</a></li>
            <li><a href="/api-pricing">Pricing</a></li>
            <li>
              <a href="/api-login" target="_blank" rel="noopener noreferrer">
                API log in
                <span className="external-link">↗</span>
              </a>
            </li>
            <li>
              <a href="/documentation" target="_blank" rel="noopener noreferrer">
                Documentation
                <span className="external-link">↗</span>
              </a>
            </li>
            <li>
              <a href="/developer-forum" target="_blank" rel="noopener noreferrer">
                Developer Forum
                <span className="external-link">↗</span>
              </a>
            </li>
          </FooterList>

          <SectionTitle>For Business</SectionTitle>
          <FooterList>
            <li><a href="/overview">Overview</a></li>
          </FooterList>

          <SectionTitle>Company</SectionTitle>
          <FooterList>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/our-charter">Our Charter</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/brand">Brand</a></li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>More</SectionTitle>
          <FooterList>
            <li><a href="/news">News</a></li>
            <li><a href="/stories">Stories</a></li>
            <li>
              <a href="/help-center" target="_blank" rel="noopener noreferrer">
                Help Center
                <span className="external-link">↗</span>
              </a>
            </li>
          </FooterList>

          <SectionTitle>Terms & Policies</SectionTitle>
          <FooterList>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/other-policies">Other Policies</a></li>
          </FooterList>
        </FooterSection>
      </FooterGrid>

      <BottomSection>
        <SocialLinks>
          <a href="https://twitter.com/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://youtube.com/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://github.com/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="https://discord.gg/openai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </SocialLinks>

        <Copyright>
          OpenAI © 2015-2025
        </Copyright>

        <LanguageSelector>
          <a href="/language/english">English</a>
          <a href="/language/united-states">United States</a>
        </LanguageSelector>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer; 