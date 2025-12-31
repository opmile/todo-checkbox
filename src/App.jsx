import Container from "./components/Container"
import Toolbar from "./components/Toolbar"
import { useState } from "react"
import Modal from "./components/ui/Modal";
import Form from "./components/ui/Form";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
    <Container>
      <Toolbar onClick={toggleModal}/>
      {isModalOpen && (
        <Modal
          isOpen={toggleModal}
          onClose={toggleModal}
          title="Create New Task"
        >
          <Form onSubmit={toggleModal}/>
        </Modal>
      )}
    </Container>
    </>
  )
}

export default App