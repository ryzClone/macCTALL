import React from "react";
import "../style/contacts.css";

class Contacts extends React.Component{
    render(){
        return(
           <div className="contacts-body">

                <div className="contacts-left">

                    <div className="contacts-left-title">Контакты</div>


                    <div className="contacts-left-item">

                            <div className="contacts-left-item-title">Адрес</div>

                            <div className="contacts-left-item-date">Пн-Пт: 9:00 до 19:00</div>

                            <div className="contacts-left-item-text">300013, г Ташкент, Торховский проезд, д/б 1</div>

                    </div>

                    <div className="contacts-left-item">

                            <div className="contacts-left-item-title">Телефон</div>

                            <div className="contacts-left-item-date">Пн-Пт: 9:00 до 19:00</div>

                            <div className="contacts-left-item-text">+998(93)777-77-77</div>

                    </div>

                    <div className="contacts-left-item">

                            <div className="contacts-left-item-title">Почта</div>

                            <div className="contacts-left-item-date">e-mail</div>

                            <div className="contacts-left-item-text">info@mossteelsevice.ru</div>

                    </div>


                </div>

                <div className="contacts-right">

                    <div className="contacts-left-title">ООО “МосСтальСервис” - Реквизиты</div>

                    <div className="contacts-right-body">

                        <div className="contacts-right-item">

                            <div className="contacts-right-item-title">ИНН/КПП</div>

                            <div className="contacts-right-item-text">99256778523   / 36437489997 </div>

                        </div>

                        <div className="contacts-right-item">

                            <div className="contacts-right-item-title">ОГРН</div>

                            <div className="contacts-right-item-text">252536464747474</div>

                        </div>

                        <div className="contacts-right-item">

                            <div className="contacts-right-item-title">Ген деректор</div>

                            <div className="contacts-right-item-text">Иванович Иван Иванов</div>

                        </div>

                        <div className="contacts-right-item">

                            <div className="contacts-right-item-title">Банк</div>

                            <div className="contacts-right-item-text">Хамкор банк</div>

                        </div>

                        <div className="contacts-right-item">

                            <div className="contacts-right-item-title">Расчетный счет/БИК</div>

                            <div className="contacts-right-item-text">0000 1111 2222 3333 4444 5555 / 124235426347</div>

                        </div>

                    </div>


                </div>

           </div>
        )
    }
}
export default Contacts