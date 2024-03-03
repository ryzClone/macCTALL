import React from "react";
import { Link } from "react-router-dom";
import "../style/about.css"
import True from "../photo/png/About/item/true.png";
import Contact from "../photo/png/About/item/contact.png";
import Calendar from "../photo/png/About/item/colendar.png";
import Money from "../photo/png/About/item/money.png";
import Bus from "../photo/png/About/item/bus.png";
import Map from "../photo/png/About/map/map 1.png";
import CarbonWhite from "../photo/png/About/map/carbon-wgite.png";
import CarbonBlue from "../photo/png/About/map/carbon-blue.png";
import User from "../photo/png/About/user.png";
import Inf from "../photo/png/layout/inf.png"

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          phoneNumber: '',
          category: 'armatura',
          quantity: '',
        };
      }

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
    
        const message = `
        Привет, сегодняшняя информация!
        Имя: ${this.state.name}
        Номер телефона: ${this.state.phoneNumber}
        Категория: ${this.state.category}
        Количество тонн: ${this.state.quantity}
        `;
        
        this.setState({name : ""});
        this.setState({phoneNumber : ""});
        this.setState({category : ""});
        this.setState({quantity : ""});

        const telegramBotApiUrl = 'https://api.telegram.org/bot6951952110:AAEEy0qj3n_2cUMkJaUOQ935G29LSgp1J2Q/sendMessage';
        const chatId = 1439886460;
    
        // Telegramga so'rov jo'natish
        fetch(telegramBotApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML',
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Telegramga so\'rov jo\'natildi:', data);
        })
        .catch(error => {
            console.error('Xatolik:', error);
        });
    }

    componentDidMount = () => {
        this.BaseMessage();
    }

    BaseMessage = () => {
        const Messages = [
            {Img:User , Title:`ООО “Строй сити”` , Text:'Каждая партия металлопроката проходит жесткий контроль качества и обязательную сертификацию Каждая партия металлопроката проходит жесткий контроль качества и обязательную сертификацию'},
            {Img:User , Title:`ООО “Строй сити”` , Text:'Каждая партия металлопроката проходит жесткий контроль качества и обязательную сертификацию Каждая партия металлопроката проходит жесткий контроль качества и обязательную сертификацию'}
        ]
        
        const MessageLocal = JSON.stringify(Messages);

        localStorage.setItem('myMessage' , MessageLocal);
    }
    

    render(){
        return(

            <div className="about">

                <div className="pochemu-nas">

                    <div className="pochemu-nas-title">Почему выберают нас</div>

                    <div className="pochemu-nas-item">

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={True} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Собсвенное производство</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">Мы работаем без посредников, что значительно <br /> сокращает сроки и стоимость поставок</div>
                            </div>

                        </div>

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={Contact} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Гарантия качества продукции</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">
                                    Каждая партия металлопроката проходит жесткий <br /> контроль качества и обязательную сертификацию
                                </div>
                            </div>

                        </div>

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={Calendar} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Удобные сособы оплаты</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">
                                Более 10 способов оплаты, также возможны кредит <br /> и рассрочка
                                </div>
                            </div>

                        </div>

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={Money} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Гиюкое ценообразование</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">
                                Полный ассортимент металлопроката по выгодным <br /> ценам от производителя
                                </div>
                            </div>

                        </div>

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={Bus} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Доставка в срок, по всей России</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">
                                Собственный автопарк позволяет осуществлять <br /> доставку в короткие сроки
                                </div>
                            </div>

                        </div>

                        <div className="pochemu-nas-item-body">

                            <div className="pochemu-nas-item-body-icon">
                                <img src={True} alt="" className="pochemu-nas-item-body-icon-img"/>
                            </div>

                            <div className="pochemu-nas-item-body-text">
                                <div className="pochemu-nas-item-body-text-title">Гарантия качества продукции</div>   
                                <div className="pochemu-nas-item-body-text-subTitle">
                                Каждая партия металлопроката проходит жесткий <br />контроль качества и обязательную сертификацию
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="pochemu-nas-map">

                        <div className="pochemu-nas-map-text">

                            <div className="pochemu-nas-map-text-title">Металлопрокат с доставкой по всей России</div>

                            <div className="pochemu-nas-map-text-subTitle">Доставляем металлопрокат по всей России. Быстро. Выгодно. Надёжно.</div>

                        </div>

                        <div className="pochemu-nas-map-carta">
                            <img src={Map} alt="" className="map"/>
                            <img src={CarbonWhite} alt="" className="map" style={{right:"398px",top:"45px"}}/>
                            <img src={CarbonWhite} alt="" className="map" style={{right:"310px",top:"20px"}}/>
                            <img src={CarbonWhite} alt="" className="map" style={{right:"240px",top:"100px"}}/>
                            <img src={CarbonWhite} alt="" className="map" style={{right:"160px",top:"90px"}}/>
                            <img src={CarbonWhite} alt="" className="map" style={{right:"100px",top:"55px"}}/>
                            <img src={CarbonBlue} alt="" className="map" style={{right:"220px",top:"40px"}}/>
                        </div>

                    </div>
                </div>

                <div className="otziv">

                    <div className="pochemu-nas-title">Отзывы наших клиентов</div>

                    <div className="otziv-card">

                        <div className="otziv-card-item">

                            <div className="otziv-card-item-icon">
                                <img src={User} alt="" />
                            </div>

                            <div className="otziv-card-item-text">

                                <div className="otziv-card-item-text-ttle">ООО “Строй сити”</div>

                                <div className="otziv-card-item-text-subTitle">
                                    Каждая партия металлопроката проходит жесткий
                                    контроль качества и обязательную сертификацию
                                    Каждая партия металлопроката проходит жесткий
                                    контроль качества и обязательную сертификацию
                                </div>

                            </div>

                        </div>

                        <div className="otziv-card-item">

                            <div className="otziv-card-item-icon">
                                <img src={User} alt="" />
                            </div>

                            <div className="otziv-card-item-text">

                                <div className="otziv-card-item-text-ttle">ООО “Строй сити”</div>

                                <div className="otziv-card-item-text-subTitle">
                                    Каждая партия металлопроката проходит жесткий
                                    контроль качества и обязательную сертификацию
                                    Каждая партия металлопроката проходит жесткий
                                    контроль качества и обязательную сертификацию
                                </div>

                            </div>

                        </div>

                    </div>

                    <Link to="/reviews" className="otziv-btn">
                        <div className="otziv-btn-text">Все отзывы</div>
                        <div className="otziv-btn-icon">+</div>
                    </Link>

                </div>

                <form className="inf" onSubmit={this.handleSubmit}>

                    <div className="inf-text">

                        <div className="inf-text-item">

                            <div className="inf-text-item-title">
                            Вам нужна дополнительная информация <br /> или вы не нашли того, что искали?
                            </div>

                            <div className="inf-text-item-subtitle">
                            Позвоните по номеру <span>+998(93)777-77-77</span> или оставьте <br /> заявку, наш менеджер подберет лучшее решение
                            </div>

                        </div>
                        
                        <div className="inf-text-input">
                            <input
                            type="text"
                            className="inf-text-input-item"
                            placeholder="как вас зовут?"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                            <input
                            type="text"
                            className="inf-text-input-item"
                            placeholder="+998(9_)___-__-__"
                            required
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            />
                            <select
                            className="inf-text-input-item"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            >
                            <option value="Арматура">Арматура</option>
                            <option value="Уголки">Уголки</option>
                            <option value="Труба профильная">Труба профильная</option>
                            </select>
                            <input
                            type="number"
                            className="inf-text-input-item"
                            placeholder="Кол-во тонн"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            />
                        </div>
                        
                        <input type="submit" className="inf-text-btn" value="Отправить" />

                    </div>
            
                    <div className="inf-img">
                        <img src={Inf} alt="" />
                    </div>

                </form>

            </div>

        )
    }
}
export default About