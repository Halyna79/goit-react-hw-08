import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Typography from '@mui/material/Typography';
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { useState } from "react";

function ContactsPage() {
  const [editedContactId, setEditeeditedContactId] = useState(null);
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null;

  if (!isLogged)
    return <Typography>Login to get access to your contacts.</Typography>;

  return (
    <div>
      <ContactForm
        editedContactId={editedContactId}
        setEditeeditedContactId={setEditeeditedContactId}
      />

      <ContactList setEditeeditedContactId={setEditeeditedContactId} />
    </div>
  );
}

export default ContactsPage;