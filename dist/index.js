"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phoneNumber;
    _age;
    notebook = [];
    constructor(id, name, email, password, phoneNumber, _age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this._age = _age;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 18 || value > 60)
            throw new Error("incalid age");
        this._age = value;
    }
    displayInfo() {
        console.log(this.id, this.name, this.email, this.password, this.phoneNumber, this.age);
    }
    addNotebook(notebook) {
        this.notebook.push(notebook);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phoneNumber, age) {
        super(id, name, email, password, phoneNumber, age);
    }
    adminManage() {
        console.log("admin can manage notes");
    }
}
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        return this.content.substring(0, 20);
    }
}
class NoteBook {
    notes = [];
    addNote(notes) {
        this.notes.push(notes);
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
}
class Storages {
    items = [];
    addItems(items) {
        this.items.push(items);
    }
    removeItems(items) {
        this.items = this.items.filter((i) => i !== items);
    }
    getAllItems() {
        return this.items;
    }
}
const user1 = new User(1, "ahmed", "dadad@hddhasd", "2313hj3h2", "9283263235", 20);
const admin1 = new Admin(1, "s", "dadad@hddhasd", "2313hj3h2", "9283263235", 20);
const notebook1 = new NoteBook();
const note1 = new Note(1, "book lok", "dagshgdahgdagdhagdgdag", user1);
notebook1.addNote(note1);
user1.addNotebook(notebook1);
user1.displayInfo();
admin1.adminManage();
console.log(note1.preview());
const noteStorage = new Storages();
noteStorage.addItems(note1);
console.log(noteStorage.getAllItems());
