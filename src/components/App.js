import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";


function App() {

  const contacts =[
    {
      id:'1',
      'name':'Virendra',
      'email':'viru@gmail.com'
    },
    {
      id:'2',
      'name':'Ram',
      'email':'ram@gmail.com'
    }

  ]
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
