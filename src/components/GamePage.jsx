import { useEffect, useState } from 'react'
import './Game.css'

const GamePage = ({page, setPage, listQuestions, puntuacion, setPuntuacion }) => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [final, setFinal] = useState(false);
    const [timeR, setTimeR] = useState(30);
    const [disable, setDisable] = useState(false);

    const handleAnswerSubmit = (e) => {
        //Anadir puntuación
        if (e.target.value === listQuestions[preguntaActual].answerTrue) {
            setPuntuacion(puntuacion + 1);
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }

        //cambiar a la siguiente pregunta
        setTimeout(() => {
            if (preguntaActual === listQuestions.length - 1) {
                setFinal(true);
                setPage('Finish');
            } else {
                setPreguntaActual(preguntaActual + 1);
                setTimeR(31);
            }
            e.target.className = '';
        }, 1000);
    }

    const handleVerity =() => {
        if (preguntaActual === listQuestions.length - 1) {
            setFinal(true);
            setPage('Finish');
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (timeR > 0) setTimeR((prev) =>prev - 1);
            if (timeR === 0) setDisable(true);
        }, 1000);
        return () => clearInterval(intervalo);
    })

    return (

        <div className='game-container my-component'>
            {
                page === 'Game' && (
                    <div>
                        <main className="app">
                            <div className="lado-izquierdo">
                                <div className="numero-pregunta">
                                    <span>Question {preguntaActual + 1} of</span> {listQuestions.length}
                                </div>
                                <div className="titulo-pregunta">{listQuestions[preguntaActual].question}</div>
                                <hr />
                                <div>{!disable ? (
                                    <span className="tiempo-restante">Time left: {timeR}{" "}</span>
                                ) : (
                                    <button
                                        onClick={() => { 
                                            setTimeR(31); 
                                            setDisable(false); 
                                            setPreguntaActual(preguntaActual + 1); 
                                            handleVerity();}}
                                    >
                                        Continue
                                    </button>
                                )}
                                </div>
                            </div>
                            <div className="lado-derecho">
                                <br />
                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer1}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer1}
                                </button>
                                <br />
                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer2}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer2}
                                </button>
                                <br />
                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer3}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer3}
                                </button>
                                <br />
                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer4}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer4}
                                </button>
                            </div>
                        </main>
                    </div>
                )
            }
        </div>
    )
}

export default GamePage