import { useState } from "react";

const initialData = [
    {
        id: 1,
        name: "src",
        type: "folder",
        children: [
            { id: 2, name: "index.js", type: "file" },
            { id: 3, name: "App.js", type: "file" }
        ]
    },
    {
        id: 4,
        name: "public",
        type: "folder",
        children: [
            { id: 5, name: "index.html", type: "file" }
        ]
    }
];

const FileManager = () => {
    const [files, setFiles] = useState(initialData);
    const addItem = () => {

    }
    return <FolderList data={files} add={addItem} />
}
const FolderList = ({ data, add }) => {
    return (<ul style={{ listStyleType: 'none' }}>
        {data?.map((item) => <FolderItem key={item?.id} item={item} onAdd={add} />)}
    </ul>)
}

const FolderItem = ({ item, onAdd }) => {
    const [input, setInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [type, setType] = useState('');
    const handleInput = (type) => {
        setShowInput(true);
        setType(type)
    }
    const addItem = (e) => {
        if (e.key === 'Enter') {
            item.children.push({ id: new Date(), name: input, type })
            setShowInput(!showInput);
        }

    }
    return <>
        <li key={item?.id} style={{ color: 'white', padding: '1rem' }}>
            {item.type === 'file' && item.name}
            {item.type === 'folder' && <>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                    <div>
                        {item.name}
                    </div>
                    <div style={{}}>
                        {showInput && <div>
                            <input onBlur={() => setShowInput(false)} value={input} onInput={(e) => setInput((e.target.value))} onKeyDown={addItem} />
                        </div>}
                        <button onClick={() => handleInput('file')}>
                            File 
                        </button>
                        <button onClick={() => handleInput('folder')}>
                            Folder
                        </button>
                    </div>

                </div>
                {item?.children && <FolderList data={item.children} add={onAdd} />}
            </>}
        </li>

    </>
}
export default FileManager;