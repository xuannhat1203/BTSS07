class Student {
    id: number;
    name: string;
    class: string;
    constructor(id: number, name: string, className: string) {
      this.id = id;
      this.name = name;
      this.class = className;
    }
  }
  function createStudentArray(students: Student[], className: string) {
    console.log(studentArray);
    
  }
  let studentArray: Student[] = [
    new Student(1, "John", "Class A"),
    new Student(2, "Jane", "Class B"),
    new Student(3, "Mike", "Class A"),
  ];
  let className = "Class A";
  createStudentArray(studentArray, className);