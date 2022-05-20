import './styles/Banner.css'
import logo from '../assets/leaf.png'

const Banner = () => {
    const title = 'La maison jungle';
    return (
        <div className="lmj-banner">
            <img src={logo} alt='feuille' className='lmj-logo' />
            <h1 className='lmj-title'> {title} </h1>
        </div>
    )
}

export default Banner;