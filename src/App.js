import './App.css';
import FileBrowser, {Icons} from "react-keyed-file-browser";
import {useEffect, useState} from "react";

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
        <div className="App m-3">
            <h1 className="text-center">FairDataSociety Registry</h1>
            <p><strong>Registry reference</strong>: 5bb2cd9d685a7d98866eb00782a29ec9e8d0384210b455497c29382e85493edc</p>

            <div className="row">
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
