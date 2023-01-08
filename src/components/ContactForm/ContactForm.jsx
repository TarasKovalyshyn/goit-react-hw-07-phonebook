import css from './ContactForm.module.css';

import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState('');

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  // аналогічний запис як "handleNumberChange, handleNameChange "
  // const handleChange = e => {
  //   const { name, number } = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);

  //       break;
  //     case 'number':
  //       setNumber(number);
  //     default:
  //       console.warn(`тип поля name -$(name) не обробляється`);
  //   }
  // };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.lable}>
          Name
          <input
            className={css.inputContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className={css.lable}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;

// class ContactForm extends Component {

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
// e.preventDefault();
//     const { name, number } = this.state;

//     this.props.onSubmit({ name, number });
//     this.reset();
//   };

// reset = () => {
//   this.setState({ name: '', number: '' });
// };

//   render() {
// return (
//   <div>
//     <form className={css.form} onSubmit={this.handleSubmit}>
//       <label className={css.lable}>
//         Name
//         <input
//           className={css.inputContact}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//       </label>
//       <label className={css.lable}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={this.state.number}
//           onChange={this.handleChange}
//         />
//       </label>
//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   </div>
// );
//   }
// }

// export default ContactForm;


