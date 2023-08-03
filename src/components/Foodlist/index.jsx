import { Container, User, Admin } from "./styles";
import { Button } from "../Button";

import { FiHeart, FiChevronRight, FiPlus, FiMinus } from "react-icons/fi";
import { PiPencilSimpleLight } from "react-icons/pi"

export function FoodList({ value, title, image, isAdmin }) {
    return(
        <Container>
            {
                isAdmin ? (
                    <Admin>
                        <button>
                            <PiPencilSimpleLight/>
                        </button>
                        <img src={image} alt="Imagem de um prato de comida" />
                        <div>
                            <a href="#">{title}<FiChevronRight/></a>
                            <span>R$ {value}</span>
                        </div>
                    </Admin>
                ) : (
                    <User>
                        <button>
                            <FiHeart/>
                        </button>
                        <img src={image} alt="Imagem de um prato de comida" />
                        <a href="#">{title}<FiChevronRight/></a>
                        <span>R$ {value}</span>

                        <div>
                            <button>
                                <FiMinus/>
                            </button>
                            <p>01</p>
                            <button>
                                <FiPlus/>
                            </button>
                        </div>
                        <Button title="Inserir"/>
                    </User>
                )
            }
        
        </Container>
    )
} 