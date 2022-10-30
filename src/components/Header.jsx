import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <>
            <Navbar bg="light" >
                <Container>
                    <Navbar.Brand href="/">
                        <p></p>
                        <img
                            src="https://static.flybondi.com/f/77475/x/22b78b68f4/logo.svg"
                            width="100"
                            height="30"
                            className="d-inline-block align-center"
                            alt="Flybondi logo"
                        />
                    </Navbar.Brand>

                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Header;