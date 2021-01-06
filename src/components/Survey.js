import * as typeformEmbed from '@typeform/embed'
import { useEffect, useRef, useState } from 'react';

function Survey() {
  // const typeformRef = useRef(null)
  // const reference = typeformEmbed.makePopup(
  //   'https://developerplatform.typeform.com/to/EZBeFIJV', // NOTE: Replace with your typeform URL
  //   {
  //     onSubmit: function (event) {
  //       console.log(event.response_id)
  //     }
  //   }
  // )

  // curl --request GET \
  // --url 'https://api.typeform.com/forms/EZBeFIJV/responses' \
  // --header 'authorization: bearer J6HBvbDGC8V3MG7rmRVxhJK8Z5UmpiJK9hiDv3djbLF7'

  const token = 'J6HBvbDGC8V3MG7rmRVxhJK8Z5UmpiJK9hiDv3djbLF7'

  const fetchdata = async () => {
    const res = await fetch(
      'https://api.typeform.com/forms/EZBeFIJV/responses',
      {
        'mode': 'no-cors',
        'authorization': 'Bearer ' + token,
      })
    console.log(res)
  }


  // useEffect(() => {
  //   typeformEmbed.makeWidget(typeformRef.current, 'https://admin.typeform.com/to/EZBeFIJV', {
  //     hideFooter: true,
  //     hideHeaders: true,
  //     opacity: 50,
  //     onSubmit: function (event) {
  //       console.log(event.response_id)
  //     }
  //   })
  // }, [typeformRef])

  // return <div ref={typeformRef} style={{ height: '100vh', width: '100%' }}></div>
  // return (<div style={{ height: '100vh', width: '100%' }}>
  //   <h1>Welcome</h1>

  // </div>)

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