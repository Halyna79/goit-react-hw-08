import s from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectError, selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
    const error = useSelector(selectError)
    const filteredContacts = useSelector(selectFilteredContacts)
    if (!filteredContacts.length && !error) 
        return <p>You don't have any contacts yet. Start by adding one!</p>

    return (
        <ul className={s.list}>
            {filteredContacts?.map(contact => (
                <Contact
                    contact={contact}
                    key={contact.id}
                />
            ))}
        </ul>
    );
};

export default ContactList;
