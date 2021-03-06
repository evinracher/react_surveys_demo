import * as typeformEmbed from '@typeform/embed'
import { createClient } from '@typeform/api-client'
import { useEffect } from 'react'
import { TOKEN, CLIENT_ID, CLIENT_SECRET } from '../utils/constants'
function Survey() {
  const fetchdata = async () => {
    try {
      const res = await fetch(
        'https://api.typeform.com/forms/EZBeFIJV/responses',
        {
          // 'mode': 'no-cors',
          'authorization': 'bearer ' + TOKEN,
        })
      console.log('Bearer ' + TOKEN)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  
  const typeformAPI = createClient({ token: TOKEN })
  const fetchdata2 = async () => {
    try {
      const res =  await typeformAPI
      .forms
      .list()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
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
    // fetchdata()
    fetchdata2()
    reference.open()
  })

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Survey;