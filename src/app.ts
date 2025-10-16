import header from "./components/header.js";
import footer from "./components/footer.js";
import layout from "./components/layout.js";
import { renderMainContent, renderTasks, handleDelete, handleSave, saveNewTask, markCompleted } from "./components/handlers.js";
declare const bootstrap: any;

const app = document.querySelector("#app") as HTMLDivElement;
const appContainer = document.querySelector(".app-container") as HTMLDivElement;
appContainer.innerHTML = `${layout(header(), footer())}`;
app.append(appContainer);

let timestamp = Date.now();
const mainContent = document.querySelector(".main-content") as HTMLDivElement;
const body = document.querySelector("body") as HTMLBodyElement;

// Set Theme
const setAtiveTheme = (themeName: string) => {
	const radioButtons = document.querySelectorAll("input[type=radio]") as NodeListOf<HTMLInputElement>;
	radioButtons.forEach((radio) => {
		console.log(themeName === radio.id);
		if (themeName !== radio.id) {
			radio.removeAttribute("checked");
		} else {
			radio.setAttribute("checked", "");
		}
	});
};

try {
	const themeName = localStorage.getItem("theme");
	if (!themeName) {
		body.classList.add("default");
		setAtiveTheme("default");
	} else {
		body.classList.add(themeName);
		setAtiveTheme(themeName);
	}
} catch (error: any) {
	console.log(error.message);
}

// Set Date
try {
	const savedDay = localStorage.getItem("day");
	if (!savedDay) {
		timestamp = Date.now();
	}
	if (typeof savedDay === "string") {
		timestamp = parseInt(savedDay);
		renderMainContent(mainContent, renderTasks(timestamp));
	}
} catch (error: any) {
	console.log(error.message);
}

// Render Content
renderMainContent(mainContent, renderTasks(timestamp));

// Main Buttons
const calendarButton = document.querySelector("div[name=date]") as HTMLButtonElement;
const homeButton = document.querySelector("div[name=home]") as HTMLButtonElement;
const settingsButton = document.querySelector("div[name=settings]") as HTMLButtonElement;
const dateModal = document.querySelector("#date-modal") as HTMLDialogElement;
const cancelDateDialog = document.querySelector("#date-cancel") as HTMLButtonElement;
const confirmDateDialog = document.querySelector("#date-confirm") as HTMLButtonElement;
const settingsModal = document.querySelector("#settings-modal") as HTMLDialogElement;
const cancelSettingsDialog = document.querySelector("#settings-cancel") as HTMLButtonElement;
const confirmSettingsDialog = document.querySelector("#settings-confirm") as HTMLButtonElement;
const settingsForm = document.querySelector(".settings-form") as HTMLFormElement;
const dateInput = document.querySelector("input[name=date]") as HTMLInputElement;
const newTaskBtn = document.querySelector("div[name=new]") as HTMLDivElement;
const newTaskInput = document.querySelector("#new") as HTMLInputElement;

// Launch Date Picker
calendarButton.addEventListener("click", () => {
	dateModal.showModal();
});

// Home Button - Sets date to current day
homeButton.addEventListener("click", () => {
	const timestamp = Date.now();
	localStorage.setItem("day", timestamp.toString());
	renderMainContent(mainContent, renderTasks(timestamp));
	deleteTask();
});

// Close Date Picker
cancelDateDialog.addEventListener("click", () => dateModal.close());

// Confirm Date Pick and re-render page
confirmDateDialog.addEventListener("click", () => {
	const [year, month, day] = dateInput.value.split("-");
	const selectedTimestamp = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();
	localStorage.setItem("day", selectedTimestamp.toString());
	renderMainContent(mainContent, renderTasks(selectedTimestamp));
	deleteTask();
	dateModal.close();
});

// Launch Settings
settingsButton.addEventListener("click", () => {
	settingsModal.showModal();
});
// Close Settings
cancelSettingsDialog.addEventListener("click", () => settingsModal.close());

// Confirm and save settings. Updates interface to new theme
confirmSettingsDialog.addEventListener("click", () => {
	settingsForm.requestSubmit();
});

settingsForm.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	const target = e.target as HTMLFormElement;
	const themeName = target.theme.value;
	body.removeAttribute("class");
	body.classList.add(target.theme.value);
	localStorage.setItem("theme", themeName);
	settingsModal.close();
});

// Delete Tasks
const deleteTask = () => {
	const deleteBtns = document.querySelectorAll("div[name=delete]") as NodeListOf<HTMLButtonElement>;
	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e: Event) => {
			try {
				const target = e.target as HTMLButtonElement;
				if (!target) throw new Error("Button element not found!");
				const id = target.id;

				const popover = new bootstrap.Popover(btn, {
					animation: true,
					content: `<button class="bi bi-check btn btn-outline-secondary btn-sm" type="button" name="cancel-delete">cancel</button><button class="bi bi-check btn btn-outline-warning btn-sm" type="button" name="confirm-delete" id="${id}">Delete?</button>`,
					delay: { show: 0, hide: 0 },
					html: true,
					allowList: {
						...bootstrap.Tooltip.Default.allowList,
						button: ["type", "class", "onclick", "role", "aria-label", "name", "id"],
					},
					trigger: "manual",
					position: "top",
				});

				popover.show();

				const handleClick = (e: Event) => {
					const target = e.target as HTMLButtonElement;
					if (target) {
						if (target.name === "confirm-delete") {
							handleDelete(target.id);
							renderMainContent(mainContent, renderTasks(timestamp));
							deleteTask();
							editTask();
							markTask();
							document.removeEventListener("click", handleClick);
							popover.hide();
						}

						if (target.name === "cancel-delete") {
							document.removeEventListener("click", handleClick);
							popover.hide();
						}
					}
				};
				document.addEventListener("click", handleClick);
			} catch (error: any) {
				console.log(error.message);
			}
		});
	});
};

// Edit Tasks
const editTask = () => {
	const editBtns = document.querySelectorAll("div[name=edit]") as NodeListOf<HTMLButtonElement>;
	editBtns.forEach((btn: HTMLButtonElement) => {
		let editMode = false;
		btn.addEventListener("click", (e: Event) => {
			const target = e.target as HTMLDivElement;
			const id = target.id.slice(5);
			const nodes = target.parentElement?.childNodes as NodeListOf<HTMLElement>;
			const icon = nodes[5] as HTMLDivElement;
			const textarea = nodes[3] as HTMLTextAreaElement;

			editMode = !editMode;

			if (editMode) {
				textarea.removeAttribute("readonly");
				textarea.focus();
				textarea.setSelectionRange(textarea.value.length, textarea.value.length);
				icon.classList.remove("bi-pencil-fill");
				icon.classList.add(...["bi-floppy-fill", "text-info"]);
				return;
			}

			textarea.setAttribute("readonly", "");
			icon.classList.remove(...["bi-floppy-fill", "text-info"]);
			icon.classList.add(...["bi-pencil-fill"]);
			handleSave(id, textarea.value);
		});
	});
};

// Save new tasks
newTaskBtn.addEventListener("click", () => {
	try {
		//Checks for invalid input before creating new tasks
		const newTask = newTaskInput.value;
		if (!newTask) throw new Error("Please enter a new task");
		const re = /[a-zA-Z0-9]+/gi;
		const taskTitle = newTask.match(re)?.join(" ");
		if (!taskTitle) throw new Error("Invalid title, only text and number allowed");
		saveNewTask(taskTitle);
		newTaskInput.value = "";
		renderMainContent(mainContent, renderTasks(timestamp));
		deleteTask();
		editTask();
		markTask();
	} catch (error: any) {
		// Provides feedback on placeholder
		const style = document.querySelector("style") as HTMLStyleElement;
		if (style) {
			const re = /placeholder/gi;
			if (re.test(style.innerHTML)) return;
			style.innerHTML += `#new::placeholder {
		 		color: red;
		 		opacity: 1;
		 	}`;
		} else {
			const style = document.createElement("style");
			style.innerHTML = `
			#new::placeholder {
				color: red;
				opacity: 1;
			}`;
			document.head.appendChild(style);
		}
		newTaskInput.placeholder = error.message;
		console.log(error.message);
	}
});

// Check or uncheck completed tasks
const markTask = () => {
	const completedBtns = document.querySelectorAll(".completed") as NodeListOf<HTMLButtonElement>;
	completedBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const target = e.target as HTMLButtonElement;
			const id = target.name === "incomplete" ? target.id.slice(7) : target.id.slice(13);
			markCompleted(id);
			renderMainContent(mainContent, renderTasks(timestamp));
			markTask();
			editTask();
			deleteTask();
		});
	});
};

editTask();
deleteTask();
markTask();
