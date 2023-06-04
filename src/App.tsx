import React, {useState} from 'react';
import './style/app.scss';

type Theme = "light" | "dark" | "default"

function App() {
    const [theme, setTheme] = useState<Theme>("default");

    return (
        <div className={["app", `theme-${theme}`].join(' ')}>
            <div className="content">
                <div className="container">
                    so yeah, we're doing this again.<br/>
                    <select onChange={(e) => setTheme(e.target.value as Theme)}>
                        <option value={"default"}>default theme</option>
                        <option value={"dark"}>dark theme</option>
                        <option value={"light"}>light theme</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default App;
