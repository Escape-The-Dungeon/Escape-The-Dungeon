import React from "react";
import "./style.css";
import Story from "./story";
import story from "./story";

class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0}
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
            <section className="container scroll">
                <div id="text-box" className="scroll">{storyobj.blob}

                    <div id="option-buttons" className="btn-grid">
                        {storyobj.options.map((option) => <button onClick={this.handleClick} 
                        id={option.next} className="btn-danger">{option.name}</button>)}
                    </div>
                </div>
            </section>

        )
    }

}

export default Textbox;