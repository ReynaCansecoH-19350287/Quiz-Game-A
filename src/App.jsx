import { useState } from "react"
import HomePage from "./components/HomePage"
import CapturePage from "./components/CapturePage"
import EndGamePage from "./components/EndGamePage"
import SeeAnswers from "./components/SeeAnswers"
import GamePage from "./components/GamePage"

function App() {
  const [page, setPage] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);
  
  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col text-start'>
          {
            page === 'Home' && (
              <div>
                <HomePage setPage={setPage} />
              </div>
            )
          }
          {
            page === 'Capture' && (
              <div>
                <CapturePage setPage={setPage} 
                listQuestions={listQuestions} 
                setListQuestions={setListQuestions} />
              </div>
            )
          }
          {
            page === 'Game' && (
              <div>
                <GamePage page={page}
                setPage={setPage} 
                listQuestions={listQuestions}
                puntuacion={puntuacion}
                setPuntuacion={setPuntuacion} />
              </div>
            )
          }
          {
            page === 'Finish' && (
              <div>
                <EndGamePage setPage={setPage} 
                listQuestions={listQuestions}
                puntuacion={puntuacion}
                setPuntuacion={setPuntuacion} />
              </div>
            )
          }
          {
            page === 'Answers' && (
              <div>
                <SeeAnswers setPage={setPage} 
                listQuestions={listQuestions} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App