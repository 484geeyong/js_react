import React ,{useState, useRef}from 'react';

function InputSample(){
    // const [text,setText] = useState('');
    const [input, setInput] = useState({
        name:'',
        nickname:'',
    });
    const{name, nickname}=input;
    const nameInput = useRef();
    const onChange = (e) =>{
        // setText(e.target.value);
        const {name,value}=e.target;
        setInput({
            ...input,
            [name]: value,
        });
        
    };
    const onReset =() =>{
        // setText('');
        setInput({
            name:'',
            nickname:'',
        });
        nameInput.current.focus();
    };
    return(
        <div>
            {/* <input onChange={onChange} value={text}/> */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {/* {text} */}
                {name}({nickname})
            </div>
        </div>
    );
}
export default InputSample;
