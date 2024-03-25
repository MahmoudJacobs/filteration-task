import './App.css';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Title/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
