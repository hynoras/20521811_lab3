import * as React from "react";

class MyComponent extends React.Component {
//   state = {
//     first: false,
//     second: true,
//   };

    state = {
        heading: "React Awesomecause (Busy)",
        content:"Loading...",
    }

    constructor(){
        super()
        setTimeout(()=>{
            this.setState({
                heading: "ReactAwesomecause",
                content: "Done!",
            })
        },3000);
    }

  render() {
    const { heading, content } = this.state;

    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}

export default MyComponent;
