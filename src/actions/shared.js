import { getIntialData } from '../utils/api'
import { recieveUsers } from './users'
import { recieveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export const handleIntitialData = () => (
    (dispatch) => getIntialData().then(({ users, tweets }) => {
        dispatch(recieveUsers(users))
        dispatch(recieveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
    })
)