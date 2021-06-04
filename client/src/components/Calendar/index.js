import React from "react";
import { InlineWidget} from 'react-calendly'


class Calendly extends Component {
  componentDidMount() {
    


  }
  componentWillUnmount() {
    

    
  }
  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/username/15min" />
      </div>
    );
  }
}

export default Calendly;