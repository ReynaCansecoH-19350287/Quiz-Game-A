const HomeButton = ({setPage}) => {

    return (
        <button type="button" className="btn btn-success" onClick={() => setPage('Home')}>
            <i className="bi bi-house"></i>
        </button>
    )
}

export default HomeButton