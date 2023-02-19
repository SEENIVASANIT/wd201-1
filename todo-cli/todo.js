
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const overd = all.filter((items) => items.dueDate.split("-")[2] < new Date().getDate());
    return overd;
  };

  const dueToday = () => {
    const DT = all.filter((items) => items.dueDate.split("-")[2] === String(new Date().getDate()));
    return DT;
  };

  const dueLater = () => {
    const DL = all.filter((items) => items.dueDate.split("-")[2] > new Date().getDate());
    return DL;
  };

  const toDisplayableList = (list) => {
    const result = list.map((items) => {
        const checkBox = items.completed === true ? "[x]" : "[ ]";
        const displayDatefor = items.dueDate.split("-")[2] === String(new Date().getDate()) ? "" : items.dueDate;
        return `${checkBox} ${items.title} ${displayDatefor}`;
    })
    return result.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
