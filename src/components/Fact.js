const Fact = (props) => {
    return(
        <div className="bg-lime-500 text-white p-4 rounded-lg shadow-md w-full max-w-xl mx-auto">
            { props.fact }
        </div>
    );
}

export default Fact;