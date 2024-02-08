import React from "react"
import Inf from "../photo/png/order/order-png.png";
import "../style/order.css"

class Order extends React.Component{
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
    
    

    render(){
        return(
            <div className="Order">
                <form className="order-form" onSubmit={this.handleSubmit}>

                    <div className="order-text">


                        <div className="order-text-item-title">
                            Оставьте заявку и мы с вами <br /> свяжемся в самые кротчайшие сроки
                        </div>

                        
                        <div className="order-text-input">

                            <div className="order-input-body">

                            <select
                                    className="order-text-input-item"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange}
                                    >

                                    <option value="Арматура">Арматура</option>
                                    <option value="Уголки">Уголки</option>
                                    <option value="Труба профильная">Труба профильная</option>
                                    <option value="Труба профильная"> Катанка</option>
                                    <option value="Труба профильная">Труба ВПГ</option>
                            
                            </select>

                                <input
                                    type="number"
                                    className="order-text-input-item"
                                    placeholder="Кол-во тонн"
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <input
                                type="text"
                                className="order-text-input-item"
                                placeholder="Ваше имя"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />

                            <input
                                type="text"
                                className="order-text-input-item"
                                placeholder="+998(9_)___-__-__"
                                required
                                name="phoneNumber"
                                value={this.state.phoneNumber}
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
export default Order