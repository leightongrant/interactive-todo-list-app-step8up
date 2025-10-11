const dateModal = () => {
	const date = new Date(Date.now()).toISOString().slice(0, 10)

	return `
    <dialog id="date-modal">
            <input class="" value="${date}" name="date" id="date" type="date" title="Select A date">
            <div>
                <button type="button" id="date-cancel" >Cancel</button>
                <button type="button" id="date-confirm">Confirm</button>
            </div>
        
    </dialog>
    `
}

export default dateModal
