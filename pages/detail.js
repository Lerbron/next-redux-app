import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './../components/layout';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Head><div>Detail Page {this.props.count}</div></Head>
    )
  }
}


function mapStateToProps(state) {
  return {
    count: state.homeReducer.count
  }
}

export default connect(mapStateToProps, null)(Detail);