import './Header.css'

const Header = ({src, alt, title}) => {
    return (
        <header>
            <figure>
                <img src={src} alt={alt} />
            </figure>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;