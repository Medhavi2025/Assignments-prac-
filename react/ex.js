// Q1
// import React from 'react';

// const Greeting = ({ name }) => {
//     return <h1>Hello, {name}!</h1>;
// };

// export default Greeting;

// Example usage in App.js:
// <Greeting name="Alice" "

/>

// Q2
// import React from 'react';

// const ProfileCard = ({ name, age, location }) => {
//     return (
//         <div className="profile-card">
//             <h2>{name}</h2>
//             <p>Age: {age}</p>
//             <p>Location: {location}</p>
//         </div>
//     );
// };

// export default ProfileCard;

// Example usage in App.js:
// <ProfileCard name="John Doe" age={30} location="New York" />

// Q3
// import React from 'react';

// const StatusMessage = ({ status }) => {
//     return (
//         <div>
//             {status === 'success' && <p>Operation was successful</p>}
//             {status === 'error' && <p>There was an error</p>}
//         </div>
//     );
// };

// export default StatusMessage;

// Example usage in App.js:
// <StatusMessage status="success" />

// Q4
// import React, { useState } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     );
// };

// export default Counter;

// Example usage in App.js:
// <Counter />

// Q5
// import React, { useState } from 'react';

// const LikeButton = ({ likeCount }) => {
//     const [count, setCount] = useState(likeCount);

//     return (
//         <div>
//             <p>Likes: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Like</button>
//         </div>
//     );
// };

// export default LikeButton;

// Example usage in App.js:
// <LikeButton likeCount={10} />

// Q6
// import React, { useState } from 'react';

// const Timer = ({ start }) => {
//     const [time, setTime] = useState(start);

//     return <p>Time: {time} seconds</p>;
// };

// export default Timer;

// Example usage in App.js:
// <Timer start={60} />

// Q7
// import React from 'react';

// const ColorPicker = ({ onColorChange }) => {
//     return (
//         <input
//             type="color"
//             onChange={(e) => onColorChange(e.target.value)}
//         />
//     );
// };

// export default ColorPicker;

// Example usage in App.js:
// const [color, setColor] = useState("#000000");
// <ColorPicker onColorChange={setColor} />

// Q8
// import React, { useState } from 'react';

// const TextInput = ({ onTextChange }) => {
//     const [text, setText] = useState("");

//     const handleChange = (e) => {
//         setText(e.target.value);
//         onTextChange(e.target.value);
//     };

//     return <input type="text" value={text} onChange={handleChange} />;
// };

// export default TextInput;

// Example usage in App.js:
// const [inputValue, setInputValue] = useState("");
// <TextInput onTextChange={setInputValue} />


// Q9
// import React from 'react';

// const ToggleSwitch = ({ toggleState }) => {
//     return <button onClick={toggleState}>Toggle</button>;
// };

// export default ToggleSwitch;

// Example usage in App.js:
// const [isOn, setIsOn] = useState(false);
// const toggle = () => setIsOn(!isOn);
// <ToggleSwitch toggleState={toggle} />

// Q10
import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

export default TodoList;

// Example usage in App.js:
// const todos = ["Buy groceries", "Walk the dog", "Finish homework"];
// <TodoList todos={todos} />
