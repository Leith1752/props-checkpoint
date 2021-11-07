
export default function Profile(props) {
    console.log("our props",props)
    return ( <div>
  
        <div className="Image">

         Image:
         <img src={props.image} />
   
        </div>
        <div className="FullName">
            FullName:
            <h1>  {props.fullName}</h1>

         </div>
            <div className="BIO">
                BIO:
                {props.bIO}
            </div>
            <div className='Profession'>
                Profession:
                {props.proffesion}
            </div>
              
    </div>
    );
}
