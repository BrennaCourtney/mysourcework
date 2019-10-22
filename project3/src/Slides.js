import React, { Component } from 'react';
import './App.css';

export default class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ['https://www.whitecube.com/media/w1200/artwork/7/0/a/a108307.jpg',
            'https://www.whitecube.com/media/w1200/Artists/haim-steinbach-untitled-dog-chew-ball-fins-2017.jpg',
        'https://www.whitecube.com/media/w1200/artwork/4/1/a/a55414.jpg',
    'https://www.whitecube.com/media/w1200/artwork/2/3/a/a55432.jpg'],
            desc: ["popular mechanics", "Untitled (dog chew, ball, fins)", "caution", "Untitled (wheelbarrow, bricks)"],
            curImage: 0,
            curDescription: 0
        }
    }

    nextPic = () => {
        let arrLen = this.state.images.length;
        let curPic = this.state.curImage;
        let curDesc = this.state.curDescription;
        let nextPic = (curPic + 1) % arrLen;
        let nextDesc = (curDesc + 1) % arrLen;
        this.setState({ 
            curImage: nextPic,
            curDescription: nextDesc
        })
    }

    render() {
        let arrLen = this.state.images.length;
        let rawIndex = this.props.curImageIndex;
        let fixedIndex = rawIndex % arrLen;
        return (
            <div className='imageHolder'>
                <img className="center spaceDown" src={this.state.images[fixedIndex]} />
                <p class="center">{this.state.desc[fixedIndex]}</p>
            </div>
        )
    }
}