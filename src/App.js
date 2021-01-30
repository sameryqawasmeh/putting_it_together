import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    
    <div className="App">
      <PersonCard firstName={"Samer"}lastName={"Qawasmeh"} age={35} hairColor={"hair color: Black"}/>

      <PersonCard firstName={"Jane"}lastName={"Doe"}age={30}hairColor={"hair color: brown"}/>

      <PersonCard firstName={"John"}lastName={"Smith"} age={20}hairColor={"hair color: bronze"}/>
</div>
    
    
  );
}

export default App;
