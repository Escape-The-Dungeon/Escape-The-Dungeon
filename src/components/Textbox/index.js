import React from "react";
import "./style.css";
import Story from "./story";
import story from "./story";

class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 1}
        this.story = Story
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(arg) {
        console.log(arg.target.id);
        this.setState({current: arg.target.id})
      }
    render() {
        const storyobj = this.story.story[this.state.current]
        return (
            <section className="container">
                <div id="text-box">{storyobj.blob}

                    <div id="option-buttons" className="btn-grid">
                        {storyobj.options.map((option) => <button onClick={this.handleClick} 
                        id={option.next} className="btn">{option.name}</button>)}
                    </div>
                </div>
            </section>

        )
    }

}

export default Textbox;