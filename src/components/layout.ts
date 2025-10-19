import newTask from "./newTask.js";
import dateModal from "./dateModal.js";
import settingsModal from "./settingsModal.js";

const layout = (header: string, footer: string): string => {
	return `
    <div class="fixed-top z-0 bg-white" style="height: 64px">
    </div>
    <header class="sticky-top">
        <div class="container-fluid">
            <div class="header-content py-3 px-5">
                ${header}
            </div>
        </div>
    </header>
    <main class="overflow-y-none rounded-5">
        <div class="container-fluid d-grid content-wrapper">
            <div class="new-task-wrapper px-xl-5 py-4">
                <div class="input-error ms-2 mb-1 text-danger text-center fw-bold"></div>
                <div class="new-task d-flex rounded-4 pe-3 align-items-center">                    
                    ${newTask()}
                </div>
            </div>            
            <div class="main-content px-xl-5 py-4 h-100">
            </div>
            ${dateModal()}
            ${settingsModal()}
                     
        </div>
    </main>
    <footer class="sticky-bottom text-light py-4">
        <div class="container-fluid">
            <div class="footer-content d-flex gap-5 flex-fill">
                ${footer}
            </div>
        </div>
    </footer>
    <div class="fixed-bottom z-0 bg-white" style="height: 64px">
    </div>

`;
};

export default layout;
