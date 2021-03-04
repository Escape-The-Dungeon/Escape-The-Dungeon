// import React from "react";
// import "./style.css";
// import Story from "./story";

// console.log(Story);
// console.log(Story[0])
// console.log(Story[0].blob)
// class Textbox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { current: 0 }

//         this.story = Story
//         this.handleClick = this.handleClick.bind(this);
        

//     }
//     handleClick(id) {
//         console.log(id);

//         // this.setState({ current: id })
//     }
//     render() {
//         const storyobj = this.story[this.state.current]
//         console.log(storyobj)
//         return (
//             <section className="container scroll">
//                 <div id="text-box" className="scroll">{storyobj.blob}

//                     <div id="option-buttons" className="btn-grid">
//                         {/* {storyobj.options.map((option) => <button onClick={this.handleClick}
//                             id={option.next} className="btn-danger">{option.name}</button>)} */}
//                         <button onClick={()=>{this.handleClick(storyobj.options[1].next)}} className="btn-danger">{storyobj.options[1].name}</button>
//                         <button onClick={()=>{this.handleClick(storyobj.options[0])}} className="btn-danger">{storyobj.options[0].name}</button>


//                     </div>
//                 </div>
//             </section>

//         )
//     }

// }

// export default Textbox;

import React from "react";
import "./style.css";
import Story from "./story";
// console.log(Story);
// console.log(Story[0])
// console.log(Story[0].blob)
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
        // console.log(storyobj.blob)
        return (
            <section className="container scroll">
                <div id="text-box" className="scroll">{storyobj.blob}
                    <div id="option-buttons" className="btn-grid">
                        {/* {storyobj.options.map((option) => <button onClick={this.handleClick}
                            id={option.next} className="btn-danger">{option.name}</button>)} */}
                        <button onClick={ () => this.handleClick(storyobj.options[1].next)} className="btn-danger">{storyobj.options[1].name}</button>
                        <button onClick={ () => this.handleClick(storyobj.options[0].next)} className="btn-danger">{storyobj.options[0].name}</button>
                    </div>
                </div>
            </section>
        )
    }
}
export default Textbox;