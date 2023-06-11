import React from 'react'
import ContactsForm from './components/ContactsForm';
import QuestionsTable from './components/QuestionsTable';
import MyNavbar from './components/MyNavbar';


const App = () => {
  return (
    <div className='container'>
    <MyNavbar/>
    <ContactsForm/>
    <QuestionsTable/>
    </div>
  )
}

export default App