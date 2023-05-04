import Clock from './Clock';

function ClookList({quantities=[]}){
    return(
        <div>
{quantities.map(()=>(
    // <Clock key={key}/>
    <Clock key={Math.random()}/>

))}
        </div>
    );
}
export default ClookList;