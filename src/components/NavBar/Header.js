import Logo from './Logo.js';
import Search from './Search.js';
import './NavBar.css';

const NavBar = ({onSearchChange}) => {

    return (

        <header className="bg-dark">
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="col-2 w-auto">
                        <a href="#" className="text-decoration-none">
                            <Logo />
                        </a>
                    </div>
                    <div className="col-7 px-0">
                        <ul className="d-flex align-items-center p-0 m-0">
                            <li v-for="i in navElement" className="mx-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <p className="mb-0"> Menù </p>
                                </a>
                            </li>
                            <li v-for="i in navElement" className="mx-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <p className="mb-0"> Contatti </p>
                                </a>
                            </li>
                            <li v-for="i in navElement" className="mx-2">
                                <a href="#" className="text-white text-decoration-none">
                                    <p className="mb-0"> Preferiti </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 d-flex justify-content-end">
                        <Search onSearchChange={onSearchChange}/>
                    </div>
                    <div v-if="store.firstName" className="col-1 profile d-flex align-items-center">                    
                        <select name="manu" id="manu">
                            <option>Gestisci i profili</option>
                            <option>Trasferisci profilo</option>
                            <option>Account</option>
                            <option>Centro Assistenza</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default NavBar;