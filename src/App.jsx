import Container from "./components/Container"
import Toolbar from "./components/Toolbar"
import { useState } from "react"
import Modal from "./components/ui/Modal";

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
        />
      )}
    </Container>
    </>
  )
}

export default App