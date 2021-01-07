import * as typeformEmbed from '@typeform/embed'
import { useEffect, useRef, useState } from 'react'
import { TOKEN, CLIENT_ID, CLIENT_SECRET } from '../utils/constants'
function Survey() {
  const fetchdata = async () => {
    const res = await fetch(
      'https://api.typeform.com/forms/EZBeFIJV/responses',
      {
        'authorization': 'bearer ' + TOKEN,
      })
    console.log('bearer ' + TOKEN)
    console.log(res)
  }

  const reference = typeformEmbed.makePopup(
    'https://5rjtqazt3ko.typeform.com/to/EZBeFIJV',
    {
      onSubmit: function (event) {
        console.log(event)
      },
      autoClose: 5
    }
  )

  useEffect(() => {
    fetchdata()
    reference.open()
  })

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Survey;