
import './App.css';
import Profile from './profile/Profile';
import img1 from './Berlin.jpg'



function App() {
  return (
    <div className="App">
      <Profile  image = {img1 } fullName = "Leith El Gharbi" bIO = "Je suis né le 06/11/2009, actuellement j'ai 12ans. Je suis entré a gomycode a l'age de 10 ans. la bas j'ai appris a créé des site web, des application et a faire de la modelisation 3d" proffesion = "Etudiant" />
    </div>
  );
}

export default App;
