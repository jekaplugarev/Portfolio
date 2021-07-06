import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyWorks} from './MyWorks/MyWorks';
import {DistantWork} from './DistantWork/DistantWork';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
