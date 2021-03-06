import React from "react";
import "./style.css";
import Story from "./story";

class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 }
        this.story = Story
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        console.log(id);
        this.setState({ current: id })

    }
    render() {
        const storyobj = this.story[this.state.current]
        console.log(storyobj.options[1].next)

        return (
            <section className="container scroll">
                <img id="story-img" src={storyobj.img} />
                <div id="text-box" className="scroll">{storyobj.blob}
                    <div id="option-buttons" className="btn-grid">

                        <button onClick={() => this.handleClick(storyobj.options[1].next)} className="btn-danger">{storyobj.options[1].name}</button>
                        <button onClick={() => this.handleClick(storyobj.options[0].next)} className="btn-danger">{storyobj.options[0].name}</button>
                    </div>
                </div>
            </section>
        )
    }
}
export default Textbox;