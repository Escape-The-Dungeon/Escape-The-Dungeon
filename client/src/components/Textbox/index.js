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

    videoPage() {
        window.location.href = '/video'
    }
    render() {
        const storyobj = this.story[this.state.current]
        console.log(storyobj.options[1].next)

        let booten;
        if (storyobj.options[0].next == 0) {
            booten = <button onClick={() => this.videoPage()} className="btn-danger">{storyobj.options[1].name}</button>
        } else {
            booten = <button onClick={() => this.handleClick(storyobj.options[1].next)} className="btn-danger">{storyobj.options[1].name}</button>
        }

        return (
            <section className="col-md-12">
                <img id="story-img" src={storyobj.img} />
                <div id="text-box" className="col-md-12">{storyobj.blob}
                    <div id="option-buttons" className="btn-grid">
                        <button onClick={() => this.handleClick(storyobj.options[0].next)} className="btn-danger">{storyobj.options[0].name}</button>
                        {booten}
                    </div>
                </div>
            </section>
        )
    }
}

export default Textbox;