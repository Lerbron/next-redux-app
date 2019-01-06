import { connect } from 'react-redux'
import Counter from './counter'

function Examples () {
  return (
    <div>
      <Counter />
    </div>
  )
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(Examples)
