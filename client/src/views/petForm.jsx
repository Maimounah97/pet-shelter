import React, { useState } from 'react'
//team
const PetForm = (props) => {
    //keep track of what is being typed via useState hook
    
    const {initialName,onSubmitProp}=props;
    const {initialType}=props;
    const {initialDesc}=props;
    const {initialSkill1}=props;
    const {initialSkill2}=props;
    const {initialSkill3}=props;
    const [name, setName] = useState(initialName);
    const [type,setType]=useState(initialType);
    const [desc, setDesc] = useState(initialDesc);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);
        //handler when the form is submitted
    const onSubmitHandler = e => {
        console.log("button clicked")
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name, type, desc, skill1, skill2, skill3});}
        
      
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                <label>Pet Type:</label><br/>
                <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/><br/>
                <label>Pet Description:</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/><br/>
                <label>Skill 1:</label><br/>
                <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/><br/>
                <label>Skill 2:</label><br/>
                <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill2}/><br/>
                <label>Skill 3:</label><br/>
                <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/>
            </p>
            
            <input type="submit"/>
        </form>
    )
}

export default PetForm;