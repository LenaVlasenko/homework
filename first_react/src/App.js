
//import './App.css';
import VlasHeader from "./componets/Header/VlasHeader";
import VlasFooter from "./componets/Footer/VlasFooter";
import FormSingUp from "./componets/Form/auth/FormSingUp";
//import TagsList from "./componets/Tags/TagsList"; <TagsList></TagsList>



function App() {
  return (
    <div className="App">
        <VlasHeader></VlasHeader>
        <FormSingUp></FormSingUp>
        <VlasFooter></VlasFooter>
    </div>
  );
}

export default App;
