import FormLogin from "./components/auth/forms/FormLogin";
import FormRegister from "./components/auth/forms/FormRegister";

function App() {
  return (
    <div className="App">
        <FormRegister></FormRegister>
        <hr/>
        <FormLogin></FormLogin>
    </div>
  );
}

export default App;