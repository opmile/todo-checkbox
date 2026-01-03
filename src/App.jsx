import Container from "./components/Container";
import Toolbar from "./components/Toolbar";
import { useState } from "react";
import Modal from "./components/ui/Modal";
import Form from "./components/ui/Form";
import Section from "./components/Section";
import Divider from "./components/ui/Divider";
import SectionColumn from "./components/ui/SectionColumn";
import EmptyState from "./components/ui/EmptyState";

function App() {
  const [tasks, setTasks] = useState([]);

  const onToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((t) => t.completed);
  const pendingTasks = tasks.filter((t) => !t.completed);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addNewTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Container>
        <Toolbar onClick={toggleModal} />

        {isModalOpen && (
          <Modal
            isOpen={toggleModal}
            onClose={toggleModal}
            title="Enter new task description"
          >
            <Form onSubmit={addNewTask} onClose={toggleModal} />
          </Modal>
        )}

        {
          tasks.length === 0 && (
            <EmptyState message="No tasks available. Please add a new task." />
        )}

        { tasks.length > 0 && (
          <Section>
            <SectionColumn
              title="Pending"
              tasks={pendingTasks}
              onToggleTask={onToggleTask}
            />

            <Divider />

            <SectionColumn
              title="Completed"
              tasks={completedTasks}
              onToggleTask={onToggleTask}
            />
          </Section>
        )}
      </Container>
    </>
  );
}

export default App;
