import React from 'react'
import { Container } from '../../GlobalStyle'
import Imbg from '../../images/footer.jpg'
import {
    FooterSection,
    FooterWrapper,
    Box1,
    Box2,
    Box3,
    Box4,
    Links,
    Top,
    Bottom

} from './FooterElements'

export const Footer = () => {
    return (
        <>
            <FooterSection>
                <Container>
                    <FooterWrapper>
                        <Box1>
                            <h3>ABOUT US</h3>
                            <img src={Imbg} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem. Nullam non magna vel nisi posuere bibendum vitae sed dui.</p>
                            <Links>Read More »</Links>
                        </Box1>
                        <Box2>
                            <h3>QUICK LINKS</h3>
                            <Links> <span>»</span> Lorem ipsum dolor sit</Links>
                            <Links> <span>»</span> Amet consectetur</Links>
                            <Links> <span>»</span> Praesent vel sem id</Links>
                            <Links> <span>»</span> Praesent vel sem id</Links>
                            <Links> <span>»</span> Curabitur hendrerit est</Links>
                            <Links> <span>»</span> Aliquam eget erat nec sapien</Links>
                            <Links> <span>»</span> Cras id augue nunc</Links>
                            <Links> <span>»</span> In nec justo non</Links>
                            <Links> <span>»</span> Vivamus mollis enim ut</Links>
                            <Links> <span>»</span> Curabitur hendrerit est</Links>
                            <Links> <span>»</span> Sed a nulla urna</Links>
                        </Box2>
                        <Box3>
                            <Top>
                                <h3>LATEST BLOG POSTS</h3>
                                <h4>Post Title</h4>
                                <p>Admin, domainname.com </p>
                                <p>Friday, 6th April 2000</p>
                                <p>Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.</p>
                                <Links>Read More »</Links>
                            </Top>
                            <Bottom>
                                <h4>Post Title</h4>
                                <p>Admin, domainname.com </p>
                                <p>Friday, 6th April 2000</p>
                                <p>Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.</p>
                                <Links>Read More »</Links>
                            </Bottom>
                        </Box3>
                        <Box4>
                            <h3>Contact Us</h3>
                            <form action="">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="text" placeholder="Subject"/>
                                <textarea rows="8" placeholder="Massage">
                                </textarea>
                                <Links><button>Submit</button></Links>
                            </form>
                        </Box4>
                    </FooterWrapper>
                </Container>
            </FooterSection>

        </>
    )
}
