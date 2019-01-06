import React from 'react'
import { connect } from 'react-redux'
import Examples from '../components/examples';
import Link from 'next/link';
import http from './../utils/fetch'
import { requestHomeList, receiveHomeList } from './../store/actions/homeActions';
import Head from './../components/layout';


class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    let res = await http.get(`/api/v1/topics?page=1&limit=10`)
    reduxStore.dispatch(receiveHomeList(res.data.data))
    return { }
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  fetchNextPage = () => {
    this.props.fetchHomeList(2)
  }

  render () {
    let {homeList} = this.props;
    return (
      <Head title='home page'>
      <div>
        <Link href='/detail'><a>to detail</a></Link>
        <button onClick={this.fetchNextPage}>下一页</button>
        <Examples />
        {
          homeList.length > 0 && homeList.map((item, idx) => {
            return (<p className='title' key={idx}>{item.title}</p>)
          })
        }
      </div>
      </Head>
    )
  }
}

function mapStateToProps(state) {
  return {
    homeList: state.homeReducer.homeList
  }
}

function mapDispatch(dispatch) {
  return {
		fetchHomeList: page => dispatch(requestHomeList(page))
	}
}

export default connect(mapStateToProps, mapDispatch)(Index)
