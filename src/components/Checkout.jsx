import React from "react";
import { Items, removeItem } from "../DataBase/Korzina";
import "../style/checkout.css"
import { City } from "../DataBase/city";

class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          summa:0 ,
          Display:false ,
          city:'Toshkent shaxri' ,
          name:'' ,
          family:'' ,
          number:'' ,
          textColor:true,
          SendClick:false,
          sendPaymentError:false,
          ItemsLength:0,
        };
      }

      componentDidMount = () => {
        if(Items !== null){
            let totalSum = 0;
            let activeLength = 0;
            Items.forEach((item , index) => {
                if(item.active){
                    activeLength += 1;
                    totalSum += item.Price * item.Quantity;
                    this.setState({ItemsLength: activeLength})
                }
            });

            this.setState({summa:totalSum});
        }
      } 

      DisplayControl = (e) => {
            const selectRadio = document.querySelector('.checkout-vidachi-select-radio');
            if(this.state.Display){
                selectRadio.style.padding = '7px 50px 7px 16px'
            }else{
                selectRadio.style.padding = '0px'
            }
            this.setState(prevState => ({
                Display:!prevState.Display
            }) , () => {
                if (this.state.Display) {
                    const checkoutUl = document.querySelector('.checkout-vidachi-select-ul');
                    this.setState({ city: '' }); 
                    checkoutUl.innerHTML = ' ';
                    City.forEach((e) => {
                        const checkoutLi = document.createElement('li');
                        checkoutLi.className = 'checkout-vidachi-select-li';
                        checkoutLi.innerHTML = e;
                
                        checkoutLi.addEventListener('click', () => {
                            this.setState({ city: e });
                            document.querySelector('.checkout-vidachi-select-radio').style.padding = '7px 50px 7px 16px'
                        });                                          
                
                        checkoutUl.appendChild(checkoutLi);
                    });
                }
                
            });
      }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    handleClick = (e) => {
        e.target.type = "text";
        this.setState({ number: "+998" });
    }

    sendPayment = () => {

        if(this.state.name !== '' && this.state.family !== '' && this.state.number !== '' && this.state.number.length >= 13){
            this.setState({sendPaymentError:true});
            alert('Спасибо за покупку.');
            removeItem('full');
            this.setState({summa:0});
            window.location.pathname = '/'
        }else{
            this.setState({sendPaymentError:false})
        }
    }

    render(){
        return(
            <div className="checkout">

                <h1>Оформление заказа</h1>

                <div className="checkout-body">

                  <div className="checkout-vidachi-body">

                  <div className="checkout-vidachi">

                    <h1 className="checkout-vidachi-title">Способ получения и адрес доставки:</h1>

                    <div className="checkout-vidachi-select">
                        <p className="checkout-vidachi-select-p">Город доставки</p>

                        <div className="checkout-vidachi-select-radio" onClick={(e) => this.DisplayControl(e)}>
                            {this.state.city}
                            <ul className="checkout-vidachi-select-ul" style={{display:this.state.Display ? 'flex' : 'none'}}></ul>
                        </div>

                    </div>

                    <div className="checkout-vidachi-obtaining">

                        <input type="radio" className="checkout-vidachi-obtaining-radio" />

                        <div className="checkout-vidachi-obtaining-text">
                            <div className="checkout-vidachi-obtaining-text-title">Пункт выдачи Uzum</div>
                            <div className="checkout-vidachi-obtaining-text-subtitle">Можно забрать , <span>бесплатно</span></div>
                        </div>

                    </div>

                    </div>

                    <div className="checkout-recipient">
                       
                        <div className="checkout-recipient-title">Получатель заказа : <span> Авторизуйтесь</span> <span>, если совершали покупки на МосСтальСервис</span></div>
                        
                        <form action="" className="checkout-recipient-form">

                            <div className="checkout-recipient-form-body">
                                <label htmlFor="family">Фамилия </label>
                                <input type="text" name="family" value={this.state.family} placeholder="Введите фамилию" onChange={(e) =>this.handleChange(e)}/>
                            </div>

                            <div className="checkout-recipient-form-body">
                                <label htmlFor="name">Имя</label>
                                <input type="text" name="name" placeholder="Введите имя" value={this.state.name} className="checkout-recipient-form-input" onChange={this.handleChange}/>
                            </div>

                        </form>

                        <p className="checkout-recipient-text">
                            Мы пришлем уведомление о статусе заказа на указанный вами телефон. <br />
                            Курьер свяжется с вами по телефону для уточнения времени доставки.
                        </p>

                        <div className="checkout-recipient-form-body-number">
                            <label htmlFor="nomber">Номер телефона</label>
                            <input type="number" name="number" placeholder="+998 __ ___-__-__" value={this.state.number} className="checkout-recipient-form-input" onChange={(this.handleChange)} onClick={this.handleClick}/>
                            <div htmlFor="number" className="checkout-recipient-form-body-label" style={{display:this.state.textColor ? 'block' : 'none'}}>Укажите номер телефона</div>
                        </div>

                        <div className="checkout-recipient-checkbox">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">
                            Подписаться на наши новости и акции. Вы будете одними из первых узнавать о новых <br /> скидках, акциях и распродажах.
                            </label>
                        </div>


                   
                    </div>

                    <div className="checkout-payment-method"></div>

                    <div className="checkout-product"></div>

                  </div>

                    <div className="checkout-payment">

                        <div className="checkout-payment-title">
                            <p className="checkout-payment-title-h1">Ваш заказ</p>
                            <p className="checkout-payment-title-p" onClick={() => window.location.pathname='/delivery'}>Перейти в корзину</p>
                        </div>

                        <div className="checkout-payment-goods">
                            <div className="checkout-payment-goods-title">Товары ({this.state.ItemsLength}):</div>
                            <div className="checkout-payment-goods-text">{`${this.state.summa} руб/м`}</div>
                        </div>

                        <div className="checkout-payment-delivery">
                            <div className="checkout-payment-delivery-title">Доставка:</div>
                            <div className="checkout-payment-delivery-text">бесплатно</div>
                        </div>

                        <div className="checkout-payment-total">
                            <div className="checkout-payment-total-title">Итого:</div>
                            <div className="checkout-payment-total-text">{`${this.state.summa} руб/м`}</div>
                        </div>

                        <div className="checkout-payment-btn">
                            <button className="checkout-payment-btn-item" onClick={this.sendPayment}> Оплатить картой</button>
                            <div style={{display:this.state.sendPaymentError ? 'none' : 'block'}} className="checkout-payment-btn-text"> Извините, заполните поля</div>
                        </div>

                    </div>

                </div>



            </div>
        )
    }
}
export default Checkout