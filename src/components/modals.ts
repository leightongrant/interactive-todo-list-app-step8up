export const dateModal = () => {
	return `
        <div class="modal fade" id="dateModal" tabindex="-1" aria-labelledby="dateModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="dateModalLabel">Pick A Date</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">                     
                        <input type="date" class="form-control" aria-label="Select Date" name="date" id="date">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary ok-btn" data-bs-dismiss="modal">OK</button>
                    </div>        
                </div>
            </div>
        </div>
    `
}

export const settingsModal = () => {
	return `
        <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="settingsModalLabel">Settings</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">                     
                        <input type="date" class="form-control" aria-label="Select Date" name="date" id="date">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary ok-btn" data-bs-dismiss="modal">OK</button>
                    </div>        
                </div>
            </div>
        </div>
    `
}
