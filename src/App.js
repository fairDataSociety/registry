import './App.css';
import FileBrowser, {Icons} from "react-keyed-file-browser";
import {useEffect, useState} from "react";
import logo from './FDS_logo_transparent.png';

function App() {
    const [files, setFiles] = useState([]);
    const [currentFile, setCurrentFile] = useState(null);

    const getFileName = path => {
        if (!path) {
            return '';
        }

        const parts = path.split('/');

        return parts[parts.length - 1]
    }

    useEffect(() => {
        async function run() {
            let data = await (await fetch('files.json')).json();
            setFiles(data)
        }

        run().then();
    }, []);

    return (
        <div className="App ">
            <nav className="navbar navbar-light bg-light" style={{
                background: 'linear-gradient(to right, rgba(140, 209, 168, 0.588235), rgba(140, 209, 168, 0.3))'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{fontSize: 50}}>
                        <img src={logo} alt="" height={60} width={136} className="d-inline-block align-text-top"/>
                        &nbsp;FairDataSociety Registry
                    </a>
                </div>
            </nav>

            <div className="row m-3">
                <p><strong>Registry reference</strong>: 5bb2cd9d685a7d98866eb00782a29ec9e8d0384210b455497c29382e85493edc
                </p>

                <div className="col-8">
                    <FileBrowser
                        canFilter={false}
                        icons={Icons.FontAwesome(4)}
                        onSelectFile={e => {
                            console.log(e);
                            setCurrentFile(e);
                        }}
                        detailRenderer={(e) => {
                            return <></>;

                        }}
                        files={files}
                    />
                </div>
                <div className="col-4 App-file-info">
                    <p>File information</p>
                    {!currentFile && <p>...</p>}
                    {currentFile && <div>
                        <p><strong>Name</strong>: {getFileName(currentFile.key)}</p>
                        <p className="App-file-reference"><strong>Reference</strong>: {currentFile.reference}</p>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default App;
