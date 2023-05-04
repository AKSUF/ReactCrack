import Clock from './Clock';

function ClookList({quantities=[]}){
    return(
        <div>
{quantities.map((key)=>(
    <Clock key={key}/>
))}
        </div>
    );
}
export default ClookList;