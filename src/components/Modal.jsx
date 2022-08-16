import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const modalComponent = useSelector(state => state.modalComponent);

  useEffect(() => {
    // ovo se poziva sam okad se modalComponent promeni
    if (modalComponent) {
      // ako imamo modalcomponent stavljamo css klasu modal-opened na body
      document.body.classList.add("modal-opened"); // cist JS
    } else {
      // ako je null uklanjamo klasu i time zatvaramo modal
      document.body.classList.remove("modal-opened"); // cist JS
    }
  }, [modalComponent]);

  const handleModalClose = (e)=> {
    dispatch({
      type: 'MODAL_CLOSE'
    })
  };

  return (
    <div className="modal-overlay">
      <div className="modal-panel">
        <div className="modal-close" onClick={handleModalClose}>&times;</div>
        <div className="modal-content">
          {modalComponent}
        </div>

      </div>
    </div>
  )
};
export default Modal;