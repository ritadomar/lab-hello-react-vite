// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroContent from './components/HeroContent';
import FeatureCard from './components/FeatureCard';
import FeatureList from './components/FeatureList';
import feature1 from './assets/icon1.png';
import feature2 from './assets/icon2.png';
import feature3 from './assets/icon3.png';
import feature4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">
      <Hero>
        <Navbar />
        <HeroContent />
      </Hero>
      <FeatureList>
        <FeatureCard
          imgSrc={feature1}
          title="Declarative"
          description="React makes it painless to create interactive Uls."
        />
        <FeatureCard
          imgSrc={feature2}
          title="Components"
          description="Build encapsulated components that manage their state."
        />
        <FeatureCard
          imgSrc={feature3}
          title="Single-Way"
          description="A set of immutable values are passed to the component's."
        />
        <FeatureCard
          imgSrc={feature4}
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      </FeatureList>
    </div>
  );
}

export default App;
