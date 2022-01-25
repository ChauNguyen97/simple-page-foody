import './App.css';
import Header from "./components/header";
import Banner from "./components/banner";
import About from './components/about';
import Menu from './components/menu';
import Expert from './components/expert';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Copyright from './components/copyright';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Banner / >
        <
        About / >
        <
        Menu / >
        <
        Expert / >
        <
        Testimonials / >
        <
        Contact / >
        <
        Copyright / >
        <
        /div>
    );
}

export default App;