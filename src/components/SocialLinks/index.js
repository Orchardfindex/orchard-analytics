import React from 'react'
import styled from 'styled-components'

import Link from '../Link'
import TwitterIcon from '../Icons/TwitterIcon'
import DiscordIcon from '../Icons/DiscordIcon'
import MediumIcon from '../Icons/MediumIcon'
import useTheme from '../../hooks/useTheme'
import Telegram from '../Icons/Telegram'

const StyledSocialLinks = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`

const StyledIcon = styled.div`
  margin-right: 12px;
`

const SocialLinks = () => {
  const theme = useTheme()
  return (
    <StyledSocialLinks>
      <Link href='https://twitter.com/Orchardfindex' external>
        <StyledIcon>
          <TwitterIcon height={16} width={16} color={theme.subText} />
        </StyledIcon>
      </Link>

      <Link href='https://discord.com/channels/953321210110939199/953321210710720594' external>
        <StyledIcon>
          <DiscordIcon height={16} width={16} color={theme.subText} />
        </StyledIcon>
      </Link>

      <Link href='https://medium.com/@orchardfindex' external>
        <StyledIcon>
          <MediumIcon height={16} width={16} color={theme.subText} />
        </StyledIcon>
      </Link>
    </StyledSocialLinks>
  )
}

export default SocialLinks
