class User {
  public notebook: NoteBook[] = [];
  constructor(
    private id: number,
    public name: string,
    private email: string,
    private password: string,
    protected phoneNumber: string,
    private _age: number,
  ) {
    this.age = _age
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 18 || value > 60) throw new Error("invalid age")
      
      this._age = value;
  }

  displayInfo(): void {
    console.log(
      this.id,
      this.name,
      this.email,
      this.password,
      this.phoneNumber,
      this.age,
    );
  }

  addNotebook(notebook: NoteBook): void {
    this.notebook.push(notebook);
  }
}

class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    age: number,
  ) {
    super(id, name, email, password, phoneNumber, age);
  }

  adminManage(): void {
    console.log("admin can manage notes");
  }
}

class Note {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: User,
  ) {}

  preview(): string {
    return this.content.substring(0, 20);
  }
}

class NoteBook {
  private notes: Note[] = [];

  addNote(notes: Note) {
    this.notes.push(notes);
  }
  removeNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}

class Storages<T> {
  private items: T[] = [];

  addItems(items: T): void {
    this.items.push(items);
  }
  removeItems(items: T): void {
    this.items = this.items.filter((i) => i !== items);
  }
  getAllItems(): T[] {
    return this.items;
  }
}

const user1 = new User(
  1,
  "ahmed",
  "dadad@hddhasd",
  "2313hj3h2",
  "9283263235",
  20,
);
const admin1 = new Admin(
  1,
  "s",
  "dadad@hddhasd",
  "2313hj3h2",
  "9283263235",
  20,
);

const notebook1 = new NoteBook();

const note1 = new Note(1, "book lok", "dagshgdahgdagdhagdgdag", user1);

notebook1.addNote(note1);

user1.addNotebook(notebook1);

user1.displayInfo();
admin1.adminManage();
console.log(note1.preview());

const noteStorage = new Storages<Note>();
noteStorage.addItems(note1);

console.log(noteStorage.getAllItems());

console.log(user1.age);


