class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, Roll No: ${this.rollNo}`);
  }
}

const s1 = new Student("Prathamesh", 101);
const s2 = new Student("Sneha", 102);

s1.introduce();
s2.introduce();
