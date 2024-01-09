import '../style/Navbar_style.css';
const links = [
    {title: "Home", id: 1, url: "#"},
    {title: "Sobre mim", id: 2, url: "#"},
    {title: "Meus Projectos", id: 3, url: "#"},
    {title: "Contacte-me", id: 4, url: "#"},
]

const renderListLinks = links.map(links => 
    <li key={links.id}>
        <a href={links.url} style={{textDecoration: 'none', color: '#fff'}}>{links.title}</a>
    </li>
)

export default function Navbar() {
    return (
            <ul className='nav' >{renderListLinks}</ul>
    )
}
