import s from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact }) {
    const dispatch = useDispatch();
  return (
    <li className={s.card}>
            <div className={s.infoblock}>
                <div className={s.row}>

                    <IoMdPerson className={s.icon} />
                    <span>{contact.name}</span>
                </div>
                <div className={s.row}>
                    <MdPhone className={s.icon} />
                    <span>{contact.number}</span>
                </div>
            </div>
            <button
                className={s.deleteBtn}
                type='button'
                onClick={() => dispatch(deleteContact(contact.id))}
            >
                Delete
            </button>
        </li>
  )
}

export default Contact