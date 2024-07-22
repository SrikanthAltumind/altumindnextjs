import  { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Counter = ({value,countSpeed, statsRef}) => {
    const [visible, setVisible] = useState(false)
    const [count, setCount] = useState(0)
    
useEffect(()=> {
    const handleScroll = ()=> {
        // eslint-disable-next-line react/prop-types
        if (statsRef.current) {
            // eslint-disable-next-line react/prop-types
            const top = statsRef.current.getBoundingClientRect().top;
            const isVisible = top <= window.innerHeight;
            console.log(isVisible)
            if(isVisible){
                setVisible(isVisible)
                window.removeEventListener('scroll', handleScroll)
            }

          }
    }
    window.addEventListener('scroll', handleScroll)

    return ()=> {
        window.removeEventListener('scroll', handleScroll)
    }
},[])

useEffect(()=> {
    // console.log(visible)
    let counterId
    let increament = 0;
    counterId = setInterval(() => {
        if (increament < value) {
            setCount(count=> count+1)
            increament += 1;
        } else {
            clearInterval(counterId);
        }
    }, countSpeed);

    return ()=> {
        clearInterval(counterId)
        setCount(0)
    }
},[visible])
  return (
    <span>{count}</span>
  )
}

export default Counter