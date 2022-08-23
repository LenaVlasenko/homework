
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";
import PicturesHome from "./componets/Pictures/picturesHome";
//import TagsList from "./componets/Tags/TagsList"; <TagsList></TagsList>



function App() {
  return (
    <div className="App conteiner">
        <VlasHeader></VlasHeader>
        <PicturesHome></PicturesHome>
        <VlasFooter></VlasFooter>
    </div>
  );
}

export default App;
