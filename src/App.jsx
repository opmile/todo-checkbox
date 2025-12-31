import Container from "./components/Container"
import Toolbar from "./components/Toolbar"
import { useState } from "react"
import Modal from "./components/ui/Modal";
import Form from "./components/ui/Form";
import Section from "./components/Section";
import VerticalDivider from "./components/ui/VerticalDvider";
import SectionColumn from "./components/ui/SectionColumn";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ]);
  
  const onToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedTasks = tasks.filter(t => t.completed);
  const pendingTasks = tasks.filter(t => !t.completed);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const addNewTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
    <Container>
      <Toolbar onClick={toggleModal}/>

      {isModalOpen && (
        <Modal
          isOpen={toggleModal}
          onClose={toggleModal}
          title="Enter new task description"
        >
          <Form 
            onSubmit={addNewTask}
            onClose={toggleModal}
          />
        </Modal>
      )}

      <Section>
        <SectionColumn
          title="Pending"
          tasks={pendingTasks}
          onToggleTask={onToggleTask}
        />

        <VerticalDivider/>

        <SectionColumn
          title="Completed"
          tasks={completedTasks}
          onToggleTask={onToggleTask}
        />
      </Section>
    </Container>
    </>
  )
}

export default App