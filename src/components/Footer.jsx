import React from 'react'


const Footer = () => {

    const footerLinks = (element) => {
        const allfooterLinks = document.querySelectorAll(".footerlinks");
        switch (element) {
            case 0:
                allfooterLinks.forEach((item, index) =>
                    index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            case 1:
                allfooterLinks.forEach((item, index) =>
                    index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            case 2:
                allfooterLinks.forEach((item, index) =>
                    index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            case 3:
                allfooterLinks.forEach((item, index) =>
                    index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            case 4:
                allfooterLinks.forEach((item, index) =>
                    index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            case 5:
                allfooterLinks.forEach((item, index) =>
                    index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                );
                break;
            default:
                allfooterLinks.forEach((item) => item.style.opacity = 1);
                break;
        }
    }

    const linksBackToNormal = () => {
        const allfooterLinks = document.querySelectorAll(".footerlinks");
        allfooterLinks.forEach((item) => (item.style.opacity = 1));
    }

    return (
        <>
            <footer>
                <h1>
                    Let's
                    <br />
                    #ConnectOnCutting?
                </h1>
                <aside onMouseLeave={linksBackToNormal}>
                    <a href="/" className="footerlinks" onMouseOver={() => footerLinks(0)} data-cursorpointermini={true}>Home</a>
                    <a href="/story" className="footerlinks" onMouseOver={() => footerLinks(1)} data-cursorpointermini={true}>Story</a>
                    <a href="/media" className="footerlinks" onMouseOver={() => footerLinks(2)} data-cursorpointermini={true}>Media</a>
                    <a href="/story" className="footerlinks" onMouseOver={() => footerLinks(3)} data-cursorpointermini={true}>Story</a>
                    <a href="/event" className="footerlinks" onMouseOver={() => footerLinks(4)} data-cursorpointermini={true}>event</a>
                    <a href="/chaiwalacares" className="footerlinks" onMouseOver={() => footerLinks(5)} data-cursorpointermini={true}>Chai Wala Cares</a>
                </aside>
                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Franchise</h5>
                    <a href="mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href="tel: +91722905222">+91 722905222</a>
                </div>
                <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY</p>
            </footer>
            <div className="footer"></div>
        </>
    )
}

export default Footer
