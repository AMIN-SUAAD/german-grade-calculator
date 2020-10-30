import React, { useState } from 'react';

const Home = () => {
    const [userInfo, setUserInfo] = useState({});
    const [germanGrade, setGermanGrade] = useState(0);
    const [gradeFound, setGradeFound] = useState(false);
    function handleBlur(e){
        userInfo[e.target.name] = e.target.value;
        setUserInfo(userInfo);
        console.log(userInfo);

    }
    function handleClick(e){
        e.preventDefault();
        const userGrade = (((userInfo.maxGrade - userInfo.userGrade)/(userInfo.maxGrade - userInfo.minGrade))*3)+1;
        setGermanGrade(userGrade);
        
        setGradeFound(true);
        
       
    }
    
    return (
        <div style = {{backgroundColor: '#ddd', height: '600px'}}>
            <h3 style = {{textAlign: 'center', paddingTop: '10px'}}>German Grade Calculator for Bangladeshi Students</h3>
                    <div className = "row" style = {{backgroundColor: '#ddd'}}>
            
           <div className="col-md-6">
            <div className = "ml-5 mr-5 mt-3">   
           <form>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Nmax</label>
    <input onBlur = {handleBlur} name = 'maxGrade' type="text" class="form-control" id="exampleInputPassword1"></input>
    <small id="emailHelp" class="form-text text-muted">Best possible grade in your grading system</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Nmin</label>
    <input onBlur = {handleBlur} name = 'minGrade' type="text" class="form-control" id="exampleInputPassword1"></input>
    <small id="emailHelp" class="form-text text-muted">Minimum grade to get the B.Sc. degree</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Your Score</label>
    <input onBlur = {handleBlur} name = 'userGrade' type="text" class="form-control" id="exampleInputPassword1"></input>
    <small id="emailHelp" class="form-text text-muted">Your final grade</small>
  </div>

  <button onClick={handleClick} type="submit" class="btn btn-primary">Convert</button>
  {
      gradeFound && <p>Your German Grade is {germanGrade}</p>
  }
</form>

           </div>
           </div>



           <div className="col-md-6">
               <div className = "mr-5 mt-3 ml-5" style = {{paddingTop: '30px'}}>
           <table class="table table-dark">
  <thead>
    <tr>
      
      
      <th scope="col">German Grade</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      
      <td>5</td>
      <td>(insufficient / failed: an achievement which does not meet the requirements)</td>
    </tr>
    <tr>
      
      
      <td>3.7, 4.0</td>
      <td>(sufficient: an achievement which barely meets the requirements)</td>
    </tr>
    <tr>
      
      
      <td>2.7, 3.0. 3.3</td>
      <td>(satisfactory: an achievement which corresponds to average requirements)</td>
    </tr>
    <tr>
      
      
      <td>1.7, 2.0, 2.3</td>
      <td>(good: an achievement substantially above average requirements)</td>
    </tr>
    <tr>
      
      
      <td>1.0, 1.3</td>
      <td>(very good: an outstanding achievement)</td>
    </tr>
  </tbody>
</table>
        </div>

           </div>
        </div>
        </div>

    );
};

export default Home;