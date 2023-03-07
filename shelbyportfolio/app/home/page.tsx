import { ReactElement } from "react"
import Layout from '../layout'
import NestedLayout from './layout'

 function Home() {
  return (
  <div>Home</div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>

  )
}
export default Home