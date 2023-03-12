import React from 'react';


const date = new Date();

const Footer = () => {
    return (
        <footer>
            <p>Copyright AZEDINE {date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;
