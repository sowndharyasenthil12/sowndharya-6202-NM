

export default function Contact() {
    const config = {
        email : 'sowndharyasenthil02@gmail.com',
        mobile: '7092462386'
    }
    return <section id='contact' className='flex flex-col bg-secondary px-5 py-32  text-white' >
          
        <div className='flex flex-col items-center '>

            <h1 className='text-4xl  border-b-4 border-[red] mb-5 w-[140px] font-bold'>Contact</h1>
           <p className="pb-5">if you want to discuss more in detail,please contact me</p>
             <p className='py-2'><span className='font-bold'>EMAIL:</span>{config.email}</p>
             <p  className='py-2'><span className='font-bold'>MOBILE NO :</span>{config.mobile}</p>
         </div>
       
       
        </section>
}