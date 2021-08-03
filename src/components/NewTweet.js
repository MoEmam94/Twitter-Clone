import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
  }
  handleChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props
    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
      text: ''
    }))
  }
  render() {
    const { text } = this.state
    {/* todo: Redirect to / if submitted */}
    const tweetLeft = 280 - text.length
    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet) 
// import React, { useState } from 'react'
// import { connect, useDispatch } from 'react-redux'
// import { handleAddTweet } from '../actions/tweets'

// const NewTweet = ({ id }) => {
    
//         const [value, setValue] = useState('')
//         const handleChange = (e) => {
//           setValue(e.target.value)
//         }
//         const handleSubmit = (e) => {
//             e.preventDefault()
//             const { text } = value
//             const dispatch = useDispatch()
//             dispatch(handleAddTweet(text, id))
//             setValue('')
//           }
//         const tweetLeft = 280 - value.length
//     return (
//         <div>
//             <h3 className='center'>Compose New Tweet!</h3>
//             <form className='new-tweet' onSubmit={handleSubmit}>
//                 <textarea 
//                 placeholder="What are you thinking?"
//                 value={value}
//                 onChange={handleChange}
//                 className="textarea"
//                 maxLength={280}
//                 />
//                 {tweetLeft <= 100 && (
//                     <div className="tweet-length">
//                         {tweetLeft}
//                     </div>
//                 )}
//                 <button
//                 className='btn'
//                 type="submit"
//                 disabled={value === ''}>
//                     Submit!
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default connect()(NewTweet)