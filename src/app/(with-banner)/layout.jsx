const Layout = ({children}) => {
  return (
    <div>
      <marquee behavior='' direction=''>
        <h1>Midu Banner</h1>
      </marquee>
        {children}
    </div>
  )
}

export default Layout
