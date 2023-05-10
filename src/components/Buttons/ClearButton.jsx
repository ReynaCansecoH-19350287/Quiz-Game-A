import Swal from "sweetalert2"

const ClearButton = ({setListQuestions}) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#1F8CF9',
            cancelButtonColor: '#F9313D',
        })
        if (isConfirmed) {
            localStorage.setItem("listQuestions", JSON.stringify([]));
            setListQuestions([])
        }
    }

    return (
        <button className="btn btn-danger me-1" onClick={clearList} type="button">
            <i className="bi bi-trash2"></i>
        </button>
    )
}

export default ClearButton