import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" rel="noopener"> <BsLinkedin/> </a>
        <a href="https://github.com" rel="noopener"> <FaGithub/> </a>
        <a href="https://facebook.com" rel="noopener"> <BsFacebook/> </a>
    </div>
  )
}

export default HeaderSocial