export const settingsModal = () => {
	return `
    <dialog id="settings-modal" class="rounded-3 border border-2 border-secondary">
            <div class="modal-header p-3 border-1 border-bottom d-flex justify-content-between align-items-center">
                <h1 class="fs-6 fw-bold m-0 p-0">Settings</h1><i class="bi bi-x-lg fw-bold" type="button" id="settings-cancel" title="Close Modal"></i>
            </div>
            <div class="modal-body p-3 d-flex justify-content-around">
                settings go here
            </div>
            <div class="modal-footer p-3">                
                <i class="bi bi-arrow-right-circle-fill fs-1" type="button" id="settings-confirm" title="Save Settings"></i>
            </div>
        
    </dialog>
    `
}

export default settingsModal
