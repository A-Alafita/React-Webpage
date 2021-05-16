import '../CSS/UserProfile.css';

function InputLabel(Props) {
    return (<div className="input">
                <input type="text" required="required" placeholder={Props.value}/>
                <label>{Props.value}</label>
    </div>);
}

export default InputLabel;