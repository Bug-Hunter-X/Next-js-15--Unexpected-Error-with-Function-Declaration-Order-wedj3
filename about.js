```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the function is not declared
  // before the return statement
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