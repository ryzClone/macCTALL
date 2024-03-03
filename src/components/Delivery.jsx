import React from "react"
import { Link } from "react-router-dom";
import "../style/delivery.css"
import orderNone from "../photo/png/order/order-none-png.png"
import { Items , removeItem, removeItemById, updateFirstItem  } from "../DataBase/Korzina";
import DeletePng from '../photo/png/order/delete.png'




class Delivery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          phoneNumber: '',
          category: 'armatura',
          quantity: '',
          summa:0,
          Display:false,
          ItemsLength:0,
          GufLength:0,
        };
      }
    
    componentDidMount = () => {
        if(Items !== null){
            this.setState({ItemsLength:Items.length});
            this.setState({ Display: Items.length >= 1 });
        }

        
        const storedData = localStorage.getItem('myUsers');
        if (storedData) {
            this.DeleviryArrayItms();
        }

        if(Items !== null){
            let totalSum = 0;
            let activeLength = 0;
            Items.forEach((item , index) => {
                if(item.active){
                    activeLength += 1;
                    totalSum += item.Price * item.Quantity;
                    this.setState({GufLength: activeLength})
                }
            });

            this.setState({summa:totalSum});
        }
    }

    DeleviryArrayItms () {
        const Baskets = document.querySelector('.basket-body-elements');
        if(Items !== null){
            this.setState({ Display: Items.length >= 1 });
        }

        if(Items.length >= 1){
            let totalLog = [];
            Items.forEach((e , index) => {
                const BasketElementItems = document.createElement('div');
                BasketElementItems.className = 'BasketElementItems';
                
                const BasketElementItemsCheckbox = document.createElement('input');
                const BasketElementItemsName = document.createElement('div');
                const BasketElementItemsQuanty = document.createElement('div');
                const BasketElementItemsPrice = document.createElement('div');
                const BasketElementItemsSumm = document.createElement('div');
                const BasketElementItemsSummAll = document.createElement('div');

                const BasketElementItemsSummDelete = document.createElement('div');
                const BasketElementItemsSummDeleteTitle = document.createElement('div');
                const BasketElementItemsSummDeleteImg = document.createElement('img');
                BasketElementItemsSummDeleteTitle.innerHTML = "Удалить";
                BasketElementItemsSummDeleteImg.src= DeletePng;
                BasketElementItemsSummDelete.appendChild(BasketElementItemsSummDeleteImg);
                BasketElementItemsSummDelete.appendChild(BasketElementItemsSummDeleteTitle);
                BasketElementItemsSummDelete.className = 'BasketElementItemsSummDelete';
                BasketElementItemsSummDeleteTitle.className = 'BasketElementItemsSummDeleteTitle';
                BasketElementItemsSummDeleteImg.className = 'BasketElementItemsSummDeleteImg';

                BasketElementItemsSummDelete.addEventListener('click', () => {
                    removeItem(index);
                    Baskets.innerHTML = '';
                    this.DeleviryArrayItms();
                    this.setState({ItemsLength:Items.length});
                })

                const BasketElementItemsQuantyMinus = document.createElement('p');
                const BasketElementItemsQuantyPlus = document.createElement('p');
                const BasketElementItemsQuantyQuantity = document.createElement('p');

                BasketElementItemsQuantyMinus.className='BasketElementItemsQuantyMinus';
                BasketElementItemsQuantyMinus.className = 'cursor';
                BasketElementItemsQuantyPlus.className='BasketElementItemsQuantyPlus';
                BasketElementItemsQuantyPlus.className = 'cursor';

                BasketElementItemsQuantyMinus.addEventListener('click' , () => {
                    if(Items[index].Quantity >= 2){
                        const updatedItem = { Quantity: Items[index].Quantity - 1}
                        updateFirstItem(updatedItem , index);
                        Baskets.innerHTML = '';
                        this.DeleviryArrayItms();
                        window.location.reload();
                    }else{
                        removeItemById(index);
                        Baskets.innerHTML = '';
                        this.DeleviryArrayItms();
                        window.location.reload();
                    }
                })

                
                BasketElementItemsQuantyPlus.addEventListener('click' , () => {
                        const updatedItem = { Quantity: Items[index].Quantity + 1};
                        updateFirstItem(updatedItem , index);
                        this.setState({GufLength:0})
                        this.setState({summa:0})
                        Baskets.innerHTML = '';
                        this.DeleviryArrayItms();
                        window.location.reload();
                    }
                )

                BasketElementItemsQuantyMinus.innerHTML = '-';
                BasketElementItemsQuantyPlus.innerHTML = '+';
                BasketElementItemsQuantyQuantity.innerHTML = e.Quantity;
                
                BasketElementItemsCheckbox.type = 'checkbox';
                BasketElementItemsCheckbox.className = 'basket-body-header-title-checkbox';

                if(e.active){
                    BasketElementItemsCheckbox.checked = true;
                }else{
                    BasketElementItemsCheckbox.checked = false;
                }

                
                BasketElementItemsName.innerHTML = e.Name;
                BasketElementItemsName.className = 'BasketElementItemsName';

                BasketElementItemsQuanty.appendChild(BasketElementItemsQuantyMinus);
                BasketElementItemsQuanty.appendChild(BasketElementItemsQuantyQuantity);
                BasketElementItemsQuanty.appendChild(BasketElementItemsQuantyPlus);
                BasketElementItemsQuanty.className = 'BasketElementItemsQuanty';
                
                BasketElementItemsPrice.innerHTML = "шт: " + e.Price + " руб/м";
                BasketElementItemsPrice.className = 'BasketElementItemsPrice';
                
                BasketElementItemsSummAll.innerHTML = "итого: " + e.Price * e.Quantity + " руб/м";
                BasketElementItemsSumm.appendChild(BasketElementItemsSummDelete);
                BasketElementItemsSumm.appendChild(BasketElementItemsSummAll);
                BasketElementItemsSumm.className = 'BasketElementItemsSumm';
                BasketElementItemsSummAll.className = 'BasketElementItemsSummAll';
                
                BasketElementItems.appendChild(BasketElementItemsCheckbox);
                BasketElementItems.appendChild(BasketElementItemsName);
                BasketElementItems.appendChild(BasketElementItemsQuanty);
                BasketElementItems.appendChild(BasketElementItemsPrice);
                BasketElementItems.appendChild(BasketElementItemsSumm);
                
                Baskets.appendChild(BasketElementItems);

                const sum = e.Price * e.Quantity;
                totalLog.push(sum);
                const existingUsers = localStorage.getItem('myUsers');
                const usersArray = JSON.parse(existingUsers);
                usersArray[index].id = index;

                localStorage.setItem('myUsers', JSON.stringify(usersArray));
            });


            let checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let chexos = 0;
            checkboxes.forEach((e , index) => {
                if(e.checked){
                    chexos += 1;
                    if(chexos === checkboxes.length -1){
                        checkboxes[0].checked = true; 
                    }else{
                        checkboxes[0].checked = false;
                    }
                }
            })
            checkboxes.forEach((checkbox, index) => {
                checkbox.addEventListener('change', () => {
                    const newUserIndex = index - 1; // Foydalanuvchi indeksi
                            
                    const existingUsers = localStorage.getItem('myUsers');
                    if (existingUsers) {
                        const usersArray = JSON.parse(existingUsers);
                        if (index === 0 && !checkbox.checked) { // Agar birinchi element false bo'lsa
                            usersArray.forEach(user => {
                                user.active = false; // Hammasini false qilamiz
                            });
                        } else { // Aks holda, faqat o'zgartirilgan indeksni o'zgartiramiz
                            usersArray.forEach((user) => {
                                if (index === 0) {
                                    user.active = checkbox.checked;
                                } else if (user.id === newUserIndex) {
                                    user.active = checkbox.checked;
                                }
                            });
                        }
                        localStorage.setItem('myUsers', JSON.stringify(usersArray));
                        window.location.reload();
                    }
                });
            });
            
            
            
            

        }
    
    }
    
    render(){
        return(

            <div className="Order">

                <div className="order-none" style={{ display: this.state.Display ? 'none' : 'flex' }}>

                    <div className="order-none-img">
                    <img src={orderNone} alt="" className="order-none-img-item" />
                    </div>

                    <div className="order-none-title">
                    В вашей корзине на данный момент нет товаров
                    </div>

                    <div className="order-none-text">
                    Начните с коллекций на главной странице или найдите нужный товар с помощью поиска.
                    </div>

                    <Link to="/" className="color"><button className="order-none-button">Главный страница</button></Link>

                </div> 

                <div className="order-basket" style={{ display: this.state.Display ? 'flex' : 'none' }}>
                    <h1 className="order-basket-title">Ваша корзина, <span>{this.state.ItemsLength} товар</span> </h1>

                    <div className="order-basket-body">

                        <div className="basket-body">

                            <div className="basket-body-header">

                                <div className="basket-body-header-title">
                                    <input type="checkbox" className="basket-body-header-title-checkbox"/>
                                    Снять все
                                </div>

                                <div className="basket-body-header-text">

                                    <div className="basket-body-header-text-key">Ближайшая дата доставки:</div>

                                    <div className="basket-body-header-text-element">15 февраля </div>

                                </div>

                            </div>

                            <div className="basket-body-elements">
                            </div>

                        </div>

                        <div className="basket-body-right">

                            <h1 className="basket-body-right-title">Ваш заказ</h1>

                            <div className="basket-body-right-product">

                                <div className="basket-body-right-product-label">
                                    <p> Товары : {`(${this.state.GufLength})`}</p>
                                </div>

                                <div className="basket-body-right-product-title">
                                    <p>Итого : {this.state.summa} $</p>
                                </div>

                                <button className="basket-body-right-product-sum" onClick={() => {window.location.pathname = '/checkout'}}>Перейти к оформлению</button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}
export default Delivery