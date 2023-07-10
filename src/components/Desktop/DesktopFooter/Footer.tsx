import React, { forwardRef } from 'react';
import { Container, Footer_links, Footer_box, Footer_Container, Instagram_logo, Logo_box } from "./styles"

const DesktopFooter = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return(
        <Container ref={ref}>
            <Footer_Container>
                <Footer_box>
                    <Footer_links href="#"></Footer_links>
                </Footer_box>
                <Footer_box>
                    <Footer_links href="https://www.instagram.com/faten_haj_issa/">
                        <Logo_box>
                            <Instagram_logo/>
                        </Logo_box>
                    </Footer_links>
                </Footer_box>
                <Footer_box>
                    <Footer_links href="#"></Footer_links>
                </Footer_box>
            </Footer_Container>
        </Container>

    )
});
export default DesktopFooter;