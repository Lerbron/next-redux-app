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
      .then(res => {
        console.log('res:', res)
      }, err => {
        console.log('qqqq', err)
      })
  }

  render () {
    let {homeList} = this.props;
    return (
      <Head title='home page'>
      <div>
        <img src='/static/imgs/banner1.png' alt='banner' />
        <Link href='/info/detail?id=111' as = '/info/detail/111'><a>to detail</a></Link>
        <Link href='/user/info?id=111' as = '/user/info/111'><a>to detail</a></Link>
        <button onClick={this.fetchNextPage}>下一页</button>
        <Examples />
        {
          homeList.length > 0 && homeList.map((item, idx) => {
            return (
              <div key={idx}>
                <p className='title' >{item.title}</p>
                <div dangerouslySetInnerHTML={{__html: item.content}} />
              </div>)
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
