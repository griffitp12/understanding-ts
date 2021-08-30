class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  } /*  */

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('pete');
/* console.log(textStorage.getItems()) */

const numberStorage = new DataStorage<number>();

/* const objStorage = new DataStorage<object>();

objStorage.addItem({ name: 'pete' });
objStorage.addItem({ name: 'shin' });

objStorage.removeItem({ name: 'pete' });

console.log(objStorage.getItems());
 */

interface CourseGoal {
  title: string,
  description: string,
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
 let courseGoal: Partial<CourseGoal> = {};
 courseGoal.title = title;
 courseGoal.description = description;
 courseGoal.completeUntil = date;
 return courseGoal as CourseGoal
}

const names: Readonly<string[ ]> = ['pete', 'shin']

names.push('mone')
