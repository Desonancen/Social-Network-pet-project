import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const Dialogs = (props) => {

   let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.messages.map(m =><Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
    }

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
      {dialogsElements}
        </div>
        <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
);
}

const maxLenght50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} validate={[required,maxLenght50]} name="newMessageBody" placeholder="Enter your message"/>
          <div><button>Send</button></div>
        </form>
  )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;