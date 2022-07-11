import PersonCard from './components/PersonCard';
import Lightswitch from './components/Lightswitch';

function App() {
  return (
    <div className="App">
      <Lightswitch />
      <PersonCard firstName={"Andrés"} lastName={"Segovia"} age={129} hairColor={"White"}/>
      <PersonCard firstName={"Luke"} lastName={"Skywalker"} age={22} hairColor={"Dirty Blonde"}/>
      <PersonCard firstName={"Yoda"} lastName={""} age={900} hairColor={"Grey"}/>
      <PersonCard firstName={"Han"} lastName={"Solo"} age={32} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
