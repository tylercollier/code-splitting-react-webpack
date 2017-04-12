import React from 'react';

// const About = () => <div>About</div>;

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      MyComponent: undefined,
    }
  }

  componentWillMount() {
    setTimeout(() => {
      System.import('./MyComponent').then(module => {
        setTimeout(() => {
          this.setState({ MyComponent: module.default })
        }, 1000)
      })
    }, 500)
  }

  render() {
    const { MyComponent } = this.state
    if (MyComponent) {
      return (
        <div>
          <h1>About</h1>
          <MyComponent />
        </div>
      )
    }
    return <div>Loading MyComponent</div>
  }
}

export default About;
