import React from 'react'

type Props={
    user: userProps[],
    loading: boolean,

}

interface userProps {
    userId: number
    id?: number
    title: string
    body: string
}

const Home:React.FC<Props> = (props) => {
    const {user , loading} = props;
    if(loading){
        return <h1>Loading....</h1>
    }
  return (
    <div>
      <ul className='list-group mb-4'>
        {user.map(use => (
            <li key={use.id} className="list-group-item">{use.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
