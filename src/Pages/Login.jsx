import Cafe1 from '../assets/cafe1.jpg'
import Register from '../component/hero/Register'
function Login() {
  return (
    <div className="min-h-screen py-40" style={{backgroundImage:'linear-gradient(115deg, #9F7AEA, #FEE2FE)'}}>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${Cafe1})`}}>
          <h1 className="text-white text-3xl mb-3">Welcome</h1>
          <div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
          </div>
        </div>
        <Register />
      </div>
    </div>
  </div>
  )
}

export default Login