const Test = Bloomer.default

class App extends React.Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
