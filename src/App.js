import './App.css';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';
import Presentation from './components/Presentation';
import ProjectsGallery from './components/Gallery';
import Contact from './components/Contact';
import Sidenav from './components/Sidenav';
import SimpleTagCloud from './components/SimpleTagCloud'; // Asegúrate de importar el componente

function App() {
  const tags = [
    "React", "JavaScript", "CSS", "HTML", "Emilia te quiero",
    "API", "TypeScript", "SQL", "Python", "MongoDb", "Power Apps", 
    "Angular"
  ];

  return (
    <div className="App">
      <Navbar />
      
      {/* Home Section */}
      <ParticlesComponent />
      <Sidenav />
      <section id="home" className="content">
        <div className="centered-text">
          <h1>
            Hello. I am <span className="highlighted-name">Carlos Gerez</span>,
          </h1>
          <p>I am a DevOps Engineer and Software Developer.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="presentation-container">
        <div className="presentation-left">
          <Presentation />
        </div>
        <div className="presentation-right">
          <SimpleTagCloud tags={tags} />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="gallery-grid">
        <ProjectsGallery />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <Contact />
      </section>
    </div>
  );
}

export default App;
