import './Spinner.css';
const Spinner = ()=>{
    return(
        <div className='flex flex-col justify-center items-center'>
            <div className="spinner mt-10"></div>
            <p className='mt-10'>Please wait..</p>
        </div>
    );
}
export default Spinner;