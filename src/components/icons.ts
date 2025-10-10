export const homeIcon = () => {
	return `
    <div class="bi bi-house-fill text-light d-flex flex-column fs-1" role="button" name="home"><span class="fs-6">Home</span></div>
    `
}
//<label for="date"><div class="bi bi-calendar-event-fill text-light d-flex flex-column fs-1" role="button" name="date"><span class="fs-6">Date</span></div></label>
//<input class="" value="2025-10-10" name="date" id="date" type="date" title="Select A date">

export const calendarIcon = () => {
	return `    
        <div class="bi bi-calendar-event-fill text-light d-flex flex-column fs-1" role="button" name="date" data-bs-toggle="modal" data-bs-target="#dateModal">
            <span class="fs-6">Date</span>
        </div>    
    `
}

export const settingsIcon = () => {
	return `
    <div class="bi bi-gear-fill text-light d-flex flex-column fs-1" role="button" name="settings" data-bs-toggle="modal" data-bs-target="#settingsModal" ><span class="fs-6">Settings</span></div>
    `
}

export const checkCircleIcon = () => {
	return `
    <div class="bi bi-check2-circle text-success fs-1 ms-3" role="button" name="completed" title="Mark As Incomplete"></div>
    `
}

export const circleIcon = () => {
	return `
    <div class="bi bi-circle text-secondary fs-1 ms-3" role="button" name="completed" title="Mark As Completed"></div>
    `
}

export const editIcon = () => {
	return `
    <div class="bi bi-pencil-fill text-secondary fs-3" role="button" name="edit" title="Edit Task"></div>
    `
}

export const deleteIcon = () => {
	return `
    <div class="bi bi-trash text-danger fs-3 mx-3" role="button" name="delete" title="Delete Task"></div>
    `
}

export const database = () => {
	return `
    <i class="bi bi-database fs-1 d-block"></i>
    `
}

export const circleArrowUpIcon = () => {
	return `
    <div class="bi bi-arrow-up-circle-fill fs-1 circle-arrow rounded-4" role="button" name="new" title="Add New Task"></div>
    `
}

export const saveIcon = () => {
	return `
    <div class="bi bi-floppy-fill text-secondary fs-3" role="button" name="edit" title="Edit Task"></div>
    `
}
