import React from 'react'
import styled from 'styled-components'
import twitter from '../../../public/twitter.png'
import instagram from '../../../public/instagram.png'
import discord from '../../../public/discord.png'
import youtube from '../../../public/youtube.png'
import whitepaper from '../../../public/whitepaper.png'
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'next/image'

const Section = styled.section`
    width: ${props => props.width}
    height: 80px;
	background-color: #000;
`

const SocialContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const LinkContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #000;
`
const LinkWrapper = styled(Link)`
	padding: 1rem;
	color: #fff;
`

const Social = ({width}) => {
	return(
		<Section width={width}>
			<SocialContainer>
				{[
					{
						icon: twitter,
						link: "https://twitter.com/paradoxrealms?s=21"
					},
					{
						icon: instagram,
						link: "https://www.instagram.com/paradoxrealm13/"
					},
					{
						icon: discord,
						link: "https://discord.gg/egEdrkR6"
					},
					{
						icon: whitepaper,
						link: "https://drive.google.com/file/d/1q3GLA9pYZXpfs563fjDqunvpMSu0pv_7/view?usp=sharing"
					},
					{
						icon: youtube,
						link: "https://www.youtube.com/c/OntheFlywithSly"
					},
				].map(({icon, link}, i) => (
					<IconButton href={link} key={i}>
						<Image src={icon} alt="social" />
					</IconButton>
				))}
			</SocialContainer>
			<LinkContainer>
				<LinkWrapper>
					Solana Art
				</LinkWrapper>
				<LinkWrapper>
					Digital Eyes
				</LinkWrapper>
			</LinkContainer>
		</Section>
	)
}

export default Social;