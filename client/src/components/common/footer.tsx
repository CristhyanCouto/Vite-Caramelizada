import { Link } from 'react-router-dom'

//Icons
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub  } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



export default function Footer() {

    const year = new Date().getFullYear()
    const { t } = useTranslation()

  return (
    <div className='bg-zinc-900 flex justify-center'>
        <div className='grid grid-cols-3 justify-between items-center gap-20 p-5
        text-white'>
            <div>
                <h1 className='bg-white text-black rounded-full h-20 w-20 text-center
                items-center flex'>{t('footer.myOpinion')}</h1>
            </div>
            <div className='text-center'>
                <p>{t('footer.developedBy')} <Link to='/'
                className='hover:text-zinc-300'
                >Cristhyan Couto</Link></p>

                <p>&copy;{year} {t('footer.allRightsReserved')}</p>
            </div>
            <div className='flex gap-4 text-3xl'>
                <Link to='/' className='hover:text-zinc-300'><CiLinkedin /></Link>
                <Link to='/movies' className='hover:text-zinc-300'><FaInstagram /></Link>
                <Link to='/series' className='hover:text-zinc-300'><FaGithub /></Link>
            </div>
        </div>
    </div>
  )
}
