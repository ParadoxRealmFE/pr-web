import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'next/image';
import twitter from '../../../public/twitter.png';
import instagram from '../../../public/instagram.png';
import discord from '../../../public/discord.png';
import youtube from '../../../public/youtube.png';
import github from '../../../public/github.png';
import solana from '../../../public/solana.png';
import phantom from '../../../public/phantom.png';
import whitepaper from '../../../public/whitepaper.png';

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

const Social = ({ width }) => (
  <Section width={width}>
    <SocialContainer>
      {[
				  {
				    icon: twitter,
				    link: 'https://twitter.com/paradoxrealms?s=21',
				  },
				  {
				    icon: instagram,
				    link: 'https://www.instagram.com/paradoxrealm13/',
				  },
				  {
				    icon: discord,
				    link: 'https://discord.gg/egEdrkR6',
				  },
				  {
				    icon: whitepaper,
				    link: 'https://drive.google.com/file/d/1q3GLA9pYZXpfs563fjDqunvpMSu0pv_7/view?usp=sharing',
				  },
				  {
				    icon: youtube,
				    link: 'https://www.youtube.com/c/OntheFlywithSly',
				  },
				  {
				    icon: github,
				    link: 'https://github.com/Paradoxrealm',
				  },
				  {
				    icon: twitter,
				    link: 'https://twitter.com/merkleseeds',
				  },
      ].map(({ icon, link }, i) => (
        <IconButton href={link} key={i}>
          <Image src={icon} alt="social" priority/>
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
        <Image src={solana} alt="solana" layout="responsive" priority/>
      </ImageWrapper>
			<PhantomWrapper href="https://phantom.app/" rel="noopener" target="_blank">
				<Image src={phantom} alt="phantom wallet"  priority/>
			</PhantomWrapper>
    </LinkContainer>
  </Section>
);

export default Social;
