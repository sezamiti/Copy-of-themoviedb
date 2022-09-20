import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis  } from '@fortawesome/free-solid-svg-icons'

const Ellipsis = () => {
  return (
    <div className='w-full h-full bg-white/50 rounded-full flex justify-center items-center hover:cursor-pointer'>
        <div >  
        <FontAwesomeIcon icon={faEllipsis} />
        </div>
    </div>
  )
}

export default Ellipsis