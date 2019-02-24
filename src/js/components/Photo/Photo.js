import React from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Caption from "../Captions/Caption";
import Meta from "../Meta/Meta";

class Photo extends React.Component {
  constructor() {
    super();
    this.state = {
      showCaption: false,
      showMeta: false,
      showFullImage: false
    }
  }


  handleImageClick = (event) => {
    const targetClass = event.nativeEvent.target.className;
    if (!this.state.showFullImage || targetClass == 'close') {
      this.setState({
        showFullImage: !this.state.showFullImage,
      });
    }
  }

  handleCaptionClick = () => {
    this.setState({
      showCaption: !this.state.showCaption
    })
  }

  handleMetaClick = () => {
    this.setState({
      showMeta: !this.state.showMeta
    })
  }

  render() {
    const { showCaption, showMeta, showFullImage } = this.state;
    return (
      <section 
        className={ showFullImage ? 'photo active' : 'photo' }
        onClick={ this.handleImageClick }>
        { showFullImage && 
          <section className="full-photo">
            <img src="https://via.placeholder.com/900" />
            
            { showCaption && 
              
                <Caption />
              
            }
            
            <div className="caption-toggle" onClick={ this.handleCaptionClick }>Show Caption</div>
            <TransitionGroup component={ null }>
            { showMeta && 
              <CSSTransition classNames="meta-animating" timeout={{ enter: 500, exit: 500 }}>
                <Meta metaClick={ this.handleMetaClick }/>
              </CSSTransition>
            }
              <div className="meta-toggle" onClick={ this.handleMetaClick }>Click for Meta</div>
            </TransitionGroup>
            <div className="close" onClick={ this.handleImageClick }>
              CLOSE
            </div>
          </section>
        }
        <img src="https://via.placeholder.com/900" />
      </section>
    );
  }
}

export default Photo;