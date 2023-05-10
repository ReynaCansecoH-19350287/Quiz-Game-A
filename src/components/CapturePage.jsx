import ClearButton from "./Buttons/ClearButton"
import HomeButton from "./Buttons/HomeButton"
import NewQuestionsButton from "./Buttons/NewQuestionsButton"
import ListQuestion from "./ListQuestion"

const CapturePage = ({setPage, listQuestions, setListQuestions}) => {

    return (
        <div className="container text-center mt-2">   
            <div className="row">
                <h1>Capture</h1>
                <div className="col text-end mt-1">
                    <ClearButton setListQuestions={setListQuestions} />
                    <NewQuestionsButton listQuestions={listQuestions} setListQuestions={setListQuestions} />
                    <HomeButton setPage={setPage} />
                </div>
            </div>
            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>Your list is empty</h3>
                        Add a new question to get started.
                    </div>
                )
            }
            {
                listQuestions.map((pregunta) => (
                    <ListQuestion pregunta={pregunta} listQuestions={listQuestions} setListQuestions={setListQuestions} />
                ))
            }
            <hr />
            <div className="col text-end">
                <ClearButton
                    setListQuestions={setListQuestions} />
                <NewQuestionsButton listQuestions={listQuestions} setListQuestions={setListQuestions} />
                <HomeButton setPage={setPage} />
            </div>
        </div>
    )
}

export default CapturePage