export const myRender = (h, self) => {

  // return h('div', {}, [
  //   self.list.map(item => {
  //     return h('div', {
  //       class: 'user-profile'
  //     }, item)
  //   })
  // ])

  return (
    <div>
      {
        self.list.map(item => {
          return <div className='user-profile' key={item}>{item}</div>
        })
      }
    </div>
  )
}
