import {Component} from "react";
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { Container } from './App.styles';

export default class App extends Component{
  state = {
  contacts: [],
  name: ''
  }
  render() {
    return (
      <Container> 
        <Section>Phonebook</Section>
        <ContactForm/>
      </Container>
    )
  }
}

