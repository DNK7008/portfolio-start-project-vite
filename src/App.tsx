import './App.css'
import { Contact } from './layout/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Skills } from './layout/skills/Skills';
import { Slogan } from './layout/slogan/Slogan';
import { Testimony } from './layout/testimony/Testimony';
import { Works } from './layout/works/Works';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer/>
        </div>
    )
}

export default App

