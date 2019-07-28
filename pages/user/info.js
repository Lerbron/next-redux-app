import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from './../../components/layout';
import { withRouter } from 'next/router'
class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { router } = this.props

    return (
      <Head><div>user info Page {router.query.id}</div></Head>
    )
  }
}


function mapStateToProps(state) {
  return {
    count: state.homeReducer.count
  }
}

export default connect(mapStateToProps, null)(withRouter(Detail));