import styles from './header.module.scss';
import React, { useState } from 'react';
const Header = () => {
 
    const [selectedOption, setSelectedOption] = useState('Mask Option');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <>

            <nav class={`${styles.wrapper} navbar navbar-expand-lg navbar-dark bg-dark`}>
                <a className="navbar-brand" href="#"> <h6>Eligibility Test-2023</h6></a>
                <div className={`${styles.container} collapse navbar-collapse`} id="navbarSupportedContent"

                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <p>Question Paper</p></a>
                        </li>
                        <li>
                            <a>
                                <div className={`${styles.dropdow} dropdown`}>
                                    <button
                                        onClick={(e) => e.currentTarget.nextSibling.classList.toggle('show')}
                                        className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    >
                                        <span><i class="bi bi-gear-fill"></i></span> Tools
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#"
                                            onClick={(e) => {
                                                handleOptionClick('Mask Option');
                                                e.currentTarget.parentElement.parentElement.classList.toggle('show');
                                            }}
                                        >{selectedOption}</a></li>
                                    </div>
                                </div>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <p>Instructions</p></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Header;