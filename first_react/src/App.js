
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";
import KinoKradHome from "./componets/kinokrad/KinoKradHome";
//import TagsList from "./componets/Tags/TagsList"; <TagsList></TagsList>



function App() {
  return (
    <div className="App conteiner">
        <VlasHeader></VlasHeader>
        <KinoKradHome></KinoKradHome>
        <VlasFooter></VlasFooter>
    </div>
  );
}

export default App;
