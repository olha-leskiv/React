import Button from './components/Button';
import { GoBell, GoDatabase, GoCloudUpload } from 'react-icons/go';

function App() {
    const handleEvent = (e) => {
        console.log(e);
    }

    return (
        <div>
            <div>
                <Button primary rounded onClick={handleEvent} className="mb-2"><GoBell />Primary</Button>
            </div>
            <div>
                <Button secondary outlined><GoDatabase />Secondary</Button>
            </div>
            <div>
                <Button success onMouseOver ={handleEvent}><GoCloudUpload/>Success</Button>
            </div>
            <div>
                <Button warning>Warning</Button>
            </div>
            <div>
                <Button danger outlined>Danger</Button>
            </div>
        </div>
    )
}

export default App;