import React from "react";
import "../style/basket.css"
import { Items } from "../DataBase/Korzina";

class Basket extends React.Component{

    handleDelete = (index) => {
        Items.forEach(element => {
            Items = Items.slice(1);
            console.log(Items);
        });
    };

    renderTableRows = () => {
        return Items.map((item, index) => (
            <tr key={index + 1}>
                <td>{item.Name}</td>
                <td>{item.Price} руб/м</td>
                <td>+ {item.Quantity} +</td>
                <td>{item.Price * item.Quantity} руб</td>
                <td className="Delete-Items" onClick={(e) => this.handleDelete(index)}>Delete</td>
            </tr>
        ));
    };

    render(){
        return(
            <div className="basket">

                <div className="basket-title">Корзина</div>
                
                <table className="table">

                    <thead>

                        <tr>
                            <th>Наименование</th>
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th>Стоимость</th>
                            <th>Delete</th>
                        </tr>

                    </thead>

                    <tbody id="tbody">

                        {this.renderTableRows()}

                    </tbody>

                </table>

            </div>
        )
    }
}
export default Basket