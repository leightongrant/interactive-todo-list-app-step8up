import type { TodoData } from "../types.js";
import generateId from "../utils/generateId.js";
import todoItem from "./todoItem.js";
import noTasks from "./noTasks.js";

const body = document.querySelector("body") as HTMLBodyElement;

// Set Date
export const getLastDateViewed = (): number => {
	try {
		const savedDay = localStorage.getItem("day");
		if (savedDay) {
			return parseInt(savedDay);
		}
	} catch (error: any) {
		console.log(error.message);
	}
	return Date.now();
};

// Set Theme
export const setTheme = () => {
	const setAtiveTheme = (themeName: string) => {
		const radioButtons = document.querySelectorAll("input[type=radio]") as NodeListOf<HTMLInputElement>;
		radioButtons.forEach((radio) => {
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
};

// Handle Completed Tasks
export const markCompleted = (id: string) => {
	try {
		const todoData = localStorage.getItem("todos");
		if (!todoData) throw new Error("Data not found!");
		const data = JSON.parse(todoData) as TodoData[];
		const newData = data.map((todo: TodoData) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		localStorage.setItem("todos", JSON.stringify(newData));
	} catch (error: any) {
		console.log(error.message);
	}
};

// Handles saving new tasks
export const saveNewTask = (title: string) => {
	let newTask: TodoData = {
		id: generateId(),
		title: title,
		isCompleted: false,
		createAt: Date.now(),
	};

	try {
		const currentDate = localStorage.getItem("day");
		if (currentDate) {
			newTask = { ...newTask, createAt: parseInt(currentDate) };
		}

		const todoData = localStorage.getItem("todos");
		if (!todoData) {
			localStorage.setItem("todos", JSON.stringify([newTask]));
			return;
		}

		const data = JSON.parse(todoData) as TodoData[];
		data.push(newTask);
		localStorage.setItem("todos", JSON.stringify(data));
	} catch (error: any) {
		console.log(error.message);
	}
};

// Delete Handler
export const handleDelete = (id: string) => {
	try {
		const todoData = localStorage.getItem("todos");
		if (!todoData) throw new Error("Todo data not found in localstorage");
		const data = JSON.parse(todoData) as TodoData[];
		const newData = data.filter((todo: TodoData) => todo.id !== id);
		localStorage.setItem("todos", JSON.stringify(newData));
	} catch (error: any) {
		console.log(error.message);
	}
};

// Handles save when task is edited
export const saveEditedTask = (id: string, text: string) => {
	try {
		const todoData = localStorage.getItem("todos");
		if (!todoData) throw new Error("Tasks not found");
		const todos = JSON.parse(todoData) as TodoData[];
		const selectedTask = todos.find((task: TodoData) => task.id === id) as TodoData;
		const editedTask = { ...selectedTask, title: text };
		const newData = todos.filter((todo: TodoData) => todo.id !== id);
		newData.push(editedTask);
		localStorage.setItem("todos", JSON.stringify(newData));
	} catch (error: any) {
		console.log(error.message);
	}
};

// Render tasks
export const renderTasks = (timestamp = Date.now()): string => {
	const currentDaySpan = document.querySelector(".current-day") as HTMLSpanElement;
	currentDaySpan.innerText = new Date(timestamp).toDateString();
	const date = new Date(timestamp).toLocaleDateString();
	let todoItems = "";
	try {
		const todoData = localStorage.getItem("todos");
		if (!todoData) {
			localStorage.setItem("todos", JSON.stringify([]));
			return noTasks();
		}
		const data = JSON.parse(todoData) as TodoData[];
		if (data.length === 0) return noTasks();

		const filteredData = data.filter((task: TodoData) => {
			const taskDate = new Date(task.createAt).toLocaleDateString();
			return taskDate === date;
		});
		if (filteredData.length === 0) return noTasks();
		filteredData
			.sort((x: TodoData, y: TodoData) => y.createAt - x.createAt)
			.forEach((task: TodoData) => {
				todoItems += todoItem(task);
			});
		return `<div class="d-flex flex-column gap-3">${todoItems}</div>`;
	} catch (error: any) {
		console.log(error.message);
	}
	return noTasks();
};

// Renders Page
export const renderMainContent = (container: HTMLDivElement, content: string) => {
	container.innerHTML = "";
	container.innerHTML = content;
};
