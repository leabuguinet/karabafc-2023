import React from 'react'
import { Link } from 'gatsby';
import "../styles/base.scss"
import "../styles/footer.scss"

import IgIcon from '../assets/svg/icon-instagram.inline.svg';
import FbIcon from '../assets/svg/icon-facebook.inline.svg';
import BcIcon from "../assets/svg/icon-bandcamp.inline.svg"
import YtIcon from '../assets/svg/icon-youtube.inline.svg';


export default function Footer() {

  return (

    <footer>

      <div className='icons-list'>
        <a aria-label="Instagram" href='https://instagram.com/karabafc?igshid=YmMyMTA2M2Y='><IgIcon /></a>
        <a aria-label="Facebook" href='https://www.facebook.com/KARABAFC'><FbIcon /></a>
        <a aria-label="Bandcamp" href='https://karabafc.bandcamp.com/'><BcIcon /></a>
        <a aria-label="Youtube" href='https://www.youtube.com/channel/UCII3nLe19ZzyuZ0ZxciJZuA?app=desktop&cbrd=1'><YtIcon /></a>
      </div>

      <span>
        {new Date().getFullYear()} • <Link to="/mentions">Mentions</Link>
      </span>

    </footer>

  )
}
