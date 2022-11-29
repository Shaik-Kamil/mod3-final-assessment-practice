import React, { useState, useEffect } from 'react';

export default function Main() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [single, setSingle] = useState({});
  const [name, setName] = useState('');
  const [input, setInput] = useState({});

  const handleChoice = (e) => {
    const chosen = e.target.value;
    console.log(chosen);
    const found = data.find((species) => species.id === chosen);
    setSingle(found || {});
  };

  const doesNotWork = (e) => {
    e.preventDefault();
    const found = data.find(
      (species) => species.name.toLowercase() === name.toLowerCase()
    );

    setInput(found || {});
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.find(
      (species) => species.name.toLowerCase() === name.toLowerCase()
    );
    setInput(found || {});
  };

  useEffect(() => {
    const url = `https://ghibliapi.herokuapp.com/species`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      <ul>
        {show &&
          data &&
          data.map((item) => (
            <li key={item.id}>
              Name: {item.name} ID: {item.id}
            </li>
          ))}
      </ul>
      <hr />
      <div>
        <select onChange={handleChoice}>
          <option value=""></option>
          {data.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {choice.name}
            </option>
          ))}
        </select>
        {single.id && (
          <div>
            <p>{single.name}</p>
            <p>{single.hair_colors}</p>
          </div>
        )}
      </div>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Human, spirit"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {input.id && (
          <div>
            <p>{input.name}</p>
            <p>{input.hair_colors}</p>
          </div>
        )}
      </div>
    </div>
  );
}
