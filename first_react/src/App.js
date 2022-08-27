
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";
import PhoneBook from "./componets/PhoneBook1/PhoneBook";
import ShopIndex from "./componets/Shop/ShopIndex";
//import TagsList from "./componets/Tags/TagsList"; <TagsList></TagsList>



function App() {
  return (
    <div className="App conteiner">
        <VlasHeader></VlasHeader>
        <PhoneBook></PhoneBook>
        <VlasFooter></VlasFooter>
    </div>
  );
}

export default App;
