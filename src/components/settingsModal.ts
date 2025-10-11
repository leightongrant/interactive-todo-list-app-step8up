export const settingsModal = () => {
	return `
        <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="settingsModalLabel">Settings</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">                     
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary setting-ok-btn" data-bs-dismiss="modal">OK</button>
                    </div>        
                </div>
            </div>
        </div>
    `
}

export default settingsModal
