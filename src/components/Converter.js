import { useState } from 'react'

export default function Converter () {
  const [color, setColor] = useState('')

  const handler = ({target}) => {
    if (target.value > 7) {
      return
    }

    const input =  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value)
    if (input === null) {
      setColor('Error')
      return
    }

    const rgb = `${parseInt(input[1], 16)}, ${parseInt(input[2], 16)}, ${parseInt(input[3], 16)}`
    setColor(`rgb${rgb}`)
  }

  return(
    <form className="convertet" style={{backgroundColor: color}}>
      <input className="input" onChange={handler} />
      <div className="result">{color}</div>
    </form>
  )
}