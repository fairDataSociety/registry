// import logo from './logo.svg';
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
        <div className="App row m-3">
            <h1 className="text-center">FairDataSociety Registry</h1>
            <div className="col-8">
                <FileBrowser
                    canFilter={false}
                    icons={Icons.FontAwesome(4)}
                    // onSelectFile={true}
                    onSelectFile={e => {
                        console.log(e);
                        setCurrentFile(e);
                    }}
                    // headerRenderer={() => {
                    //     return <p>123123</p>;
                    // }}
                    // fileRenderer={()=>{
                    // //file item
                    //     return <p>777</p>;
                    // }}
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
    );
}

export default App;
