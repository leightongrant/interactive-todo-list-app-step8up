export const homeIcon = () => {
	return `
    <div class="bi bi-house-fill text-light d-flex flex-column fs-1" role="button" name="home" title="Go To Current Day"><span class="fs-6">Home</span></div>
    `
}

export const calendarIcon = () => {
	return `    
        <div class="bi bi-calendar-event-fill text-light d-flex flex-column fs-1" role="button" name="date" title="Pick A Date">
            <span class="fs-6">Date</span>
        </div>    
    `
}

export const settingsIcon = () => {
	return `
    <div class="bi bi-gear-fill text-light d-flex flex-column fs-1" role="button" name="settings" title="Change Settings"><span class="fs-6">Settings</span></div>
    `
}

export const checkCircleIcon = (id: string) => {
	return `
    <button class="bi bi-check2-circle text-success fs-1 ms-3 completed bg-transparent border-0" role="button" name="completed" title="Mark As Incomplete" id="circle-check-${id}"></button>
    `
}

export const circleIcon = (id: string) => {
	return `
    <button class="bi bi-circle text-secondary fs-1 ms-3 completed bg-transparent border-0" role="button" name="incomplete" title="Mark As Completed" id="circle-${id}"></button>
    `
}

export const editIcon = (id: string) => {
	return `
    <div class="bi bi-pencil-fill text-secondary fs-3" role="button" id="edit-${id}" name="edit" title="Edit Task"></div>
    `
}

export const deleteIcon = (id: string) => {
	return `
    <div class="bi bi-trash text-danger fs-3 mx-3" role="button" id="${id}" name="delete" title="Delete Task"></div>
    `
}

export const database = () => {
	return `
    <i class="bi bi-database fs-1 d-block" title="No Tasks For Today"></i>
    `
}

export const circleArrowUpIcon = () => {
	return `
    <div class="bi bi-arrow-up-circle-fill fs-1 circle-arrow rounded-4" role="button" name="new" title="Add New Task"></div>
    `
}

export const saveIcon = () => {
	return `
    <div class="bi bi-floppy-fill text-secondary fs-3" role="button" name="edit" title="Save Task"></div>
    `
}
