export const settingsModal = () => {
	return `
    <dialog id="settings-modal" class="rounded-3 border border-2 border-secondary">
            <div class="modal-header p-3 border-1 border-bottom d-flex justify-content-between align-items-center">
                <h1 class="fs-4 fw-bold m-0 p-0">Settings</h1><i class="bi bi-x-lg fw-bold" type="button" id="settings-cancel" title="Close Modal"></i>
            </div>
            <form class="settings-form">
                <div class="modal-body p-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="theme" id="default" value="default" title="Select Default Theme" checked>
                        <label class="form-check-label" for="default">
                            Default
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="theme" id="crimson" value="crimson" title="Select Crimson Theme" checked="true">
                        <label class="form-check-label" for="crimson">
                            Crimson
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="theme" id="hot-pink" value="hot-pink" title="Select Hot Pink Theme" >
                        <label class="form-check-label" for="hot-pink">
                            Hot Pink
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="theme" id="midnight-blue" value="midnight-blue" title="Select Midnight Blue Theme">
                        <label class="form-check-label" for="midnight-blue">
                            Midnight Blue
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="theme" id="dark" value="dark" title="Select Dark Theme">
                        <label class="form-check-label" for="dark">
                            Dark
                        </label>
                    </div>
                </div>
            </form>
            <div class="modal-footer p-3">                
                <i class="bi bi-arrow-right-circle-fill fs-1" type="button" id="settings-confirm" title="Save Settings"></i>
            </div>        
    </dialog>
    `;
};

export default settingsModal;
