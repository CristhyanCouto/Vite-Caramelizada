import { Link } from 'react-router-dom'

//Icons
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub  } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



export default function Footer() {

    const year = new Date().getFullYear()
    const { t } = useTranslation()

  return (
    <div className='bg-black flex justify-center'>
        <div className='grid grid-cols-3 justify-between items-center gap-20 p-5
        text-white'>
            <div>
                <h1 className='bg-white text-black rounded-full h-20 w-20 text-center
                items-center flex'>{t('footer.myOpinion')}</h1>
            </div>
            <div className='text-center'>
                <p>{t('footer.developedBy')} <Link to='https://www.cristhyancouto.com/'
                target='_blank' rel='noreferrer'
                className='hover:text-zinc-300'
                >Cristhyan Couto</Link></p>

                <p>&copy;{year} {t('footer.allRightsReserved')}</p>
            </div>
            <div className='flex gap-4 text-3xl'>
                <Link target='_blank' rel='noreferrer' to='https://www.linkedin.com/in/cristhyancouto/' className='hover:text-zinc-300'><CiLinkedin /></Link>
                <Link target='_blank' rel='noreferrer' to='https://www.instagram.com/cristhyancouto/' className='hover:text-zinc-300'><FaInstagram /></Link>
                <Link target='_blank' rel='noreferrer' to='https://github.com/CristhyanCouto' className='hover:text-zinc-300'><FaGithub /></Link>
            </div>
        </div>
    </div>
  )
}
