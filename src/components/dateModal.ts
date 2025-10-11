const dateModal = () => {
	const date = new Date(Date.now()).toISOString().slice(0, 10)

	return `
    <dialog id="date-modal" class="rounded-3 border border-2 border-secondary">
            <div class="modal-header p-3 border-1 border-bottom d-flex justify-content-between align-items-center">
                <h1 class="fs-6 fw-bold m-0 p-0">Pick A Date</h1><i class="bi bi-x-lg fw-bold" type="button" id="date-cancel"></i>
            </div>
            <div class="modal-body p-3 d-flex justify-content-around">
                <input class="" value="${date}" name="date" id="date" type="date" title="Select A date">
            </div>
            <div class="modal-footer p-3">                
                <i class="bi bi-arrow-right-circle-fill fs-1" type="button" id="date-confirm"></i>
            </div>
        
    </dialog>
    `
}

export default dateModal
