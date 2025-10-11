const dateModal = () => {
	return `
    <dialog id="date-modal">
            <input class="" value="" name="date" id="date" type="date" title="Select A date">
            <div>
                <button type="button" id="date-cancel" >Cancel</button>
                <button type="button" id="date-confirm">Confirm</button>
            </div>
        
    </dialog>
    `
}

export default dateModal
