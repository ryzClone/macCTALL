import React from "react"
import { Message } from "../DataBase/message";
import '../style/reviews.css'
import User from "../photo/png/About/user.png";

class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            MessageImg: User,
            MessageTitle: '',
            MessageText: '',
            modal: false,
            Display: false,
        }
    }

    componentDidMount = () => {
        this.BaseMassage();
        if(Message.length >= 1){
            this.setState({Display: false});
        }else{
            this.setState({Display: true});
        }
    }

    BaseMassage = () => {
        const OtzivCard = document.querySelector('.otziv-card');

        Message.forEach((element , index) => {
            const OtzivCardItem = document.createElement('div');
            const OtzivCardItemIcon = document.createElement('div');
            const OtzivCardItemIconImg = document.createElement('img');
            const OtzivCardItemText = document.createElement('div');
            const OtzivCardItemTextTitle = document.createElement('div');
            const OtzivCardItemTextSubtitle = document.createElement('div');
            const DeleteOtzivCard = document.createElement('div');

            OtzivCardItem.className = 'otziv-card-item';
            OtzivCardItemIcon.className = 'otziv-card-item-icon';
            OtzivCardItemText.className = 'otziv-card-item-text';
            OtzivCardItemTextTitle.className = 'otziv-card-item-text-title';
            OtzivCardItemTextSubtitle.className = 'otziv-card-item-text-subTitle';
            DeleteOtzivCard.className = 'DeleteOtzivCard';

            DeleteOtzivCard.innerHTML = 'удалить';

            DeleteOtzivCard.addEventListener('click' , () => {
                const myMessages = JSON.parse(localStorage.getItem('myMessage')) || [];

                // O'chirishni istagan indeksni belgilang
                const indexToDelete = 0; // Masalan, birinchi elementni o'chiramiz
                
                // myMessages dan indeksni o'chirish
                myMessages.splice(indexToDelete, 1);
                
                // Yangilangan ma'lumotlarni qayta `localStorage` ga saqlash
                localStorage.setItem('myMessage', JSON.stringify(myMessages));

                window.location.reload();
            })

            OtzivCardItemIconImg.src = element.Img;
            OtzivCardItemIcon.appendChild(OtzivCardItemIconImg);

            OtzivCardItemTextTitle.innerHTML = element.Title;
            OtzivCardItemTextSubtitle.innerHTML = element.Text;

            OtzivCardItemText.appendChild(OtzivCardItemTextTitle);
            OtzivCardItemText.appendChild(OtzivCardItemTextSubtitle);

            OtzivCardItem.appendChild(OtzivCardItemIcon);
            OtzivCardItem.appendChild(OtzivCardItemText);
            OtzivCardItem.appendChild(DeleteOtzivCard);

            OtzivCard.appendChild(OtzivCardItem);

        });

    }

    OpenModal = () => {
        this.setState({modal:true})
    }

    CloseModal = () =>{
        this.setState({modal:false})
    }

    ModalForm = (e) => {
        e.preventDefault();
        const {MessageImg, MessageTitle, MessageText } = this.state;
    
        let myMessage = JSON.parse(localStorage.getItem('myMessage')) || []; 
    
    
            const newUser = {
                Title: MessageTitle,
                Text: MessageText,
                Img: MessageImg,
            };
    
            myMessage.push(newUser);
    
            localStorage.setItem('myMessage', JSON.stringify(myMessage));
            this.CloseModal();
            window.location.reload();
    };

    handleChangeModal = (e) => {
        this.setState({
            [e.target.name]: e.target.value // Qiymatni yangilash
        });
    }

    render(){
        return(
            <div className="otzive">

                <div style={{display: this.state.Display ? 'block' : 'none'}}>Not message</div>

                 <div className="otziv-card"> 
                    {/* BaseMassage dan keladigan ma'lumotlar chiqadi */}
                </div>

                <button onClick={this.OpenModal}>Add message</button>

                <div className="Catalog-modal" style={{display:this.state.modal ? "flex" : "none"}}>

                    <form onSubmit={this.ModalForm} className="formModal" style={{width:'40%'}}>

                        <div className="formModal-item">
                            <label htmlFor="MessageTitle">Message Title:</label>
                            <input type="text" placeholder="Title" name="MessageTitle" value={this.state.MessageTitle} onChange={this.handleChangeModal} required/>
                        </div>

                        <div className="formModal-item">
                            <label htmlFor="MessageText">Massage text:</label>
                            <textarea type="number" placeholder="Writing text" name="MessageText" style={{width:'63%' , height:'100px'}} value={this.state.MessageText} onChange={this.handleChangeModal} required/>
                        </div>
                                        
                        <div className="formModal-btn-body">
                            <button type="submit" className="formModal-btn">Jo'natish</button>
                        </div>

                        <div className="close-modal" onClick={this.CloseModal}>x</div>


                    </form>

                </div>

            </div>
        )
    }
}
export default Reviews