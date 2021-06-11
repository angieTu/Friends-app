import React from 'react';

import Text from './primitives/Text';
import Link from './primitives/Link';
import Container from './primitives/Container';

import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const Footer = () => {

    const yearCopyright = new Date().getFullYear();

    return (
        <footer className='footer'>
            <Text className="footer-content">
                © {yearCopyright}. Designed and built by Angie Turne. All rights reserved. Data provided by
                <Link target="_blank" href="https://documenter.getpostman.com/view/12618304/TW6wJoZQ">
                    API Friends by Angie Turne
                </Link>
            </Text>
            <Container className="contact-details">
                <Link target="_blank" href="https://github.com/angieTu">
                    <GithubSquare
                        className={`footer-icon github-icon`}
                        aria-hidden="true"
                        aria-label="GitHub"
                    />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/angie-tu/">
                    <LinkedinSquare
                        className={`footer-icon`}
                        target="_blank"
                        aria-hidden="true"
                        aria-label="LinkedIn"
                    />
                </Link>
            </Container>
        </footer>
    )
}

export default Footer;