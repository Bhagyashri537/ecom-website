
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header = () => {
    return (
        <div>
            <ul>
                <Link to="/home">
                <li>Home</li>
                </Link>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    )
}
export default Header

