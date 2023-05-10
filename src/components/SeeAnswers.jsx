import {useEffect, useState} from 'react'
import './Game.css'

const SeeAnswers = ({ setPage, listQuestions }) => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [final, setFinal] = useState(false);

    const handleVerity = () => {
        if (preguntaActual === listQuestions.length - 1) {
            setFinal(true);
            setPage('Finish');
        } else {
            setPreguntaActual(preguntaActual + 1);
        }
    }

    return (
        <div className='game-container my-component'>
            <main className="app">
                <div className="lado-izquierdo">
                    <div className="numero-pregunta">
                        <span>Question {preguntaActual + 1} of</span> {listQuestions.length}
                    </div>
                    <div className="titulo-pregunta">
                        {listQuestions[preguntaActual].question}
                    </div>
                    <div>
                        {listQuestions[preguntaActual].answerTrue}
                    </div>
                    <button type="button" onClick={() => handleVerity()}>Continue</button>
                </div>
            </main>
        </div>
    )
}

export default SeeAnswers