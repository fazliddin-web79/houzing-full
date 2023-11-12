import UserProfile from "../components/Contact";
import CreateBookForm from "../components/NewBook";
import Properties from "../components/Properties";

export const navbar = [
  { id: 1, title: "Add new", path: "add-new", element: <CreateBookForm /> },
  { id: 2, title: "Books", path: "properties", element: <Properties /> },
  { id: 3, title: "Contacts", path: "contacts", element: <UserProfile /> },
];
