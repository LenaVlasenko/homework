
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";
import TagsList from "./componets/Tags/TagsList";


function App() {
  return (
    <div className="App">
        <VlasHeader></VlasHeader>
        <TagsList></TagsList>
        <VlasFooter></VlasFooter>
    </div>
  );
}

export default App;
