import { Admin, Container, User } from "./styles";

import { FiMenu } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import LogoImg1 from "../../assets/Logo.png"

export function Header({ isAdmin, ...rest }) {
    return(
        <Container>
            {
                isAdmin ? (
                    <Admin>
                        <a href="#" {...rest}>
                            <FiMenu/>
                        </a>
                        <div>
                            <img src={LogoImg1} alt="Food Explorer logo" />
                            <p>food explorer</p>
                            <span>admin</span>
                        </div>
                    </Admin>
                ) : (
                    <User>
                        <a href="#" {...rest}>
                            <FiMenu/>
                        </a>
                        <div>
                            <img src={LogoImg1} alt="Food Explorer logo" />
                            <p>food explorer</p>
                        </div>
                        <label>
                            <a href="#">
                                <PiReceipt/>
                            </a>
                            <p>0</p>
                        </label>
                    </User>
                )
            }
        </Container>
    )
}