export function Person({ name, sex, weight }) {
    return (
      <>
        <h1>My Name is{name}</h1>
        <p> Im a {sex}</p>
        <h2>I weigh {weight}</h2>
      </>
    );
  }