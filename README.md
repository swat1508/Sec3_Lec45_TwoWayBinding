Sec3-Lec45 ==> Adding Two Way Binding
=====================================
Earlier we changed lot of name/age dynamically,now we will see what if we want
to change name on its own,Means there is a textbox and whatever we type in it
that value should be the updated name.
So lets say in Person component we have another element as textbox
We will use onChange event to execute function "nameChangedHandler" in App.js file.
In this nameChangedHandler we will change the state - name of person type in textbox.As of now for this lecture, we will change the name of Manu only
with whatever typed in textbox

So, in App.js
-------------
(a) new function added - nameChangedHandler
nameChangedHandler = (event) => {
  this.setState({
    persons:[
      {name: 'Max', age:28},
      {name:event.target.value , age:29},
      {name:'Stephanie' , age:26}
    ]
  })
}

(b) changed event added
<PersonProp 
name={this.state.persons[1].name} 
age={this.state.persons[1].age} 
click={this.switchNameHandler.bind(this,'Max !!')}
changed={this.nameChangedHandler}
> My Hobby : Racing
</PersonProp>

In Person_Props.js, add textbox with "onChange" and "value"
----------------------------------------------------------
const personProp = (props) => {
  return (
    <div>
    <p onClick={props.click}> I am {props.name} and I am { props.age} years old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};


With these changes, if we see Manu and type something in textbox
it will update there.So here we are dynamically updating .
When we are changeing the value in textbox, we are propagating the change so that we can update the state. This is "two way binding".


Note : We may see a warning as below which can be ignored
Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. 