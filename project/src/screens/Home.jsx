import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { useSelector } from 'react-redux'

function Home() {
    const [count, setCount] = useState(0)
    const dataFromRedux = useSelector(a => a.Login);
    console.log(dataFromRedux)
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>React Redux Toolkit</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <h3>Data From Redux</h3>
                {dataFromRedux.dummyData}
            </div>
        </>
    )
}

export default Home;
