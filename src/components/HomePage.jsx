import './Game.css'

const HomePage = ({setPage}) => {

    return (
        <div className="container text-center mt-2">
            <h1>Quiz Game</h1>
            <hr />
            <h3>What action would you like to perform?</h3>
            <br />
            <button type="button" className="btn btn-warning btn-lg" onClick={() => setPage('Capture')}>Capture</button>
            <a>   </a>
            <button type="button" className="btn btn-success btn-lg" onClick={() => setPage('Game')}>Game</button>
            <hr />
        </div>

    )
  }
  
export default HomePage