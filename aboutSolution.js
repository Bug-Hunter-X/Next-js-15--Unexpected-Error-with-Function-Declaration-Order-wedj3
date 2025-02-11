```javascript
// pages/aboutSolution.js

export default function About() {
  const message = getAboutMessage();

  return (
    <div>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  );
}

function getAboutMessage() {
  return 'This is the about page.';
}
```
```javascript
//pages/aboutSolution2.js
export default function About() {
  const message = ()=>{
    return 'This is the about page.';
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>{message()}</p>
    </div>
  );
}
```