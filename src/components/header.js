import { Navbar, NavbarBrand } from 'reactstrap';
import {useHistory } from 'react-router-dom';

const Header = () => {
	const history=useHistory();
	const handleClick=()=>{
		history.push('/compare');
	}
	return (
		<header >
			<Navbar color='primary' dark>
				<NavbarBrand href='./'>GitHub API Playground</NavbarBrand>
			    <iframe src="https://ghbtns.com/github-btn.html?user=adityabisoi&repo=github-rest-api-v3&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                <iframe src="https://ghbtns.com/github-btn.html?user=adityabisoi&repo=github-rest-api-v3&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
				<button className="btn btn-success" onClick={handleClick}>Compare Users</button>
			</Navbar>
		</header>
	);
};

export default Header;