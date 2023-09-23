import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
    return (
        <div className="w-full h-screen">
            <div
                style={{ backgroundImage: 'url(./assets/background.jpg)' }}
                className="w-[100vw] h-full fixed bg-cover -z-[999]"
            />
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
