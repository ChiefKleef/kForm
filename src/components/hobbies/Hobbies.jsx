import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Hobbies.styl';
import { addHobby, removeHobby } from '../../actions/index.jsx';
import Hobby from './Hobby.jsx';
import AddHobby from './AddHobby.jsx';

class Hobbies extends React.Component {
  constructor() {
    super();
    this.addHobby = this.addHobby.bind(this);
    this.removeHobby = this.removeHobby.bind(this);
  }

  addHobby(name) {
    this.props.dispatch(addHobby(name));
  }

  removeHobby(id) {
    this.props.dispatch(removeHobby(id, this.props.hobbies));
  }

  render() {
    const hobbies = this.props.hobbies;
    return (
      <div className="hobbies">
        <div className={`hobbies-container ${hobbies.length > 0 ? 'hobbies-container-active' : 'hobbies-container-inactive'}`}>
          <CSSTransitionGroup
            className="hobby-animation-tg"
            transitionName="hobby-animation"
            transitionEnterTimeout={200}
            transitionLeave={false}
          >
            {hobbies.map(hobby =>
              (<Hobby
                key={hobby.id}
                id={hobby.id}
                name={hobby.text}
                color={hobby.color}
                removeHobby={this.removeHobby}
              />),
            )}
          </CSSTransitionGroup>
          <div className="hobbies-container-emptyMessage">
            <CSSTransitionGroup
              className="emptyMessage-animation-tg"
              transitionName="emptyMessage-animation"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
            >
              {hobbies.length === 0
                ? <span className="hobbies-container-emptyMessage-text">No Hobbies Added</span>
                : null
              }
            </CSSTransitionGroup>
          </div>
        </div>
        <AddHobby addHobby={this.addHobby} />
      </div>
    );
  }
}

Hobbies.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hobbies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  hobbies: state.hobbies,
});

export default connect(
   mapStateToProps,
 )(Hobbies);
