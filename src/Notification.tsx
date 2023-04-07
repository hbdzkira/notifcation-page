const Notification = (props:any) => {
    const readStyle = !props.isRead ? "bg-neutral-blue-1" : null;
    return (
        <>
        <div className={`w-full p-4 flex gap-2 my-3 rounded ${readStyle}`}>
            <img src={props.avatar} alt="" className="w-10 h-10 mr-3 rounded-full"/>
                <div className="text-sm text-neutral-blue-5">
                    <strong className="text-neutral-blue-6">{props.name} </strong>  
                    <p className="inline">{props.action}</p>
                    {props.group && <p className=" text-primary-blue font-bold mx-1 inline cursor-pointer">{props.group} </p>}
                    {props.target && <p className="inline font-bold active:text-primary-blue cursor-pointer"> {props.target}</p>}
                    {!props.isRead && <div className="w-2 h-2 bg-primary-red rounded-full mx-1 inline-block"></div>}
                    <p className="text-sm text-neutral-blue-4 pt-1">{props.time}</p>  
                </div> 
                {props.targetPic && <img src={props.targetPic} className="w-10 h-10 ml-auto inline active:outline active:outline-neutral-blue-3 rounded cursor-pointer" /> }    
        </div>
        {props.message && <p className="border border-gray-400 rounded p-4 ml-20 text-sm text-neutral-blue-5 mt-[-1rem] active:bg-neutral-blue-2">{props.message}</p>}  
        </>
    );
}
 
export default Notification;