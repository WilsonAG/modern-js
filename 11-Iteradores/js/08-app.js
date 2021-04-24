let tasks = ['comer', 'dormir', 'codear']

for (const task in tasks) {
  if (Object.hasOwnProperty.call(tasks, task)) {
    const element = tasks[task];
    console.log(element)
  }
}