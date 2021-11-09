import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import twitter from '../../../public/twitter.png?trace';
import instagram from '../../../public/instagram.png?trace';
import discord from '../../../public/discord.png?trace';
import youtube from '../../../public/youtube.png?trace';
import github from '../../../public/github.png?trace';
import solana from '../../../public/solana.png?trace';
import phantom from '../../../public/phantom.png?trace';
import whitepaper from '../../../public/whitepaper.png?trace';

const Section = styled.section`
	width: ${(props) => `${props.width}px`};
    height: 80px;
	background-color: #000;
`;

const SocialContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	flex-wrap: wrap;
`;

const LinkContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
`;
const LinkWrapper = styled(Link)`
	padding: 1rem;
	color: #fff;
`;

const ImageWrapper = styled(Link)`
	position: responsive;
	height: 75px;
	width: 75px;
	padding: 1rem;
	color: #fff;
`;

const PhantomWrapper = styled(IconButton)`
	position: responsive;
	height: 75px;
	width: 75px;
	padding: 1rem;
	color: #fff;
`;

const ImageContainer = styled.img`
  height: 100%;
  width: 100%
`

const Social = ({ width }) => (
  <Section width={width}>
    <SocialContainer>
      {[
				  {
				    icon: twitter.src,
				    link: 'https://twitter.com/paradoxrealms?s=21',
				  },
				  {
				    icon: instagram.src,
				    link: 'https://www.instagram.com/paradoxrealm13/',
				  },
				  {
				    icon: discord.src,
				    link: 'https://discord.gg/egEdrkR6',
				  },
				  {
				    icon: whitepaper.src,
				    link: 'https://drive.google.com/file/d/1q3GLA9pYZXpfs563fjDqunvpMSu0pv_7/view?usp=sharing',
				  },
				  {
				    icon: youtube.src,
				    link: 'https://www.youtube.com/channel/UCPts6RFfU1ivHqpISeleebw',
				  },
				  {
				    icon: github.src,
				    link: 'https://github.com/Paradoxrealm',
				  },
				  {
				    icon: twitter.src,
				    link: 'https://twitter.com/merkleseeds',
				  },
      ].map(({ icon, link }, i) => (
        <IconButton href={link} key={i}>
          <ImageContainer src={icon} alt="social"/>
        </IconButton>
      ))}
    </SocialContainer>
    <LinkContainer>
      <LinkWrapper href="https://solanart.io/" rel="noopener" target="_blank">
        Solana Art
      </LinkWrapper>
      <LinkWrapper href="https://digitaleyes.market/" rel="noopener" target="_blank">
        Digital Eyes
      </LinkWrapper>
    </LinkContainer>
    <LinkContainer>
      <ImageWrapper>
        <ImageContainer src={solana.src} alt="solana"/>
      </ImageWrapper>
			<PhantomWrapper href="https://phantom.app/" rel="noopener" target="_blank">
				<ImageContainer src={phantom.src} alt="phantom wallet" />
			</PhantomWrapper>
    </LinkContainer>
  </Section>
);

export default Social;
