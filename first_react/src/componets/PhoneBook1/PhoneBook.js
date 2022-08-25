import React from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

class PhoneBook extends React.Component{

    //настройка моего компонента
    //практически обязательный участок кода, в котором мы описываем, что в компоненте будет
    constructor(props){
        super(props);

        this.state = {
            contacts: [] //колекция телефонной книги
        }
    }
        //Сохраняет коллекцию в локальное хранилище
        saveToLs(){
            //Здесь будет сохранение
            localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts))

        }

        //Читает коллекцию из хранилища
        loadFromLs(){
            //здесь будет востановление колекции из сториджа
            const oldState = this.state
            if(localStorage.getItem("phoneBook"))
                oldState.contacts = JSON.parse(localStorage.getItem("phoneBook"))
            else
                oldState.contacts = []
            this.setState(oldState)
        }

        //метод который отвечает за поиещение нового контакта в колекцию
        create(newContact) {
            let newEl = {
                id: Date.now(), // + "_" + Math.random(),
                name: newContact.name,
                subName: newContact.subName,
                number: newContact.number,
            }
            const oldState = this.state
            oldState.contacts.push(newEl)
            this.setState(oldState)
        }

        update(id, newData){
            const oldState = this.state
            oldState.contacts[oldState.contacts.findIndex(el=> el.id === id)] ={
                id: id,
                name: newData.name,
                subName: newData.subName,
                number: newData.number,
            }
            this.setState(oldState)
        }

        //DELETE по id
        deleteById(contactId){
            const oldState = this.state
            let index = oldState.contacts.findIndex(c=> c.id === contactId)
            console.log(index)
            oldState.contacts.splice( index, 1)
            this.setState(oldState)
        }

        deleteByEl(el){
            let id = el.target.getAttribute('data-id')
            console.log(id)
            this.deleteById(id)
        }

        /**
         * Заргузка в коллекцию демо данные.
         * Такой метод позволяет другим разработчикам понять, какие поля вы используете
         */
        loadSimpleData(){
            // Создадим контакт с полями, по описанию задачи
            let contact = {
                id: Date.now() + "_" +  Math.random(), // Случайный номер
                name: "Имя", // поля для хранения имени контакта
                subName: "Фамилия", // фамилия
                number: "Номер телефона" // номер его телефона
            }

            const oldState = this.state // Взять старый стейт (мы не знаем что там храниться - но хотим оставить)
            oldState.contacts = [contact] // Поместим в контакты массив (коллекцию) с 1 контактом
            this.setState(oldState) // Поместим стейт обратно
        }


        /**
         * (R) Read - он как бы читает и выводит данные
         * Участок кода, который отвечает за построение компонента на странице
         * Обязательный для того, что бы компонент вообще назывался компонентом
         * @returns {JSX.Element}
         */
        render(){
            return(
                <>
                    <div>
                        <AddContact save={this.create.bind(this)}>Add</AddContact>
                        <button onClick={this.loadFromLs.bind(this)}> Load </button>
                        <button onClick={this.saveToLs.bind(this)}> Save </button>
                        <button onClick={this.loadSimpleData.bind(this)}> Simpele </button>
                    </div>
                    <table className="table" id="tblPhoneBook">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subname</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(contact=> (
                                    <>
                                        <Contact  key={contact.id} contact={contact}
                                                  update={this.update.bind(this)}
                                                  delete={this.deleteByEl.bind(this)}>

                                        </Contact>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            )
        }



}

export default PhoneBook