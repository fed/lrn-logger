# Logger

Simple logger API to keep track of random values generated dynamically by Items API and analyse their frequency.

## Running the API

```
npm start
```

## Logging values

```js
const itemsApp = LearnosityItems.init(window.activity, {
  readyListener() {
    const nodes = document.querySelectorAll('.lrn_stimulus_content > span > strong');
    const values = Array.from(nodes).map(node => Number(node.textContent));

    fetch(`http://localhost:6789/?values=${values}`).then(() => {
      location.reload();
    });
  }
});
```

## Retrieving logged values

Just hit `http://localhost:6789/log`.
