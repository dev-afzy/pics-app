import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: null };
  }

  componentDidMount() {
    console.log(this.ImageRef)
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    console.log('height:', height);
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
    console.log(this.state.spans)
  }
  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref = { this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
