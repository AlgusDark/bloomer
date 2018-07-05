const Test = Bloomer.default

class App extends React.Component {
  render() {
    return <Test />
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
