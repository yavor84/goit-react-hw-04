import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <header>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, actions) => {
            const trimmedQuery = values.query.trim();

            if (!trimmedQuery) {
              toast.error('Please enter a search term');
              return;
            }

            onSubmit(trimmedQuery);
            actions.resetForm();
          }}
        >
          <Form>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
      <Toaster position="top-right" />
    </>
  );
};
export default SearchBar;
