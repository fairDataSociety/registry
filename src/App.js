// import logo from './logo.svg';
import './App.css';
import Moment from 'moment'
import FileBrowser, {Icons} from "react-keyed-file-browser";
import {useEffect, useState} from "react";

function App() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setFiles([
            {
                key: 'photos/animals/cat in a hat.png',
                modified: +Moment().subtract(1, 'hours'),
                size: 1.5 * 1024 * 1024,
            },
            {
                key: 'photos/animals/kitten_ball.png',
                modified: +Moment().subtract(3, 'days'),
                size: 545 * 1024,
            },
            {
                key: 'photos/animals/elephants.png',
                modified: +Moment().subtract(3, 'days'),
                size: 52 * 1024,
            },
            {
                key: 'photos/funny fall.gif',
                modified: +Moment().subtract(2, 'months'),
                size: 13.2 * 1024 * 1024,
            },
            {
                key: 'photos/holiday.jpg',
                modified: +Moment().subtract(25, 'days'),
                size: 85 * 1024,
            },
            {
                key: 'documents/letter chunks.doc',
                modified: +Moment().subtract(15, 'days'),
                size: 480 * 1024,
            },
            {
                key: 'documents/export.pdf',
                modified: +Moment().subtract(15, 'days'),
                size: 4.2 * 1024 * 1024,
                reference: 'test'
            },
        ])
    }, []);

    return (
        <div className="App row m-3">
            <h1 className="text-center">FairDataSociety Registry</h1>
            <div className="col-8">
                <FileBrowser
                    icons={Icons.FontAwesome(4)}
                    // onSelectFile={true}
                    onSelectFile={e => {
                        console.log(e);
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
            <div className="col-4">
                Hello
            </div>
        </div>
    );
}

export default App;
