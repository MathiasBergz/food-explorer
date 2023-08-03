import { useState } from "react";

import { Container, Menu, Mainpage, Homepage, MenuSection, MenuOptions, MenuHeader, Section, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { FoodList } from "../../components/Foodlist";

import { FiX, FiSearch } from "react-icons/fi";

import FoodImage from "../../assets/Fruits.png";
import Dish1 from "../../assets/image 2.png";

export function Home() {
    const [showModal, setShowModal] = useState(false);
    const user = {isAdmin: true};
    
    return(
        <Container>
            {
                showModal ? (
                    <Menu>
                        <MenuHeader> 
                            <a href="#" onClick={() => setShowModal(false)}><FiX/>Menu</a>
                        </MenuHeader>

                        <MenuSection>
                            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" type="text"/>
                        </MenuSection>
                        
                        {   
                            user.isAdmin ? (
                                <MenuOptions>
                                    <li>
                                        <a>Novo prato</a>
                                    </li>
                                    <li>
                                        <a>Sair</a>
                                    </li>
                                </MenuOptions>
                            ) : (
                                <MenuOptions>
                                    <li>
                                        <a>Sair</a>
                                    </li>
                                </MenuOptions>
                            )
                        }

                        <Footer/>
                    </Menu>
                ) : (
                    <Mainpage>
                        {   
                            user.isAdmin ? (
                                <Homepage>
                                    <Header onClick={() => setShowModal(true)} isAdmin={user.isAdmin}/>
                                    <Section>
                                        <img src={FoodImage} alt="Imagem de frutas" />
                                        <div>
                                            <h2>Sabores inigualáveis</h2>
                                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                                        </div>
                                    </Section>
                                    <Content>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                    </Content>
                                    <Footer/>
                                </Homepage>
                            ) : (
                                <Homepage>
                                    <Header onClick={() => setShowModal(true)} isAdmin={user.isAdmin}/>
                                    <Section>
                                        <img src={FoodImage} alt="Imagem de frutas" />
                                        <div>
                                            <h2>Sabores inigualáveis</h2>
                                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                                        </div>
                                    </Section>
                                    <Content>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                        <p>Refeições</p>
                                        <ul>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>
                                            <FoodList image={Dish1} title="Salada Ravanello" value="49,97" isAdmin={user.isAdmin}/>                                            
                                        </ul>
                                    </Content>
                                    <Footer/>
                                </Homepage>
                            )
                        }
                    </Mainpage>
                )
            }
        </Container>
    )
}