import './App.css';
import Home from "./components/home/home.component";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// import './App.css';
// import Home from "./components/home/home.component";
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

// function App() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <div className="App">
//         <Home />
//       </div>
//     </LocalizationProvider>
//   );
// }

// export default App;