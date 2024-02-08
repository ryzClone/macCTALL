import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/layout.css"
import Instagram from "../photo/png/layout/instagram.png"
import Facebook from "../photo/png/layout/facebook.png"
import Telegram from "../photo/png/layout/telegram.png"
import  Search from "../photo/png/layout/search.png";
import Basket from "../photo/png/layout/basket.png";
import Logo from "../photo/png/layout/logo.png";
import Close from "../photo/png/layout/close.png";
import Plus from "../photo/png/layout/plus.png";
import Catalog from "../photo/png/layout/catalog-fon.png";
import CatalogBack from "../photo/png/layout/catalog-back.png";
import WhitePlus from "../photo/png/layout/white-plus.png";
import CatalogImg from "../photo/png/layout/catalog-img.png";
import ArmaturaImg from "../photo/png/layout/armatura-img.png";
import Footer from "../photo/img/footer.png"
import CarbonBlue from "../photo/png/About/map/carbon-blue.png";
import { Users } from "../DataBase/User";
import { Items } from "../DataBase/Korzina";

class Layout extends React.Component{
    constructor() {
        super();
        this.state = {
            count: 1,
            catalog:true,
            CatalogImg: CatalogImg,
          };
        this.Arrays = [
            WhitePlus, 
            CatalogImg,
            CatalogBack,
          ];
      }

    componentDidMount() {
        window.addEventListener('click', this.handleGlobalClick);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.handleGlobalClick);
    }
    
    handleGlobalClick = () => {
        if(window.location.pathname === "/"){
            document.getElementById('catalog').style.display = "block";
        }else{
            document.getElementById('catalog').style.display = "none";
        }
    };

    handleHamburgerClick = () => {
        const fixedHamburger = document.querySelector('.layout-nav-fixed-hamburger');
        const computedStyle = window.getComputedStyle(fixedHamburger);
    
        fixedHamburger.style.display = computedStyle.display === 'none' ? 'flex' : 'none';
    
    };
    
    blockCardBodyClick = (Users) => {
        const catalogItemCardBodyDiv = document.getElementById('catalogDiv');

        const catalogItemCardBody = document.createElement('div');
        const catalogItemCardBodyTitle = document.createElement('div');
        const catalogItemCardBodyText = document.createElement('div');
        const catalogItemCardBodyBtn = document.createElement('div');
        const catalogItemCardBodyImg = document.createElement('div');
        const catalogItemCardBodyImgItem = document.createElement('img');

        catalogItemCardBody.className="catalog-item-card-body";
        catalogItemCardBodyTitle.className="catalog-item-card-body-title";
        catalogItemCardBodyText.className="catalog-item-card-body-text";
        catalogItemCardBodyBtn.className="catalog-item-card-body-btn";
        catalogItemCardBodyImg.className="catalog-item-card-body-img";

        catalogItemCardBodyTitle.textContent=Users.Name;
        catalogItemCardBodyText.textContent=Users.Summa;
        catalogItemCardBodyBtn.textContent=Users.Buttun;

        catalogItemCardBodyImgItem.src = Users.Img; 
        catalogItemCardBodyImgItem.alt = "Armatura rasmi"; 
        catalogItemCardBodyImgItem.style.width = "170px";
        
        catalogItemCardBodyImg.appendChild(catalogItemCardBodyImgItem);
        catalogItemCardBody.appendChild(catalogItemCardBodyTitle);
        catalogItemCardBody.appendChild(catalogItemCardBodyText);
        catalogItemCardBody.appendChild(catalogItemCardBodyBtn);
        catalogItemCardBody.appendChild(catalogItemCardBodyImg);
        catalogItemCardBodyDiv.appendChild(catalogItemCardBody);
    }

    AddCard = () => {
        const fixedHamburger = document.getElementById("demo");
        fixedHamburger.style.display = "flex";
        document.querySelector('.addClickBody').style.display = "block";
    };

    AddCardSet = () => {
       document.getElementById("demo").style.display="none";
       document.getElementById("demo1").style.display="flex";

        for (let i = 0; i < Users.length; i++) {
            this.blockCardBodyClick(Users[i]);
        }
        document.getElementById('Outleet').style.display="none";
    };

    DeleteCardSet = () => {
        document.getElementById("demo").style.display="flex";
        document.getElementById("demo1").style.display="none";
        const userContainers = document.querySelectorAll('#catalogDiv .catalog-item-card-body');

        for (let i = 0; i < userContainers.length; i++) {
            userContainers[i].remove()
        }
        
        document.getElementById('Outleet').style.display="block";
        document.querySelector('.addClickBody').style.display = "none";
    }

    updateCatalogImg = () => {
        this.setState({ CatalogImg: this.Arrays[this.state.count]});
    };
    
    AddCount = () => {
        if (this.state.count <= 1) {
          const updatedCount = this.state.count + 1;
          this.setState({ count: updatedCount }, this.updateCatalogImg);
        }
    };
    
    MinCount = () => {
        if (this.state.count > 0) {
          const updatedCount = this.state.count - 1;
          this.setState({ count: updatedCount }, this.updateCatalogImg);
        }
    };

    render(){
        const Summa = 0;
        return(
            <div className="layout-main">

                <div className="layout-container">
                    
                    <nav className="layout-nav">

                        <div className="layout-nav-top">

                            <ul className="layout-nav-top-left">
                                <li>
                                    <Link to="/" className="color">О компании</Link>
                                </li>
                                <li>
                                    <Link to="/order" className="color">Как заказать</Link>
                                </li>
                                <li>
                                    <Link to="/delivery" className="color">Достава</Link>
                                </li>
                                <li>
                                    <Link to="/payment" className="color">Оплата</Link>
                                </li>
                                <li>
                                    <Link to="/reviews" className="color">Отзывы</Link>
                                </li>
                                <li>
                                    <Link to="/contacts" className="color">Контакты</Link>
                                </li>
                            </ul>

                            <ul className="layout-nav-top-right">

                                <Link to="https://www.instagram.com/cristiano" className="color"><img src={Instagram} alt="" /></Link>
                                <Link to="https://www.facebook.com/Cristiano" className="color"><img src={Facebook} alt="" /></Link>
                                <Link to="https://t.me/jumayevvvv" className="color"><img src={Telegram} alt="" /></Link>

                            </ul>

                        </div>

                        <div className="hr"/>

                        <ul className="layout-nav-bottom">


                            <div className="layout-nav-bottom-hamburger" onClick={this.handleHamburgerClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="layout-nav-fixed-hamburger">

                                <div className="layout-nav-fixed-hamburger-logo">

                                    <img src={Logo} alt="" />

                                    <div onClick={this.handleHamburgerClick} style={{cursor:"pointer"}}>
                                        <img src={Close} alt="" />
                                    </div>

                                </div>

                                <div className="layout-nav-fixed-hamburger-list">

                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Арматура</p>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Катанка</p>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Угалок стальной</p>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Швеллер</p>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Труба ВПГ</p>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div className="layout-nav-fixed-hamburger-list-item">
                                        <p>Труба профильная</p>
                                        <img src={Plus} alt="" />
                                    </div>

                                </div>

                            </div>


                            <li className="layout-nav-bottom-number">
                                <div className="layout-nav-bottom-number-text">Пн-Пт: 9:00 до 19:00</div>
                                <div className="layout-nav-bottom-number-title">+998 (93) 777-77-77</div>
                            </li>


                            <li className="layout-nav-bottom-search">
                                <input type="text" className="input" placeholder="Поиск по сайту"/>
                                <img src={Search} alt="" className="png"/>
                            </li>

                            <li className="layout-nav-bottom-basket">

                                <Link to="/basket" className="color"><img src={Basket} alt="" /></Link>

                                <div className="layout-nav-bottom-basket-number">
                                    <div className="layout-nav-bottom-basket-number-title">Ваша корзина</div>
                                    <div className="layout-nav-bottom-basket-number-text">
                                        {Items.reduce((accumulator, currentItem) => accumulator + (currentItem.Price * currentItem.Quantity),0)} $
                                    </div>
                                </div>

                            </li>

                        </ul>
                    </nav>

                    <div className="catalog" id="catalog">

                        <div className="catalog-slide">

                            <div className="catalog-fon">

                                <div className="catalog-img">
                                    <img src={CatalogBack} alt="" style={{width:"100%",height:"320px"}} />
                                </div>

                                <div className="catalog-img-fon">
                                    <img src={Catalog} alt="" style={{width:"100%",height:"320px"}}/>
                                </div>

                            </div>

                            <div className="catalog-text">

                                <div className="catalog-text-title">
                                     Специальные цены <br /> на катанку
                                </div>

                                <div className="catalog-text-subtitle">
                                    Только до конца снижение цен на весь <br /> ассортимент катанки
                                </div>

                                <div className="catalog-btn">

                                <div className="catalog-btn-text" onClick={() => {
                                    this.AddCard();
                                    this.setState({ catalog: true });
                                }}>
                                    В каталог
                                </div>
                                    <div className="catalog-btn-png">
                                        <img src={WhitePlus} alt="" />
                                    </div>

                                </div>

                            </div>

                            <div className="catalog-right-img">

                                <div className="catalog-right-img-item">

                                    <img src={this.state.CatalogImg} alt="" className="catalog-right-img-item-icon"/>
                                    

                                    <div className="catalog-right-img-slides">

                                        <div className="catalog-right-img-slides-item" onClick={this.MinCount}>
                                            {"<"}
                                        </div>

                                        <div className="catalog-right-img-slides-item" onClick={this.AddCount}>
                                            {">"}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="catalog-item">

                            <div className="catalog-item-card">

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>

                                <div className="catalog-item-card-body">
                                    <div className="catalog-item-card-body-title">Арматура</div>
                                    <div className="catalog-item-card-body-text">от 14руб/м</div>
                                    <div className="catalog-item-card-body-btn">{"+"}</div>
                                    <div className="catalog-item-card-body-img">
                                        <img src={ArmaturaImg} alt="" style={{width:"170px"}}/>
                                    </div>
                                </div>
                                
                            </div>

                            <div id="catalogDiv">
                            </div>

                            <div id="demo" className="addClick" onClick={()=> {
                                this.AddCardSet();
                            }} style={{display:"none"}}>
                                <div className="addClickBody">
                                     Посмотреть все
                                </div>
                            </div>

                            <div id="demo1" className="addClick" onClick={()=> {
                                this.DeleteCardSet();
                            }} style={{display:"none"}}>
                                <div className="addClickBody">
                                    закрыть
                                </div>
                            </div>

                        </div>

                    </div>

                    <div id="Outleet">
                        <Outlet />
                    </div>

                </div>

                <div className="footer">

                    <div className="footer-body">

                        <div className="footer-left">

                            <div className="footer-left-1">

                                <div className="footer-left-1-title">ООО “МосСтальСервис”</div>

                                <div className="footer-left-1-item">

                                    <div className="footer-left-1-item-title">ИНН: 2425367783</div>

                                    <div className="footer-left-1-item-title">КПП: 24252677585</div>

                                </div>

                            </div>

                            <div className="footer-left-2">

                                <div className="footer-left-2-text">Пн-Пт: 9:00 до 19:00</div>

                                <div className="footer-left-2-title">300013, г Ташкент, Торховский проезд, д/б 1</div>

                            </div>

                            <div className="footer-left-2">

                                <div className="footer-left-2-text">Пн-Пт: 9:00 до 19:00</div>

                                <div className="footer-left-2-title">+998(93)777-77-77</div>

                            </div>

                            <div className="footer-left-2">

                                <div className="footer-left-2-text">e-mail</div>

                                <div className="footer-left-2-title">info@mossteelsevice.ru</div>

                            </div>

                        </div>

                        <div className="footer-right">
                            <img src={Footer} alt="" style={{width:"100%"}}/>
                            <img src={CarbonBlue} alt="" className="footer-absolute"/>
                        </div>

                    </div>

                    <div className="footer-bottom">

                        <div className="layout-nav-top">

                            <ul className="layout-nav-top-left">
                                <li>
                                    <Link to="/" className="color">О компании</Link>
                                </li>
                                <li>
                                    <Link to="/order" className="color">Как заказать</Link>
                                </li>
                                <li>
                                    <Link to="/delivery" className="color">Достава</Link>
                                </li>
                                <li>
                                    <Link to="/payment" className="color">Оплата</Link>
                                </li>
                                <li>
                                    <Link to="/reviews" className="color">Отзывы</Link>
                                </li>
                                <li>
                                    <Link to="/contacts" className="color">Контакты</Link>
                                </li>
                            </ul>

                            <ul className="layout-nav-top-right">

                                <Link to="https://www.instagram.com/cristiano" className="color"><img src={Instagram} alt="" /></Link>
                                <Link to="https://www.facebook.com/Cristiano" className="color"><img src={Facebook} alt="" /></Link>
                                <Link to="https://t.me/jumayevvvv" className="color"><img src={Telegram} alt="" /></Link>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Layout; 