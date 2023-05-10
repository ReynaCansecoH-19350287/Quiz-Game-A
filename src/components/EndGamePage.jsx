import './Game.css'

const EndGamePage = ({setPage, listQuestions, puntuacion, setPuntuacion }) => {

    return (
        <div className='game-container my-component'>
            <main className="app">
                <div className='juego-terminado'>
                    <span>{" "}You got {puntuacion} of {listQuestions.length}{" "}</span>
                    <button type="button" style={{marginTop: '30px' }} onClick={() => {setPage('Game'); setPuntuacion(0); }}>Play again</button>
                    <button type="button" style={{marginTop: '30px' }}onClick={() => {setPage('Answers'); setPuntuacion(0); }}>See Answers</button>
                    <button type="button" style={{marginTop: '30px' }} onClick={() => {setPage('Home'); setPuntuacion(0); }}>Home</button>
                </div>
            </main>
        </div>
    )
}

export default EndGamePage